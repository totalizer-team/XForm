---
order: 02
toc: content
mobile: false
---

# XDrawerForm


| 名称    | 类型                             | 默认值  | 描述                         |
| ------- | -------------------------------- | ------- | ---------------------------- |
| path    | `string`                         | `-`     | 状态管理对象中表单数据的路径 |
| store   | `Mobx`                           | `-`     | 存储数据的状态管理对象       |
| schema  | `json`                           | `{}`    | 配置协议                     |
| open    | `bool`                           | `false` | 是否展示组件                 |
| title   | `string`                         | `''`    | 标题                         |
| anchor  | `left`, `right`, `bottom`, `top` | `left`  | 抽屉（Drawer）面板划出的方向 |
| width   | `number`                         | 600     | 表单的宽度                   |
| debug   | `bool`                           | `false` | 是否展示调试面板             |
| onClose | `func`                           | `-`     | 表单关闭时触发事件           |
| onSave  | `func`                           | `-`     | 表单保存时触发事件           |

