---
group:
  title:  基础组件
  order: 0
order: 08
toc: content
mobile: false
---

# TimePicke

时间选择器，用于输入或选择时间。

## 示例

<code src="./examples/TimePicker" compact background="#fff"></code>


## Props


| 名称       | 类型     | 默认值                 | 描述           |
| ---------- | -------- | ---------------------- | -------------- |
| label      | `string` | ''                     | 组件标题       |
| default    | `string` | ''                     | 默认值         |
| helperText | `string` | ''                     | 提示           |
| format     | `string` | `-`                    | 组件显示的格式 |
| dataFormat | `string` | `HH:mm:ss`             | 数据存储的格式 |
| minTime    | `dayjs`  | `-`                    | 最小时间       |
| maxTime    | `dayjs`  | `-`                    | 最大时间       |
| views      | `array`  | `['hours', 'minutes']` | 可见视图       |
