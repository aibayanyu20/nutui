#  DatePicker 日期选择器

### 介绍
    
时间选择器，支持日期、年月、时分等维度，通常与弹出层组件配合使用。
    
### 安装
    
```javascript
import { createApp } from 'vue';
import { DatePicker } from '@nutui/nutui-taro';

const app = createApp();
app.use(DatePicker);
```
    
### 选择年月日
:::demo

```html
<template>
  <nut-date-picker
      v-model="currentDate"
      :min-date="minDate"
      :max-date="maxDate"
      :is-show-chinese="true"
      @confirm="confirm"
  ></nut-date-picker> 
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const minDate = new Date(2020, 0, 1);
      const maxDate = new Date(2025, 10, 1);
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ({ selectedValue, selectedOptions })=>{
        console.log(selectedOptions.map((val: any) => val.text).join(''));
      }
      return {
        currentDate,
        minDate,
        maxDate,
        confirm
      };
    }
  };
</script>

```
:::

### 搭配 Popup 使用

:::demo

```html
<template>
  <nut-cell title="选择日期" :desc="popupDesc" @click="show = true"></nut-cell>
  <nut-popup position="bottom" v-model:visible="show">
    <nut-date-picker
      v-model="currentDate"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="popupConfirm"
      :is-show-chinese="true"
    >
      <nut-button block type="primary" @click="alwaysFun">永远有效</nut-button>
    </nut-date-picker>
  </nut-popup>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
       const show = ref(false);
      const popupDesc = ref();
      const minDate = new Date(2020, 0, 1);
      const maxDate = new Date(2025, 10, 1);
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const popupConfirm = ({ selectedValue, selectedOptions })=>{
        popupDesc.value = selectedOptions.map((val: any) => val.text).join('');
        show.value = false;
      }
      const alwaysFun = ()=>{
        popupDesc.value = '永远有效'
        show.value = false;
      }
      return {
        show,
        popupDesc,
        currentDate,
        minDate,
        maxDate,
        alwaysFun,
        popupConfirm
      };
    }
  };
</script>

```
:::

### 选择月日

DatetimePicker 通过 `type` 属性来定义需要选择的时间类型。将 `type` 设置为 year-month 即可选择年份和月份，设置为 month-day 即可选择月份和日期。

:::demo
```html
<template>
  <nut-date-picker
      v-model="currentDate"
      type="month-day"
      title="日期选择"
      :min-date="new Date(2022, 0, 1)"
      :max-date="new Date(2022, 7, 1)"
      @confirm="confirm"
  ></nut-date-picker> 
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        console.log(selectedOptions.map((val: any) => val.text).join('-'));
      }
      return {
        currentDate,
        confirm
      };
    }
  };
</script>
```
:::
### 选择年月日时分

将 `type` 设置为 datetime 即可选择完整的时间。

:::demo

```html
<template>
  <nut-date-picker
      v-model="currentDate"
      title="日期时间选择"
      type="datetime"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
  ></nut-date-picker> 
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        date = selectedValue.slice(0, 3).join('-');
        time = selectedValue.slice(3).join(':');
        console.log(date + ' ' + time) ;
      }
      return {
        currentDate,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        confirm
      };
    }
  };
</script>
```
:::

### 选择时分秒
:::demo
```html
<template>
  <nut-date-picker
      v-model="currentDate"
      title="时间选择"
      type="time"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
  ></nut-date-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        console.log(selectedValue.join(':'));
      }
      return {
        currentDate,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        confirm
      };
    }
  };
</script>
```
:::

### 格式化选项

通过传入 `formatter` 函数，可以对选项文字进行格式化处理。 `isShowChinese` 属性同样是也为选项后面添加文案，但 `formatter` 函数的优先级高于 `isShowChinese` 属性。

:::demo
```html
<template>
  <nut-date-picker
      v-model="currentDate"
      title="时间选择"
      type="datetime"
      :min-date="new Date(2022, 0, 1)"
      :max-date="new Date(2022, 10, 1)"
      :formatter="formatter"
      @confirm="confirm"
  ></nut-date-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        date = selectedOptions.slice(1, 3).map((op) => op.text).join('');
        time = selectedOptions.slice(3).map((op) => op.value).join(':');
        console.log(selectedOptions[0].text + '年' + date + ' ' + time);
      }
      const formatter = (type: string, option) => {
        switch (type) {
          case 'year':
            option.text += '';
            break;
          case 'month':
            option.text += '月';
            break;
          case 'day':
            option.text += '日';
            break;
          case 'hour':
            option.text += '时';
            break;
          case 'minute':
            option.text += '分';
            break;
          default:
            option.text += '';
        }
        return option;
      };
      return {
        currentDate,
        confirm,
        formatter,
      };
    }
  };
</script>
```
:::

### 分钟数递增步长设置

:::demo
```html
<template>
  <nut-date-picker
      v-model="currentDate"
      type="time"
      :minute-step="5"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
  ></nut-date-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const currentDate = new Date(2022, 4, 10, 10, 10);
      const confirm = ( { selectedValue, selectedOptions } )=>{
        console.log(selectedValue.join(':')) ;
      }
      return {
        currentDate,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        confirm
      };
    }
  };
</script>
```
:::

### 过滤选项

通过 `filter` 函数可以对选项数组进行过滤，实现自定义时间间隔。 

:::demo
```html
<template>
  <nut-date-picker
      v-model="currentDate"
      title="时间选择"
      type="datehour"
      :min-date="minDate"
      :max-date="maxDate"
      :filter="filter"
      :formatter="formatter"
      @confirm="confirm"
  ></nut-date-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const currentDate = new Date(2022, 4, 10, 0, 0);
      const formatter = (type: string, option) => {
        switch (type) {
          case 'year':
            option.text += '年';
            break;
          case 'month':
            option.text += '月';
            break;
          case 'day':
            option.text += '月';
            break;
          case 'hour':
            option.text += '时';
            break;
          default:
            option.text += '';
        }
        return option;
      };

      const filter = (type: string, options) => {
        if (type == 'hour') {
          return options.filter((option) => Number(option.value) % 6 === 0);
        }
        return options;
      };
      const confirm = ( { selectedValue, selectedOptions } )=>{
        console.log(selectedOptions.map((option) => option.text).join(''));
      }
      return {
        currentDate,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        confirm,
        formatter,
        filter
      };
    }
  };
</script>
```
:::

## API
    
### Props
    
| 参数            | 说明                                              | 类型    | 默认值   |
|-----------------|---------------------------------------------------|---------|----------|
| v-model         | 初始值                                            | date    | `null`   |
| type            | 时间类型，可选值 `date` `time` `year-month` `month-day` `datehour` | string  | `'date'` |
| minute-step     | 分钟步进值                                        | number  | `1`      |
| is-show-chinese | 每列是否展示中文                                  | boolean | `false`  |
| min-date        | 开始日期                                          | date    | `十年前` |
| max-date        | 结束日期                                          | date    | `十年后` |
| formatter   | 选项格式化函数                                          | (type: string, option: PickerOption) => PickerOption    |  |
| filter    | 选项过滤函数                                          | (type: string, option: PickerOption) => PickerOption[]    |  |
| title           | 设置标题                                          | string  | `null`   |
| ok-text           | 确定按钮文案                                          | string  | `确定`   |
| cancel-text           | 取消按钮文案                                          | string  | `取消`   |
| swipe-duration     | 惯性滚动时长               | number \| string  | `1000`    |
| visible-option-num          |可见的选项个数              | number \| string | `7`               |
| option-height         | 选项高度             | number \| string | `36`     |
| show-toolbar         | 是否显示顶部导航             | boolean | `true`    |

### Events
    
| 事件名  | 说明               | 回调参数     |
|---------|--------------------|--------------|
| confirm | 点击确定按钮时触发 | 	`{ selectedValue, selectedOptions }` |
| cancel   | 点击取消按钮时触发         | 	`{ selectedValue, selectedOptions }` |
| change   | 选项改变时触发         | `{ columnIndex, selectedValue, selectedOptions }` |

### Slots

| 名称 | 说明           |
|--------|----------------|
| default  | 自定义滑动数据底部区域 |
| top  | 自定义滑动数据顶部区域 |