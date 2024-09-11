---
order: 2
toc: content
mobile: false
---

# 快速上手

本文会引导你构建一个简单的 XForm 表单。

## 目录结构

在这个基础的示例中，需要创建以下三个文件，用来开发一个 XForm 表单：

* `index.jsx` : 用于构建页面的用户界面部分。并引入 XForm 组件。
* `store.js` : 用于管理全局或局部的应用状态。定义一个 MobX store，存放页面所需的数据和逻辑。
* `schema.js` : 用于存储 XForm 的配置文件。定义表单中需要的组件、布局、数据结构、校验、联动等规则。



## 创建 store

在此之前，你需要对 Mobx 有基础的了解， 可以通过 [Mobx 官方文档](https://mobx.js.org/README.html) 进行学习。

在 `store.js` 中添加如下代码： 

``` js
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

```

代码解释：

* `$$get` `$$set` `$$merge` 是 XForm 中用于数据处理的方法，你需要按照上面示例引入到 store 中，以确保 store 能够正确的与表单组件进行数据同步。


## 创建 schema 

`schema` 是 XForm 用于表单配置所引入的概念。通过 `JSON` 来定义表单中需要的组件、布局、数据结构、校验、联动等规则。

在 `schema.js` 中添加如下代码： 

``` js
const schema = {
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
};
export default schema;

```
代码解释：
* `title`、`type`、`des`，是用户自定义关键字，描述了表单生成的数据结构，表单会按照这个结构与 store 中定义的 `myFormData` 进行数据同步。
* `c` 用来描述使用的组件名称，`TextField`,`Select` 是 XForm 中内置的输入组件。
* `xs` 用于描述组件在网格布局中占用的空间大小，可选值为 1 ～ 12。
* `label` 是表单的标题，`options` 是 `Select` 中用于组件定义选项，`multiline`、`minRows`、`maxRows` 则是 `TextField` 中用来定义多行输入的配置。

以上 schema 描述的数据结构如下：

``` json 
{
 "title": "",
 "type": "",
 "des": ""
}
```

## 创建视图

最后，使用 XForm 的表单组件 `XBaseForm`，并引入 `store`、`schema` 来实现完整的表单。

在 `index.js` 中添加如下代码：

``` jsx | pure
import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import store from './store';
import schema from './schema';

export default observer(() => {
  const { myFormData } = store;
  return (
    <>
      <XBaseForm
        store={store}
        path="myFormData"
        schema={schema}
      />
      <br />
      <p>Data changes are displayed synchronously:</p>
      <p>{JSON.stringify(myFormData)}</p>
    </br>
  );
});
```

代码解释：

* `XBaseForm` 是 XForm 中提供的一种表单组件，其中组件的参数 `store`、`schema` 属性用于关联定义好的 store 和 schema，`path` 则是 store 中用于指定表单最终需要双向绑定的数据路径。

## 代码示例

以下是上面代码的效果，你可以尝试在表单中录入数据，并观察数据的时时变化情况。

<code src="./examples/simple"  background="#fff"></code>



## 增加标题和按钮

实现标题和按钮，在 `schema` 中同样是使用对应的组件来描述，这种类型组件用来信息展示和增强表单的功能，被定义为表单增强组件（Form Enhancement Components），与表单输入组件（Form Input Components）不同的是，该类型组件不用来表达数据结构。详细可参考 [增强组件](/enh)。

增加如下代码：
``` js
const schema = {
  _title: {
    c: 'Enh.FormTitle',
    xs: 12,
    title: 'Adventure starts here 🚀',
    secondary: 'Make your app management easy and fun!',
  },
  ...
  _rest: {
    c: 'Enh.FormButton',
    xs: 6,
    text: 'Reset',
    size: 'large',
    variant: 'outlined',
    onClick: ({ reset }) => {
      reset();
    },
  },
  _submit: {
    c: 'Enh.FormButton',
    xs: 6,
    text: 'Submit',
    size: 'large',
    onClick: ({ getFormValues, validate }) => {
      if (validate()) {
        console.log(getFormValues());
      } else {
        console.log('VERIFICATION FAILED');
      }
    },
  },
};
export default schema;
```


## 增加必填校验

在需要必填的数据描述中，增加`required`属性，并设置为 `true` 即可。

例如：

``` js {5}
title: {
  c: 'TextField',
  xs: 6,
  label: 'Title',
  required: true,
},
```

## 完整的代码示例

<code src="./examples/simple02"  background="#fff"></code>
