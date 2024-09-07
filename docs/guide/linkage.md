---
group:
  title: 基础
  order: 0
order: 4
toc: content
mobile: false
---


# 联动

联动是表单常见的场景，XForm 通过在`schema`中引入 `onChange` 方法来实现联动。


## 添加校验

假设通过一个 select 控件来控制一个 input 控件的显示和隐藏，具体实现如下：

``` js {11-18}
const schema = {
  type: {
    c: 'Select',
    xs: 12,
    label: '是否展示标题',
    default: 2,
    options: [
      { value: 1, label: '展示标题' },
      { value: 2, label: '隐藏标题' },
    ],
    onChange: (value, { set }) => {
      if (value === 1) {
        set('title', 'visible', true);
      }
      if (value === 2) {
        set('title', 'visible', false);
      }
    },
  },
  title: {
    c: 'TextField',
    xs: 12,
    label: '标题',
  },
};
export default schema;
```

代码解释：

* `onChange(value, { $get, $set })`: 该方法在组件值发生改变时触发，以便控制其他组件的状态。
* `value` : 当前组件的值。
* `set(path, attr, value)`: 将路径 `path` 对应的组件的属性 `attr` 的值设置为 `value`。


## 触发时机

* 在表单初始化完成时，会触发一次 onChange 事件，以确保组件间的状态符合 onChange 中定义的逻辑。
* 无论以任何方式导致组件的值发生改变，都会触发 onChange 事件。

## 完整示例

<code src="./examples/linkage" compact background="#fff"></code>
