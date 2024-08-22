---
group:
  title: 基础
  order: 0
order: 5
toc: content
mobile: false
---


# 嵌套对象


有时候我们希望表单生成嵌套的对象结构，例如，我们希望得到如下数据：

``` json
{
  "information": {
    "name": "",
    "sex": "",
  },
  "account": {
    "email": "",
    "phone": ""
  }
}
```

在 XForm 中实现这种嵌套效果，需要使用 `ObjectBlock` 组件。


## 实现嵌套对象

`schema` 配置如下：

``` js {3,6}
const schema = {
  information: {
    c: 'ObjectBlock',
    xs: 12,
    label: '身份信息',
    schema: {
      name: {
        c: 'TextField',
        xs: 6,
        label: '姓名',
      },
      sex: {
        c: 'Select',
        xs: 6,
        label: '性别',
        options: ['男', '女'],
      },
    },
  },
  account: {
    c: 'ObjectBlock',
    xs: 12,
    label: '账户信息',
    schema: {
      email: {
        c: 'TextField',
        xs: 12,
        label: '邮箱地址',
      },
      phone: {
        c: 'TextField',
        xs: 12,
        label: '电话号码',
      },
    },
  },
};
export default schema;
```

代码解释：
* `ObjectBlock` 是一个专为实现嵌套对象的组件，除了内部嵌套了 XForm 标准的 `schema` 以外，其他参数和基础组件的通用属性是一致的。


完整示例：

<code src="./examples/object" compact background="#fff"></code>


## 嵌套对象的校验与联动

校验和联动，依然是使用 `rule` 和 `onChange` 来实现，只是`$getValue`、`$get`、`$set` 方法中传递路径参数时，需要和生成的 `JSON`路径保持一致：

例如：

``` js {11-14}
const schema = {
  information: {
    c: 'ObjectBlock',
    xs: 12,
    label: '身份信息',
    schema: {
      name: {
        c: 'TextField',
        xs: 6,
        label: '姓名',
        onChange: (value, { $get, $set }) => {
          const sex = $get('information.sex', 'value');
          console.log(sex);
        },
      },
       sex: {
        c: 'Select',
        xs: 6,
        label: '性别',
        options: ['男', '女'],
      },
    },
  },
  ...
};
export default schema;


```

