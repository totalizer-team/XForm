---
group:
  title: Basic Components
  order: 0
order: 09
toc: content
mobile: false
---

# DateTimePicker

日期时间选择器，用于同时输入或选择日期和时间。

## 示例

<code src="./examples/DateTimePicker" compact background="#fff"></code>



## Props

| 名称        | 类型     | 默认值                                      | 描述           |
| ----------- | -------- | ------------------------------------------- | -------------- |
| label       | `string` | ''                                          | 组件标签       |
| default     | `string` | ''                                          | 默认值         |
| helperText  | `string` | ''                                          | 提示           |
| format      | `string` | `-`                                         | 组件显示的格式 |
| dataFormat  | `string` | `YYYY-MM-DD HH:mm:ss`                       | 数据存储的格式 |
| minDate     | `dayjs`  | `dayjs('1900-01-01')`                       | 最小日期       |
| maxDate     | `dayjs`  | `dayjs('2099-12-31')`                       | 最大日期       |
| minTime     | `dayjs`  | `-`                                         | 最小时间       |
| maxTime     | `dayjs`  | `-`                                         | 最大时间       |
| minDateTime | `dayjs`  | `-`                                         | 最小日期和时间 |
| maxDateTime | `dayjs`  | `-`                                         | 最大日期和时间 |
| views       | `array`  | `['day','month','year','hours', 'minutes']` | 可见视图       |
