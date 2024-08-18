---
group:
  title: 基础
  order: 0
order: 2
toc: content
mobile: false
---


# 布局


组件的布局采用 Material Design 基于 12 列的网格布局。在 `schema` 中可以通过 `xs` 关键字为组件定义列宽，列宽是 1 到 12 之间的整数值。

`xs` 默认值为 12，及自动填满整行的空间。

``` js {4,9}
const schema = {
  title: {
    c: 'XTextField',
    xs: 8,
    label: '标题',
  },
  type: {
    c: 'XSelect',
    xs: 4,
    label: '类型',
    options: [1, 2, 3],
  },
};
export default schema;
```

代码示例：

<code src="./examples/layout"></code>
