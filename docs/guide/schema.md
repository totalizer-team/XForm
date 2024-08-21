---
group:
  title: 基础
  order: 0
order: 1
toc: content
mobile: false
---


# schema

`schema` 是用来描述表单生成的数据结构、组件、布局、校验、联动等信息的 `JSON` 配置。

## 工作原理

表单最终生成的数据是一个`JSON`数据结构，`JSON` 中的每一个`Key` 对应一个组件，通过这个组件与用户交互，来获得对应的 `Value`。

一个 `schema` 示例如下：

``` js
const schema = {
  title: {  // title 是表单生成数据的
    c: 'XTextField', // 组件名称，使用 XTextFiled 组件来展示，并最终将组件的值赋值给 title
    xs: 6, // 组件的通用属性 xs 描述了组件在网格布局中占据的宽度为 6
    label: '标题', // 组件的通用属性 label，描述了组件的标题
  },
  type: {
    c: 'XSelect',
    xs: 6,
    label: '类型',
    options: [1, 2, 3],  // options 是组件 XSelect 的私有属性，用来描述所有可使用的选项
  },
};
```

该 `schema` 最终生成的数据如下：

``` json
{
  "title": "",
  "type": ""
}
```

## 通用属性

所有的组件都具有以下通用的属性：

| 名称       | 类型     | 默认值  | 描述                                |
| ---------- | -------- | ------- | ----------------------------------- |
| c          | `string` | `-`     | 组件名称                            |
| xs         | `number` | 12      | 占据网格的空间大小，可选值：1～12。 |
| default    | `any`    | `''`    | 组件的默认值                        |
| label      | `string` | `''`    | 组件标题                            |
| helperText | `string` | `''`    | 组件提示信息文案                    |
| visible    | `bool`   | `true`  | 显示                                |
| disabled   | `bool`   | `false` | 禁止编辑                            |
| rule       | `func`   | `-`     | 组件校验规则。                      |
| onChange   | `func`   | `-`     | 组件的值发生变化时触发该事件。      |

### c

组件名。

### xs

用于处理组件的布局。详见，[布局](/guide/layout)。

### default

设置数据和组件的默认值，特别注意默认值的数据类型要与组件可接收的数据类型保持一致，否则可能会出现未知的错误。

### label

组件标题。

### helperText

组件提示信息文案。

### visible

显示。

### disabled

禁止编辑。

### rule

用于处理组件的校验。详见，[校验](/guide/validation)。

### onChange

用于处理组件间的联动。详见，[联动](/guide/linkage)。

## 私有属性

每个组件拥有特有的属性，详见 [组件](/components) 文档中的 API。
