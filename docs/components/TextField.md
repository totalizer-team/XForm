---
group:
  title:  基础组件
  order: 0
order: 01
toc: content
mobile: false
---

# TextField

输入框，包括支持单行文本输入、多行文本输入，和密码输入三种输入模式。

## 示例

<code src="./examples/TextField" compact background="#fff"></code>



## Props

| 名称           | 类型     | 默认值     | 描述                                          |
| -------------- | -------- | ---------- | --------------------------------------------- |
| variant        | `string` | `outlined` | 样式。可选值 `outlined`, `filled`, `standard` |
| placeholder    | `string` | ''         | 占位符                                        |
| helperText     | `string` | ''         | 提示                                          |
| multiline      | `bool`   | `false`    | 多行输入                                      |
| maxRows        | `number` | `-`        | 多行输入时，最大行数                          |
| minRows        | `number` | `-`        | 多行输入时，最小行数                          |
| rows           | `number` | 1          | 多行输入时，固定行数                          |
| startAdornment | `string` | ''         | 开始位置装饰符                                |
| endAdornment   | `string` | ''         | 结束为止装饰符                                |
