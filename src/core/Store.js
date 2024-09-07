import { makeAutoObservable, observable } from 'mobx';
import COMPONENTS from '../components';
import getPrefixPath from './getPrefixPath';
import merge from './merge';

class Store {
  /**
   * tick 产生变化，需要强制更新的组件进行状态刷新
   */
  tick = true;

  /**
   * 面板模式：data, schema, stauts
   * data: 显示当前表单值
   * schema: 表单的配置 schema
   * status: 当前组件的状态
   */
  debugMode = 'data';

  /**
   * 表单生命周期状态
   * 用来判断表单是否加载完成
   */
  loaded = false;

  /**
   * 组件的状体管理器
   */
  componentStatus = {};

  /**
   * 存储原始数据
   * path store schema
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

  /**
   * setDebugMode
   * 设置面板模式：data, schema, stauts
   * 参考 debugMode
   * @param {*} v
   */
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
    const { required } = schema;

    if (type === 'Enh') {
      this.componentStatus[path] = {
        ...schema,
      };
    } else {
      this.componentStatus[path] = {
        errorMsg: '', // 错误信息， 类型 String
        _rule: null, // 组件内置校验规则
        _required: required
          ? (v) => {
            // 必填项校验规则
            if ([null, undefined, ''].includes(v)) return 'Required!';
            if (Array.isArray(v) && v.length === 0) return 'Required!';
            return '';
          }
          : null,
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
   * schema 所有组件均已注册完毕，触发所有组件 schema 的 onChange 事件以便确保组件的初始状态与联动规则保持一致。
   */
  formLoaded() {
    this.loaded = true;
    this.changeAll();
  }

  /**
   * 表单生命周期事件：表单销毁时触发
   */
  formDestroy() {
    this.loaded = false;
  }

  /**
   * linkage
   * 当组件的值发生变化时，触发组件的联动
   * 组件未全部加载（loaded = false）时，不触发联动
   * @param {*} path
   */
  linkage(path) {
    if (this.loaded) {
      this.onChange(path);
    }
  }

  context(path) {
    return this.componentStatus[path];
  }

  /**
   * 设置组件的内置的校验规则（非用户定义的校验规则）
   * @param {*} path
   * @param {*} fn
   */
  setRule(path, fn) {
    if (!this.componentStatus[path]._rule) {
      this.componentStatus[path]._rule = fn;
    }
  }

  /**
   * 校验组件
   * 如果组件不可见（visible = false），则不进行校验
   * @param {*} path
   */
  validate(path) {
    const { visible } = this.componentStatus[path];
    let errorMsg = '';
    if (visible) {
      const value = this.getValue(path);

      /**
       * 组件内置规则校验
       */
      if (typeof this.componentStatus[path]._rule === 'function') {
        errorMsg = this.componentStatus[path]._rule(value);
      }

      /**
       * 必填项校验规则
       */

      if (
        !errorMsg
        && typeof this.componentStatus[path]._required === 'function'
      ) {
        errorMsg = this.componentStatus[path]._required(value);
      }

      /**
       * 自定义校验规则
       */
      if (!errorMsg && typeof this.componentStatus[path].rule === 'function') {
        errorMsg = this.componentStatus[path].rule(value, this.events(path));
      }
    }
    if (this.componentStatus[path].errorMsg !== errorMsg) {
      this.componentStatus[path].errorMsg = errorMsg;
    }
    return errorMsg;
  }

  /**
   * 校验方法，清空组件的错误信息
   * @param {*} path
   */
  clearErrorMsg(path) {
    if (this.componentStatus[path].errorMsg) {
      this.componentStatus[path].errorMsg = '';
    }
  }

  /**
   * 表单校验，依次校验每个组件
   */
  validateForm() {
    let isCorrect = true;
    Object.keys(this.componentStatus).forEach((path) => {
      const errorMsg = this.validate(path);
      if (errorMsg) isCorrect = false;
    });
    return isCorrect;
  }

  /**
   * 联动方法，当组件值发生变化时触发该事件
   * @param {*} path
   */
  onChange(path) {
    if (typeof this.componentStatus[path].onChange === 'function') {
      const value = this.getValue(path);
      this.componentStatus[path].onChange(value, this.events(path));
    }
  }

  /**
   * 触发表单所有组件的联动
   */
  changeAll() {
    Object.keys(this.componentStatus).forEach((path) => {
      this.onChange(path);
    });
  }

  /**
   * 暴露给用户操控表单的事件函数
   * @param {*} path
   * @returns
   */
  events(path = '') {
    return {
      prefixPath: path ? getPrefixPath(path, this.path) : '',
      get: this.$get.bind(this),
      set: this.$set.bind(this),
      validate: this.validateForm.bind(this),
      reset: () => {
        this.setValue(this.path, merge(this.schema, {}));
        Object.keys(this.componentStatus).forEach((key) => {
          if (this.componentStatus[key].errorMsg) {
            this.componentStatus[key].errorMsg = '';
          }
        });
        this.changeAll();
      },
      getFormValues: () => JSON.parse(JSON.stringify(this.getValue(this.path))),
    };
  }

  $get(path, attr) {
    const targetPath = `${this.path}.${path}`;
    if (attr === 'value') {
      return this.getValue(targetPath);
    }

    return this.componentStatus[targetPath][attr];
  }

  $set(path, attr, value) {
    const targetPath = `${this.path}.${path}`;
    if (attr === 'value') {
      this.setValue(targetPath, value);
    } else {
      this.componentStatus[targetPath][attr] = value;
    }
  }

  $getValue(path) {
    const targetPath = `${this.path}.${path}`;
    return this.store.$$get(targetPath);
  }

  setValue(path, value) {
    this.store.$$set(path, value);
    this.setTick();
  }

  getValue(path) {
    return this.store.$$get(path);
  }
}
export default Store;
