---
nav:
  title: 输入组件
  order: 1
toc: content
mobile: false
---

# 输入组件

表单输入组件（Form Input Component）被应用在 `schema` 中，通过组件名称赋值给属性 `c`，来确定数据与组件的对应关系。

## 输入组件分类

* **基础组件**：常见的数据录入组件，往往比较简单且容易理解，例如，文本输入框（TextField），日期选择器（DatePicker）等。
* **高级组件**：应用在特定业务场景中，交互和实现往往比较复杂的组件。
* **结构组件**：在数据结构上，用来实现嵌套对象 (`object`)和数组对象 (`array`)，并通过内置 `schema` 来实现内部数据结构与基础组件对应关系。

:::info{title=Totalizer}
在当前版本中，并未发布 “高级组件”，计划将在下个主要版本中发布。
:::

## 组件预览

基础组件：

* [TextField](/input/text-field)
* [Select](/input/select)
* [MultipleSelect](/input/multiple-select)
* [Radio](/input/radio)
* [Checked](/input/checked)
* [Checkbox](/input/checkbox)
* [DatePicker](/input/date-picker)
* [TimePicker](/input/time-picker)
* [DateTimePicker](/input/date-time-picker)
* [Switch](/input/switch)
* [Rating](/input/rating)
* [Slider](/input/slider)

结构组件：

* [ObjectBlock](/input/object-block)
* [ArrayList](/input/array-list)
