import { makeAutoObservable, observable } from 'mobx';
import COMPONENTS from '../components';
import getPrefixPath from './getPrefixPath';

class Store {
  /**
   *
   */
  tick = true;

  /**
   *
   */
  debugMode = 'data';

  /**
   *
   */
  loaded = false;

  /**
   * 组件的状体管理器
   */
  componentStatus = {};

  /**
   * 存储原始数据
   */
  path = '';

  store = null;

  schema = {};

  constructor(path, store, schema) {
    makeAutoObservable(this, {
      schema: observable.shallow,
    });

    this.path = path;
    this.store = store;
    this.schema = schema;
  }

  /**
   * setTick
   * 该操作用于刷新内部组件的状态，例如 react-json-view
   */
  setTick() {
    this.tick = !this.tick;
  }

  setDebugMode(v) {
    this.debugMode = v;
  }

  /**
   * 组件生命周期事件：注册组件状态
   * 组件初始化时，注册组件的状态
   * @param {*} path
   * @param {*} schema
   * @returns
   */
  registerStatus(path, schema) {
    if (this.componentStatus[path]) return;

    const { type } = COMPONENTS[schema.c];

    if (type === 'Enh') {
      this.componentStatus[path] = {
        ...schema,
      };
    } else {
      this.componentStatus[path] = {
        errorMsg: '', // 错误信息， 类型 String
        _rule: null, // 组件内置校验规则
        ...schema,
      };
    }
  }

  /**
   * 组件生命周期事件：重置组件状态
   * 组件 visible 发生变化时，重置部分状态，包括 visible errorMsg value
   * @param {*} path
   * @param {*} visible
   */
  resetStatus(path, visible) {
    const { type } = COMPONENTS[this.componentStatus[path].c];

    if (type === 'Enh') {
      this.componentStatus[path].visible = visible;
    } else {
      this.componentStatus[path].errorMsg = '';
      this.componentStatus[path].visible = visible;
      if (this.getValue(path) !== this.componentStatus[path].default) {
        this.setValue(path, this.componentStatus[path].default);
      }
    }
  }

  /**
   * 组件生命周期事件：销毁组件状态
   * 组件被销毁时触发该事件
   * @param {*} path
   */
  destroyStatus(path) {
    delete this.componentStatus[path];
  }

  /**
   * 表单生命周期事件：表单初始化完成
   * schema所有组件均已注册完毕，执行 changeAll 以便确保组件的初始状态与联动规则保持一致。
   */
  formLoaded() {
    this.changeAll();
    this.loaded = true;
  }

  /**
   * 表单生命周期事件：表单销毁时触发
   */
  formDestroy() {
    this.loaded = false;
  }

  linkage(path) {
    if (this.loaded) {
      this.onChange(path);
    }
  }

  context(path) {
    return this.componentStatus[path];
  }

  setRule(path, fn) {
    if (!this.componentStatus[path]._rule) {
      this.componentStatus[path]._rule = fn;
    }
  }

  validate(path) {
    const { visible } = this.componentStatus[path];
    if (visible) {
      const value = this.getValue(path);

      let errorMsg = '';

      if (typeof this.componentStatus[path]._rule === 'function') {
        errorMsg = this.componentStatus[path]._rule(value, {
          $getValue: this.$getValue.bind(this),
          prefixPath: getPrefixPath(path, this.path),
        });
      }

      if (!errorMsg && typeof this.componentStatus[path].rule === 'function') {
        errorMsg = this.componentStatus[path].rule(value, {
          $getValue: this.$getValue.bind(this),
          prefixPath: getPrefixPath(path, this.path),
        });
      }

      if (this.componentStatus[path].errorMsg !== errorMsg) {
        this.componentStatus[path].errorMsg = errorMsg;
      }
    } else {
      this.componentStatus[path].errorMsg = '';
    }
  }

  clearErrorMsg(path) {
    if (this.componentStatus[path].errorMsg) {
      this.componentStatus[path].errorMsg = '';
    }
  }

  validateAll() {
    Object.keys(this.componentStatus).forEach((path) => {
      this.validate(path);
    });
  }

  onChange(path) {
    if (typeof this.componentStatus[path].onChange === 'function') {
      const value = this.getValue(path);
      this.componentStatus[path].onChange(value, {
        $get: this.$get.bind(this),
        $set: this.$set.bind(this),
        prefixPath: getPrefixPath(path, this.path),
      });
    }
  }

  $get(path, attr) {
    const targetPath = `${this.path}.${path}`;
    if (attr === 'value') {
      return this.store.$$get(targetPath);
    }

    return this.componentStatus[targetPath][attr];
  }

  $set(path, attr, value) {
    const targetPath = `${this.path}.${path}`;
    if (attr === 'value') {
      this.store.$$set(targetPath, value);
    } else {
      this.componentStatus[targetPath][attr] = value;
    }
  }

  $getValue(path) {
    const targetPath = `${this.path}.${path}`;
    return this.store.$$get(targetPath);
  }

  changeAll() {
    Object.keys(this.componentStatus).forEach((path) => {
      this.onChange(path);
    });
  }

  setValue(path, value) {
    this.store.$$set(path, value);
    this.setTick();
    // this.validate(path);
  }

  getValue(path) {
    return this.store.$$get(path);
  }

  get isCorrect() {
    return Object.keys(this.componentStatus)
      .filter((el) => el.visible)
      .every((key) => this.componentStatus[key].errorMsg === '');
  }
}
export default Store;
