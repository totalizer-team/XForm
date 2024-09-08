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

如果数据和组件需要必填，在 `schema` 中将 `required` 关键字设置为 `true`： 

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

定义校验需要在 `schema` 中添加 `rule` 属性，并定义一个函数，返回一个字符串作为展示的错误信息。返回空字符串则表示校验通过。

``` js {6-9}
const schema = {
  title: {
    c: 'TextField',
    xs: 12,
    label: 'Title',
    rule: (value) => {
      if (value.length >= 10) return 'Please input at least ten characters.';
      return '';
    },
  }
};
export default schema;
```

代码解释：

* `rule` 值为一个函数，函数的参数 `value` 为组件当前的值。

## 联动校验

除了校验组件本身的返回值，还时常需要与其他组件的值进行比较，例如，比较两次密码输入是否一致：

需要在`schema`中添加如下代码：

```js {22-26}
const schema = {
  password: {
    c: 'TextField',
    xs: 12,
    label: 'Password',
    type: 'password',
    placeholder: 'Set the login password',
    helperText: 'Passwords must be at least 6 characters.',
    required: true,
    rule: (value) => {
      if (value.length < 6) return 'Passwords must be at least 6 characters.';
      return '';
    },
  },
  confirmPassword: {
    c: 'TextField',
    xs: 12,
    label: 'Confirm Password',
    type: 'password',
    placeholder: 'Enter the login password again',
    required: true,
    rule: (value, { get }) => {
      const password = get('password', 'value');
      if (value !== password) return 'The two passwords do not match. Please enter them again!';
      return '';
    },
  },
};
export default schema;
```

代码解释：

* 为了校验 `pwd2` 与 `pwd` 的值是否一致， 引入了 `get` 方法，该方法接受关键字路径作和属性名称为参数，来获取对应组件的目标属性值。该示例中获取了 `pwd` 对应的组件 `TextField` 的 `value` 值。

## Rule API

`rule: (value, XFormEvents) => {}`

* value: 组件当前的值。
* XFormEvents: 详见 [事件](/guide/events)。

## 校验时机

组件的校验时机由组件内部实现，不同的组件校验时机不同，且无法更改。
## 代码示例

<code src="./examples/validation" compact background="#fff"></code>
