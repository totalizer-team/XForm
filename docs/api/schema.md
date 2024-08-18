---
group:
  title: API
  order: 0
order: 03
toc: content
mobile: false
---

# schema

## 通用配置

| 名称       | 类型     | 默认值  | 描述                              |
| ---------- | -------- | ------- | --------------------------------- |
| c          | `string` | `-`     | 组件名称                          |
| xs         | `number` | 12      | 占据网格的空间大小，可选值：1～12 |
| default    | `any`    | `''`    | 默认值                            |
| label      | `string` | `''`    | 组件标题                          |
| helperText | `string` | `''`    | 提示信息                          |
| rule       | `func`   | `-`     | 组件校验规则                      |
| visible    | `bool`   | `true`  | 显示                              |
| disabled   | `bool`   | `false` | 禁止编辑                          |