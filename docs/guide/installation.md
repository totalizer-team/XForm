---
order: 1
toc: content
mobile: false
---

# 安装

## 环境配置

### Node

确保 node 版本是 18 或以上

## 脚手架

你可以选择使用任何支持 react 开发的脚手架。

这里以 umi 框架为例：

```sh
$ npx create-umi@latest
Need to install the following packages:
  create-umi@latest
Ok to proceed? (y) y
✔ Pick Umi App Template › Simple App
✔ Pick Npm Client › npm
✔ Pick Npm Registry › taobao
```

## 安装依赖

你可以添加下面依赖到 package.json 的 dependencies 下:

```json
"dependencies": {
  "@dnd-kit/core": "^6.1.0",
    "@dnd-kit/sortable": "^8.0.0",
    "@emotion/react": "^11.13.3",
    "@emotion/styled": "^11.13.0",
    "@mui/icons-material": "^6.0.1",
    "@mui/lab": "^6.0.0-beta.8",
    "@mui/material": "^6.0.1",
    "@mui/material/styles": "^6.0.1",
    "@mui/x-date-pickers": "^7.15.0",
    "@uiw/react-json-view": "^2.0.0-alpha.26",
    "dayjs": "^1.11.13",
    "mobx": "^6.13.1",
    "mobx-react": "^9.1.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
}
```

然后执行 `npm i` 即可完成依赖安装。

你也可以按照如下步骤手动安装每个依赖，以确保使用最新版本的包：

### React

确保安装 react 18 以上版本


```sh
npm install -S react react-dom
```

### Material UI

使用 MUI 全家桶，作为基础组件库，确保安装 Material UI v6 以上版本

```sh
npm install -S @mui/materia @emotion/react @emotion/styled

```

lab

```sh
npm install -S @mui/lab
```

icons

```sh
npm install -S @mui/icons-material
```

data & time

```sh
npm install -S @mui/x-date-pickers
```

### Mobx

使用 Mobx 进行数据状态管理，确保安装 MobX v6 或更高版本。

```sh
npm install -S mobx mobx-react
```

### dnd kit

使用 dnd kit，用于拖拽排序的解决方案。

```sh
npm install -S @dnd-kit/core @dnd-kit/sortable
```

### dayjs

```sh
npm install -S dayjs
```

### @uiw/react-json-view

* @uiw/react-json-view：用于展示 JSON 数据

```sh
npm install -S @uiw/react-json-view
```

### react-diff-viewer

```sh
```

### SheetJS

```sh
```

## XForm

安装 XForm 主体

```sh
npm install -S @totalizer/xform
```
