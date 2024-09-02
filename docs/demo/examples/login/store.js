import { $$get, $$merge, $$set } from '@totalizer/xform';
import { configure, makeAutoObservable } from 'mobx';
import schema from './schema';

configure({
  enforceActions: 'never',
});

class Store {
  /**
   * 定义 myFormData 用于存储表单数据
   * $$merge 方法能够确保传入的数据与schema保持一致
   */
  myFormData = $$merge(schema, {});

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * 你需要将 $$set, $$get 这两个方法按照以下示例置于你的 store 中
   * 以便表单组件与 store 进行数据通信
   */
  $$set(path, value) {
    $$set(this, path, value);
  }

  $$get(path) {
    return $$get(this, path);
  }
}

export default new Store();
