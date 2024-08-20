---
group:
  title: 基础
  order: 0
order: 1
toc: content
mobile: false
---


# schema

`schema` 是用来描述表单的数据结构、组件、布局、校验、联动等信息的 `JSON` 配置。

## 原理

表单最终生成的数据是一个`JSON`数据结构，`JSON` 中的每一个`Key` 对应一个组件，通过这个组件与用户交互，来获得对应的 `Value`。



## 通用属性

| 名称       | 类型     | 默认值  | 描述                                                    |
| ---------- | -------- | ------- | ------------------------------------------------------- |
| c          | `string` | `-`     | 组件名称                                                |
| xs         | `number` | 12      | 占据网格的空间大小，可选值：1～12。用于处理组件的布局。 |
| default    | `any`    | `''`    | 组件的默认值                                            |
| label      | `string` | `''`    | 组件标题                                                |
| helperText | `string` | `''`    | 组件提示信息文案                                        |
| visible    | `bool`   | `true`  | 显示                                                    |
| disabled   | `bool`   | `false` | 禁止编辑                                                |
| rule       | `func`   | `-`     | 组件校验规则。用于处理组件的校验。                      |
| onChange   | `func`   | `-`     | 当组件的值发生变化时会触发该事件。用于处理组件的联动。  |

