---
order: 2
toc: content
mobile: false
---

# 快速上手

本文会引导你构建一个简单的 XForm 表单。

## 目录结构

在这个基础的示例中，需要创建以下三个文件，用来开发一个 XForm 表单：

* `index.jsx` : 用于引入组件的入口文件
* `schema.js` : 用于存储表单的配置
* `store.js` : 用于创建 Mobx 状态管理实例

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
    label: '标题',
  },
  type: {
    c: 'Select',
    xs: 6,
    label: '类型',
    options: [1, 2, 3],
  },
  des: {
    c: 'TextField',
    xs: 12,
    label: '描述',
    multiline: true,
    minRows: 5,
    maxRows: 10,
  },
};
export default schema;

```
代码解释：
* `c` 用来描述使用的组件，`TextField`,`Select` 是 XForm 中内置的组件，分别表示文本输入组件和选择组件。
* `xs` 用于描述网格布局中占用的空间大小，可选值为 1 ～ 12。
* `label` 是表单的标题，`options` 是 `Select` 中用于组件定义选项，`multiline`、`minRows`、`maxRows` 则是 `TextField` 中用来定义多行输入的配置。
* `title`、`type`、`des`，是用户自定义关键字，描述了表单生成的数据结构，表单会按照这个结构与store中定义的 `myFormData` 进行数据同步。

以上 schema 描述的数据结构如下：

``` json 
{
 "title": "",
 "type": "",
 "des": ""
}
```

## 创建视图

最后，使用 XForm 组件，同时引入 `store`、`schema` 来实现完整的表单。

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

      <p>数据同步：</p>
      <p>{JSON.stringify(myFormData)}</p>
    </>
  );
})

```

代码解释：

* `XBaseForm` 是 XForm 中提供的一种基础表单组件，其中组件的参数 `store`、`schema` 用于链接定义好的 store 和 schema，`path` 则是 store 中用于指定表单最终需要双向绑定的数据。

## 完整代码示例

以下是最终效果，你可以尝试在表单中录入数据，并观察数据的时时变化情况。

<code src="./examples/simple"></code>
