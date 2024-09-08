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
    "name": "Thomas",
    "sex": "male",
  },
  "contact": {
    "email": "***@gmail.com",
    "phone": "**********"
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
    label: 'Information',
    schema: {
      name: {
        c: 'TextField',
        xs: 6,
        label: 'Name',
      },
      sex: {
        c: 'Select',
        xs: 6,
        label: 'Sex',
        options: ['male', 'female'],
      },
    },
  },
  contact: {
    c: 'ObjectBlock',
    xs: 12,
    label: 'Contact',
    schema: {
      email: {
        c: 'TextField',
        xs: 12,
        label: 'Email',
      },
      phone: {
        c: 'TextField',
        xs: 12,
        label: 'Phone Number',
      },
    },
  },
};
export default schema;
```

代码解释：
* `ObjectBlock` 是一个专为实现嵌套对象的组件，内部嵌套了 XForm 标准的 `schema`，用来表达对象内部的数据结构和表单组件。


完整示例：

<code src="./examples/object" compact background="#fff"></code>


## 校验与联动

校验和联动，依然是使用 `rule` 和 `onChange` 来实现，只是 XFormEvents 中的方法中传递的路径参数，需要和生成的  `JSON` 路径保持一致：

例如：

``` js {11-14}
const schema = {
  information: {
    c: 'ObjectBlock',
    xs: 12,
    label: 'Information',
    schema: {
      name: {
        c: 'TextField',
        xs: 6,
        label: 'Name',
        onChange: (value, { get }) => {
          const sex = get('information.sex', 'value');
          console.log(sex);
        },
      },
      ...
    },
  },
  ...
};
export default schema;


```

