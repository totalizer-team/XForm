---
group:
  title:  基础组件
  order: 0
order: 02
toc: content
mobile: false
---

# Select


## 示例

<code src="./examples/Select" compact background="#fff"></code>



## Props

| 名称       | 类型     | 默认值     | 描述                                          |
| ---------- | -------- | ---------- | --------------------------------------------- |
| options    | `array`  | []         | 选项配置。                                    |
| variant    | `string` | `outlined` | 样式。可选值 `outlined`, `filled`, `standard` |
| helperText | `string` | ''         | 提示                                          |


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
