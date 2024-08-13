---
order: 1
toc: content
mobile: false
---

# 安装

## Node

确保 node 版本是 18 或以上

## 脚手架

你可以选择使用任何支持 react 开发的脚手架，这里以 umi 框架为例：

```sh
$ npx create-umi@latest
Need to install the following packages:
  create-umi@latest
Ok to proceed? (y) y
✔ Pick Umi App Template › Simple App
✔ Pick Npm Client › npm
✔ Pick Npm Registry › taobao
```

## 依赖

为了保持组件包的最小化，你需要手动安装所有的依赖项。

### React

```sh
npm install -S react react-dom
```

### dnd kit

使用 dnd kit，用于拖拽排序的解决方案。

```sh
npm install -S @dnd-kit/core @dnd-kit/sortable
```

### Material UI

确保安装 Material UI 6.0.0 或更高版本。

```sh
npm install -S @mui/material@next @emotion/react @emotion/styled

```

@mui/lab

```sh
npm install -S @mui/lab@next
```

icons-material

```sh
npm install -S @mui/icons-material@next
```

### Mobx

确保安装 MobX 6 或更高版本。

```sh
npm install -S mobx mobx-react
```

### 其他依赖

* react-json-view：用于展示 JSON 数据

```sh
npm install -S react-json-view
```

## XForm

安装 XForm 主体，用于研发中开发用户数据表单录入的解决方案。

```sh
npm install -S @totalizer/xform
```