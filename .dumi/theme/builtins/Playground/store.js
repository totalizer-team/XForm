 
import { makeAutoObservable, configure } from 'mobx';
import { $$get, $$set, $$merge } from '@totalizer/xform';

configure({
  enforceActions: 'never',
});



class Store {
  mode = 'light';
  myFormData = {};
  myFormSchema = {};
  visible = false;

  constructor() {
    makeAutoObservable(this);
  }


  setMode(v) {
    this.mode = v;
  }

  setSchema(v) {
    this.myFormSchema = v;
    this.myFormData = $$merge(this.myFormSchema, {})
  }

  init() {
    this.myFormSchema = {
      title: {
        c: 'TextField',
        xs: 6,
        label: 'Title',
      },
      type: {
        c: 'Select',
        xs: 6,
        label: 'Type',
        options: [1, 2, 3],
      },
      des: {
        c: 'TextField',
        xs: 12,
        label: 'Description',
        multiline: true,
        minRows: 5,
        maxRows: 10,
      },
    }
    this.myFormData = $$merge(this.myFormSchema, {})
  }


  openDrawer() {
    this.visible = true;
  }

  closeDrawer() {
    this.visible = false;
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
