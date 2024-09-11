---
group:
  title: Essentials
  order: 0
order: 2
toc: content
mobile: false
---


# 布局


`schema` 中的布局属性：

| 名称           | 类型     | 默认值 | 描述                     |
| -------------- | -------- | ------ | ------------------------ |
| xs             | `number` | `12`   | 列宽                     |
| alignItems     | `string` | `-`    | 同 css `align-items`     |
| justifyContent | `string` | `{}`   | 同 css `justify-content` |

## 网格布局

XForm 的布局基于 mui 的 `grid2` 组件实现。详见，[material-ui/react-grid2](https://mui.com/material-ui/react-grid2/)。

布局基于 12 列的网格布局。在 `schema` 中可以通过 `xs` 关键字为组件定义列宽，列宽是 1 到 12 之间的整数值。

`xs` 默认值为 12，表示自动填满整行的空间。

以下是使用布局的示例：

``` js {4,9}
const schema = {
  title: {
    c: 'TextField',
    xs: 8,
    label: 'Title',
  },
  type: {
    c: 'Select',
    xs: 4,
    label: 'Select',
    options: [1, 2, 3],
  },
};
export default schema;
```

效果如下：

<code src="./examples/layout" background="#fff"></code>


## 对齐方式

由于并不是所有的组件都填满整个网格区域，有时需要上下居中，有时需要左右居中。控制对齐的属性`alignItems` 和 `justifyContent`， 与对应的 CSS 定义保持一致。

例，链接上下居中并右对齐

<code src="./examples/layout02" background="#fff"></code>

例，两个定宽按钮居中

<code src="./examples/layout03" background="#fff"></code>
