---
nav:
  title: 组件
  order: 1
toc: content
mobile: false
---

# 组件

组件被应用在 `schema` 中，通过组件名称赋值给属性 `c`，来确定数据与组件的对应关系。


## 组件的分类

* **基础组件**：常见的数据录入组件，往往比较简单且容易理解，例如，文本输入框（TextField），日期选择器（DatePicker）等。
* **高级组件**：应用在特定业务场景中，交互和实现往往比较复杂的组件。
* **结构组件**：在数据结构上，用来实现嵌套对象 (`object`)和数组对象 (`array`)，并通过内置 `schema` 来实现内部数据结构与基础组件对应关系。
* **信息组件**：仅用来在表单中实现多样性的内容展示组件，不用来表达数据结构。


:::info{title=Totalizer}
在当前版本中，并未发布 “高级组件” 和 “信息组件”，计划将在正式版本中发布。
:::

## 组件预览

基础组件：
* [TextField](/components/Text-Field)
* [Select](/components/Select)
* [MultipleSelect](/components/Multiple-Select)
* [Radio](/components/Radio)
* [Checked](/components/Checked)
* [Checkbox](/components/Checkbox)
* [DatePicker](/components/Date-Picker)
* [TimePicker](/components/Time-Picker)
* [DateTimePicker](/components/Date-Time-Picker)
* [Switch](/components/Switch)
* [Rating](/components/Rating)
* [Slider](/components/Slider)

结构组件：
* [ObjectBlock](/components/Object-Block)
* [ArrayList](/components/Array-List)
