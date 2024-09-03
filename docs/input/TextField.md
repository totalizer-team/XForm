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

TextField, including support for single-line text input, multi-line text input, and password input in three modes.

* Output data type: `string`
* Default value: `''`

## single-line text input

<code src="./examples/TextField" compact background="#fff"></code>

| 名称           | 类型     | 默认值     | 描述                                          |
| -------------- | -------- | ---------- | --------------------------------------------- |
| label          | `string` | ''         | 组件标签                                      |
| default        | `string` | ``         | 默认值                                        |
| required       | `bool`   | `false`    | 是否必填                                      |
| variant        | `string` | `outlined` | 样式。可选值 `outlined`, `filled`, `standard` |
| placeholder    | `string` | ''         | 占位符                                        |
| helperText     | `string` | ''         | 提示                                          |
| startAdornment | `string` | ''         | 开始位置装饰符                                |
| endAdornment   | `string` | ''         | 结束为止装饰符                                |

## multi-line text input

<code src="./examples/TextFieldMultiline" compact background="#fff"></code>

| 名称      | 类型     | 默认值  | 描述                 |
| --------- | -------- | ------- | -------------------- |
| multiline | `bool`   | `false` | 多行输入             |
| maxRows   | `number` | `-`     | 多行输入时，最大行数 |
| minRows   | `number` | `-`     | 多行输入时，最小行数 |
| rows      | `number` | 1       | 多行输入时，固定行数 |

## password input

<code src="./examples/TextFieldPassword" compact background="#fff"></code>

| 名称 | 类型     | 默认值 | 描述                                |
| ---- | -------- | ------ | ----------------------------------- |
| type | `string` | 'text' | 表单类型。可选值 `text`, `password` |
