---
group:
  title: 基础
  order: 0
order: 2
toc: content
mobile: false
---


# 布局


`schema` 中的布局属性：

| 名称           | 类型     | 默认值 | 描述                  |
| -------------- | -------- | ------ | --------------------- |
| xs             | `number` | `12`   | 列宽                  |
| alignItems     | `string` | `-`    | css `align-items`     |
| justifyContent | `string` | `{}`   | css `justify-content` |


XForm 的布局基于 mui 的 `grid2` 组件实现。详见，[material-ui/react-grid2](https://mui.com/material-ui/react-grid2/)。

布局基于 12 列的网格布局。在 `schema` 中可以通过 `xs` 关键字为组件定义列宽，列宽是 1 到 12 之间的整数值。

`xs` 默认值为 12，表示自动填满整行的空间。

以下是使用布局的示例：

``` js {4,9}
const schema = {
  title: {
    c: 'TextField',
    xs: 8,
    label: '标题',
  },
  type: {
    c: 'Select',
    xs: 4,
    label: '类型',
    options: [1, 2, 3],
  },
};
export default schema;
```

效果如下：

<code src="./examples/layout" compact background="#fff"></code>


## scheme 支持的布局属性

| 名称           | 类型     | 默认值 | 描述                  |
| -------------- | -------- | ------ | --------------------- |
| xs             | `number` | `12`   | 列宽                  |
| alignItems     | `string` | `-`    | css `align-items`     |
| justifyContent | `string` | `{}`   | css `justify-content` |

