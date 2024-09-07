---
group:
  title: 基础
  order: 0
order: 3
toc: content
mobile: false
---


# 校验

## 必填校验

只需要在 `schema` 中将 `required` 关键字设置为 `true`： 


``` js {6}
const schema = {
  username: {
    c: 'TextField',
    xs: 12,
    label: 'Username',
    required: true,
  },
};
export default schema;
```

## 自定义校验

只需要在 `schema` 中添加 `rule` 关键字即可自定义校验规则： 

``` js {6-9}
const schema = {
  title: {
    c: 'TextField',
    xs: 12,
    label: 'Title',
    rule: (value) => {
      if (value === '') return '必填';
      return '';
    },
  }
};
export default schema;
```

代码解释：

* `rule` 值为一个函数，函数的参数 `value` 为表单组件当前的值，函数返回值为字符串，用于错误信息展示。


## 联动校验

除了校验组件本身的返回值，还时常需要与其他组件的值进行比较，例如，比较两次密码输入是否一致：

需要在`schema`中添加如下代码：

```js {13-17}
const schema = {
  pwd: {
    c: 'TextField',
    xs: 12,
    label: 'Password',
    required: true,
  },
  pwd2: {
    c: 'TextField',
    xs: 12,
    label: 'Confirm Password',
    required: true,
    rule: (value, { get }) => {
      const pwd = get('pwd', 'value');
      if (value !== pwd) return '两次密码必须一致';
      return '';
    },
  },
};
export default schema;
```

代码解释：

* 为了校验 `pwd2` 与 `pwd` 的值是否一致， 引入了 `get` 方法，该方法接受关键字路径作和属性名称为参数，来获取对应组件的目标属性值。该示例中获取了 `pwd` 对应的组件 `TextField` 的 `value` 值。

## 校验时机

组件的校验时机由组件内部实现，不同的组件校验时机不同，且无法更改。

在表单需要提交时，可以通过 `validate` 方法，触发所有可见组件的校验。

## 代码示例

<code src="./examples/validation" compact background="#fff"></code>
