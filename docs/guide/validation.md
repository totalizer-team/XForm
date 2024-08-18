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

``` js {6,7,8,9}
const schema = {
  title: {
    c: 'XTextField',
    xs: 6,
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

* `rule` 值为一个函数，函数的参数 `value` 为表单组件当前的值，函数返回值为字符串，表示校验不通过，并提示错误信息。函数的返回值为空字符串，则表示能通过校验的合法值。


## 校验时机

以下场景，会触发对应表单组件的校验：

* 组件的值发生改变时。
* 组件在失去焦点时。
* 触发表单内置的保存或提交功能时，如果校验失败将阻止保存或提交动作。


## 联动校验

:::info{title=联动校验}
可以使用 `onChange` 来自定义复杂的校验场景。
`rule` 当前版本不支持联动校验，将在后面评估该功能的必要性。
:::


## 代码示例

<code src="./examples/validation"></code>
