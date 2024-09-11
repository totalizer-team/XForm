---
group:
  title: Basic Components
  order: 0
order: 02
toc: content
mobile: false
---

# Select

单选选择器，在一个列表选项中选择一个选项。

## 示例

<code src="./examples/Select" compact background="#fff"></code>



## Props

| 名称       | 类型               | 默认值     | 描述                                          |
| ---------- | ------------------ | ---------- | --------------------------------------------- |
| label      | `string`           | ''         | 组件标签                                      |
| default    | `number`, `string` | ''         | 默认值                                        |
| options    | `array`            | []         | 选项配置                                      |
| variant    | `string`           | `outlined` | 样式。可选值 `outlined`, `filled`, `standard` |
| helperText | `string`           | ''         | 提示                                          |


### options

以下方式均属于合法输入：

字符串数组：

``` js
['a','b','c']
```

对象数组：

``` js
[
  {
    value: 'a',
    label: '选项 A'
  },
  {
    value: 'b',
    label: '选项 B'
  },
  {
    value: 'c',
    label: '选项 C'
  },
]
```
