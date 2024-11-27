
import { makeAutoObservable, configure } from 'mobx';
import { $$get, $$set, $$merge } from '@totalizer/xform';

configure({
  enforceActions: 'never',
});



class Store {
  mode = 'light';
  content = { text: '' };
  myFormData = {};
  myFormSchema = {};
  visible = false;

  constructor() {
    makeAutoObservable(this);

    this.init();
  }


  setMode(v) {
    this.mode = v;
  }
  setContent(v) {
    this.content = v;
  }

  setSchema(v) {
    this.myFormSchema = v;
  }

  setData() {
    this.myFormData = $$merge(this.myFormSchema, {})
  }

  init() {
    this.content = {
      text: `{
  "error1": {},
  "error2": "***",
  "error3": {
    "c": "MyInput"
  },
  "information": {
    "c": "ObjectBlock",
    "xs": 12,
    "label": "Information",
    "schema": {
      "name": {
        "c": "TextField",
        "xs": 6,
        "label": "Name"
      },
      "sex": {
        "c": "Select",
        "xs": 6,
        "label": "Sex",
        "options": [
          "male",
          "female"
        ]
      }
    }
  },
  "test": {
    "c": "ObjectBlock",
    "xs": 12,
    "label": "缺少schema"
  },
  "ABD": {
    "c": "ObjectBlock",
    "xs": 12,
    "label": "schema格式不正确",
    "schema": "****"
  },
  "email": {
    "c": "TextField",
    "xs": 12,
    "label": "设置了多余的schema",
    "schema": {}
  }
}`
    }
    this.myFormSchema = JSON.parse(this.content.text)
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
