import { ConstructionOutlined } from '@mui/icons-material';
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

  componentSchema = {};

  /**
   * 存储原始数据
   */
  path = '';

  store = null;

  schema = {};

  constructor(path, store, schema) {
    makeAutoObservable(this, {
      componentSchema: observable.shallow,
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
      visible: true,
    };
    this.componentSchema[path] = schema;
  }

  resetStatus(path, visible) {
    this.componentStatus[path].errorMsg = '';
    this.componentStatus[path].visible = visible;
    if (this.getValue(path) !== this.componentSchema[path].default) {
      this.setValue(path, this.componentSchema[path].default);
    }
    this.tick = !this.tick;
  }

  destroyStatus(path) {
    delete this.componentStatus[path];
    delete this.componentSchema[path];
  }

  getErrorMsg(path) {
    return this.componentStatus[path].errorMsg;
  }

  getVisible(path) {
    const schema = this.componentSchema[path];
    if (typeof schema.visible === 'function') {
      return schema.visible(this);
    }
    return true;
  }

  validate(path) {
    const { visible } = this.componentStatus[path];
    if (visible) {
      const value = this.getValue(path);
      if (typeof this.componentSchema[path].rule === 'function') {
        const errorMsg = this.componentSchema[path].rule(value);
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

  setValue(path, value) {
    this.store.$$set(path, value);
    this.setTick();
    this.validate(path);
  }

  getValue(path) {
    return this.store.$$get(path);
  }

  get isCorrect() {
    return Object.keys(this.componentStatus).every(
      (key) => this.componentStatus[key].errorMsg === '',
    );
  }
}
export default Store;
