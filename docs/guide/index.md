---
nav:
  title: Guide
  order: 0
order: 0
toc: content
mobile: false
---

# What is XForm？

> React components for building web forms using Material UI and MobX, based on a JSON schema.

**XForm** originated as a key component of an internal low-code project (codenamed **Totalizer**). Its initial purpose was to manage components and data through a simple protocol, with the aim of further enabling low-code or no-code form solutions.



## 适用场景

* 正在使用 Totalizer 相关项目，XForm 是必要组成部分。
* 对于深度依赖 MUI 和 Mobx 框架的中后台项目，XForm 能大幅度简化研发。
* 对于需要构建低代码系统的产品，XForm 提供了更简单的配置协议，可用于构建动态的表单生成。

如果你的项目基于其他组件库（例如 Ant Design）或状态管理方案（例如 Redux），并不适合使用 XForm。

## 设计理念

基于社区开源技术的最佳实践，实现基于配置开发，为低代码产品提供解决方案。

由于整合开源技术，存在一些编程范式的设计缺陷。那为什么不做到开箱即用？

* 首先，XForm 定位是用于整体系统的组成部分，所依赖的开源技术不仅仅解决 XForm 所需，同时也为整体系统提供依赖，重复建设带来较大系统冗余。
* 其次，基于整合开源技术设计编程范式，可能需要分割文件和配置关联，引入了一些编程的复杂度，但这能够有效减少引入新的概念，降低学习成本。

:::info{title=未来版本规划}
正在探索 XForm 打造为独立的产品的可能性，进一步优化编程范式上的设计缺陷。
:::

在实现 XForm 产品方案中，依赖了以下开源技术：

* UI Framework: [React](https://react.dev/)
* Component library: [MUI](https://mui.com/)
* State management: [Mobx](https://mobx.js.org/README.html)
* Drag and drop: [dnd kit](https://dndkit.com/)
* Date & time: [dayjs](https://day.js.org/)
* JSON 数据展示：[@uiw/react-json-view](https://uiwjs.github.io/react-json-view/)
* 代码 Diff 展示： [react-diff-viewer](https://praneshravi.in/react-diff-viewer/)
* Excel 解析：[SheetJS](https://docs.sheetjs.com/docs/)

## 产品定位

### 交互体验

专为数据录入的人机交互体验而生，追求数据录入体验的卓越。

> XForm 的 UI 风格采用了 Material UI，这主要源于 MUI 组件库的卓越产品体验。XForm 在此基础上对表单整体交互体验进行了深度地设计。

### 开发体验

致力于极致的开发体验，简单易学，提升开发幸福度。在同类产品中，这可能是你见过最简单易学的设计。

> XForm 通过 `JSON` 配置来描述一个表单，对于 `JSON` 配置参数的设计，追求极致的简单直观，尽量少的引入新的概念。
> 
> 简单直观的 API 设计理念必将带来一些自由度和扩展性的牺牲，例如无法灵活的自定义样式，以及一些特定事件的触发时机，甚至是研发新组件的复杂度提升。但是，对于专注于体验和效率，而不是追求品牌独特性的工具而言，这是一个正确的平衡。

### 产品功能

独特的组件增强体系和数据管理体系，提升产品功能。尤其是对于管理复杂数据的场景，显著提升系统健壮性和用户操作的精确性。

> XForm 的组件增强体系，包含 [表单](../form/index.md) 和 [组件](../components/index.md)，组件又包括多种类型，以便结构化理解和使用组件。
> 
> XForm 的数据管理体系，主要是为了确保数据与表单的一致性，确保表单在迭代过程中的健壮性，同时为用户数据录入的功能上提供更多想象空间，不限于表单状态管理、配置Debug、数据 Diff 校验等。
>
> 作为该工具的使用者，你并不需要对这种设计体系有深入的了解，因为大多数组件与 API 都是所见即所得的。


### Why is XForm

* [uniforms](https://uniforms.tools/)
* [Formik](https://github.com/jaredpalmer/formik)
* [redux-form](https://github.com/redux-form/redux-form)
* [react Final Form](https://github.com/final-form/react-final-form)
* [react hook form](https://react-hook-form.com/)
* [auto-form](https://github.com/vantezzen/auto-form)
* [formily](https://formilyjs.org/)
* [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form)

