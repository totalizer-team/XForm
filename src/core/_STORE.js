import { makeAutoObservable, observable } from 'mobx';

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

  registerStatus(path, schema) {
    if (this.componentStatus[path]) return;
    this.componentStatus[path] = {
      errorMsg: '', // 错误信息， 类型 String
      // visible: true,
      ...schema,
    };
  }

  resetStatus(path, visible) {
    this.componentStatus[path].errorMsg = '';
    this.componentStatus[path].visible = visible;
    if (this.getValue(path) !== this.componentStatus[path].default) {
      this.setValue(path, this.componentStatus[path].default);
    }
    this.tick = !this.tick;
  }

  destroyStatus(path) {
    delete this.componentStatus[path];
  }

  context(path) {
    return this.componentStatus[path];
  }

  validate(path) {
    const { visible } = this.componentStatus[path];
    if (visible) {
      const value = this.getValue(path);
      if (typeof this.componentStatus[path].rule === 'function') {
        const errorMsg = this.componentStatus[path].rule(value);
        this.componentStatus[path].errorMsg = errorMsg || '';
      }
    } else {
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
      this.componentStatus[path].onChange({
        getValue: this.getValue.bind(this),
        context: this.context.bind(this),
      });
    }
  }

  // $get(){}
  // $set(){}

  changeAll() {
    Object.keys(this.componentStatus).forEach((key) => {
      this.onChange(key);
    });
  }

  setValue(path, value) {
    this.store.$$set(path, value);
    this.setTick();

    this.onChange(path);
    this.validate(path);
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
