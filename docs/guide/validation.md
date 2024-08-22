---
group:
  title: 基础
  order: 0
order: 3
toc: content
mobile: false
---


# 校验


## 添加校验

只需要在 `schema` 中添加 `rule` 关键字即可配置校验规则： 

``` js {6-9}
const schema = {
  title: {
    c: 'TextField',
    xs: 12,
    label: '标题',
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

```js {11-15}
const schema = {
  pwd: {
    c: 'TextField',
    xs: 12,
    label: '密码',
  },
  pwd2: {
    c: 'TextField',
    xs: 12,
    label: '确认密码',
    rule: (value, { $getValue }) => {
      const pwd = $getValue('pwd');
      if (value !== pwd) return '两次密码必须一致';
      return '';
    },
  },
};
export default schema;
```

代码解释：

* 为了校验 `pwd2` 与 `pwd` 的值是否一致， 引入了 `$getValue` 方法，该方法接受关键字路径作为参数来获取对应组件的值。

## 校验时机

以下场景，会触发对应表单组件的校验：

* 用户操作表单，导致组件的值发生改变时。（注：通过 store 改变表单值时不会触发校验）
* 组件在失去焦点时。
* 触发表单内置的保存或提交功能时。（注：校验失败将阻止保存或提交动作。）


## 代码示例

<code src="./examples/validation" compact background="#fff"></code>
