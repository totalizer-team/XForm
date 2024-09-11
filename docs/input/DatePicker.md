---
group:
  title: Basic Components
  order: 0
order: 07
toc: content
mobile: false
---

# DatePicker

日期选择器，用于输入或选择日期。

## 示例

<code src="./examples/DatePicker" compact background="#fff"></code>



## Props

| 名称       | 类型     | 默认值                   | 描述           |
| ---------- | -------- | ------------------------ | -------------- |
| label      | `string` | ''                       | 组件标签       |
| default    | `string` | ''                       | 默认值         |
| helperText | `string` | ''                       | 提示           |
| format     | `string` | `-`                      | 组件显示的格式 |
| dataFormat | `string` | `YYYY-MM-DD`             | 数据存储的格式 |
| minDate    | `dayjs`  | `dayjs('1900-01-01')`    | 最小日期       |
| maxDate    | `dayjs`  | `dayjs('2099-12-31')`    | 最大日期       |
| views      | `array`  | `['day','month','year']` | 可见视图       |

