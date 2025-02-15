# Input

### Intro

The user can enter content in the text box.

### Install

``` javascript
import { createApp } from 'vue';
import { Input } from '@nutui/nutui';

const app = createApp();
app.use(Input);

```

### Basic Usage

The value of field is bound with `v-model`.

:::demo

```html
<template>
  <nut-input 
    v-model="state.text" 
    placeholder="Text" 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        text: ''
      });
      return {
        state
      };
    }
  }
</script>
```

:::

### Custom Type

Use `type` prop to custom different type fields.

:::demo

```html
<template>
  <nut-input 
    placeholder="Text" 
    v-model="state.text" 
  />
  <nut-input 
    placeholder="Password" 
    v-model="state.password" 
    type="password" 
  />
  <nut-input 
    placeholder="Number" 
    v-model="state.number" 
    type="number" 
  />
  <nut-input 
    placeholder="Digit" 
    v-model="state.digit" 
    type="digit" 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        text: '',
        password: '',
        number: '',
        digit: '',
      });
      return {
        state
      };
    }
  }
</script>
```

:::

### Readonly And Disabled

Use `readonly` to set the input box to read-only status, and use `disabled` to set the input box to disabled status.

:::demo

```html
<template>
  <nut-input 
    placeholder="Readonly" 
    v-model="state.readonly" 
    readonly 
  />
  <nut-input 
    placeholder="Disabled" 
    v-model="state.disabled" 
    disabled 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        readonly: '',
        disabled: ''
      });
      return {
        state
      };
    }
  }
</script>
```

:::

### Show Clear Icon

Display the clear icon during the input process by setting `clearable`.

:::demo

```html
<template>
  <nut-input 
    v-model="state.clear" 
    placeholder="Show Clear Icon" 
    clearable
    clearSize="14" 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        clear:''
      });
      return {
        state
      };
    }
  }
</script>
```

:::
### Use With Form

Use in combination with `nut-form` and `nut-form-item`

:::demo

```html
<template>
  <nut-form :model-value="state">
    <nut-form-item label="Text" label-align="center">
      <nut-input v-model="state.val1" placeholder="Text" :border="false" />
    </nut-form-item>
  </nut-form>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        val1: '',
      });
      return {
        state
      };
    }
  }
</script>
```

:::


### Format Value

Use `formatter` prop to format the input value.

:::demo

```html
<template>
  <nut-input 
    v-model="state.format1" 
    placeholder="Format On Change" 
    :formatter="formatter" 
    format-trigger="onChange"
  />
  <nut-input
    v-model="state.format2"
    placeholder="Format On Blur"
    :formatter="formatter"
    format-trigger="onBlur"
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        format1: '',
        format2: ''
      });
      const formatter = (value: string) => value.replace(/\d/g, '');
      return {
        state,
        formatter
      };
    }
  }
</script>
```

:::

### Show Word Limit

After setting the `maxlength` and `show-word-limit` attributes, word count will be displayed at the bottom.

:::demo

```html
<template>
  <nut-input
    v-model="state.text"
    type="text"
    show-word-limit
    rows="2"
    max-length="50"
    placeholder="Message"
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        text: ''
      });
      return {
        state
      };
    }
  }
</script>
```

:::


### No Border

:::demo

```html
<template>
  <nut-input 
    v-model="state.noBorder1" 
    :border="false" 
    placeholder="No Border" 
  />
  <nut-input 
    v-model="state.noBorder2" 
    :border="false" 
    placeholder="No Border" 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        noBorder1: '',
        noBorder2: ''
      });
      return {
        state
      };
    }
  }
</script>
```

:::
### Event Demonstration

:::demo

```html
<template>
  <nut-input
    v-model="state.event"
    clearable
    placeholder="Event"
    @update:model-value="change"
    @focus="focus"
    @blur="blur"
    @clear="clear"
    @click="click"
    @click-input="clickInput"
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        event: ''
      });
      const change = (value: string) => {
        console.log('change: ', value);
      };
      const focus = (event: Event) => {
        console.log('focus:', event);
      };
      const blur = (event: Event) => {
        console.log('blur:', event);
      };
      const clear = (event: Event) => {
        console.log('clear:', event);
      };
      const click = (event: Event) => {
        console.log('click:', event);
      };
      const clickInput = (event: Event) => {
        console.log('clickInput:', event);
      };

      return {
        state,
        change,
        blur,
        clear,
        focus,
        click,
        clickInput,
      };
    }
  }
</script>
```

:::
## API
### Props

| Attribute   | Description               | Type       | Default  |
|--------------|----------------------------------------|----------------|---------|
| v-model      | Input value, two-way binding           | string         | -       |
| type         | Input type, support all native types and `number` `digit` type    | string         | `text`  |
| placeholder  | Placeholder when the input box is empty  | string         | -       |
| input-align  | Input align, eg `left`、`center`、`right` | string | `left` |
| required     | Whether to show required mark            | boolean        | `false` |
| border       | Whether to show inner borde         | boolean        | `true` |
| disabled     | Whether to disable field            | boolean        | `false` |
| readonly     | Whether to be readonly              | boolean        | `false` |
| autofocus    | Whether to auto focus, unsupported in iOS     | boolean        | `false` |
| max-length   | Max length of value                  | string ｜ number | - |
| clearable    | Whether to be clearable              | boolean        | `false`  |
| clear-size   | Clear Icon `font-size`               | string        | `14`  |
| show-word-limit | Whether to show word limit, need to set the `max-length` prop | boolean | `false`  |
| error         | Whether to mark the input content in red   | boolean | `false`  |
| formatter      | Input value formatter    | `(val: string) => string` | - |
| format-trigger | When to format value, eg `onChange`、`onBlur` | string | - |
| confirm-type | The text of the button in the lower right corner of the keyboard, only valid when `type='text'`, eg `send`, `search`, `next`, ` go`, `done` | string |   `done`   |

### Events

| Event   | Description      | Arguments    |
|--------|----------------|-------------|
| update:model-value | Emitted when input value changed | val  |
| focus  | Emitted when input is focused     | event |
| blur   | Emitted when input is blurred     | event  |
| clear  | Emitted when the clear icon is clicked   | event  |
| click  | Emitted when component is clicked	      | event  |
| click-input      | Emitted when the input is clicked      | event  |

### Slots
| Name  | Description     | 
|-------|----------|
| clear | Customize the end of the input box to clear the button |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | 
| --------------------------------------- | -------------------------- | 
| --nut-input-border-bottom| _#eaf0fb_  | 
| --nut-input-disabled-color| _#c8c9cc_  | 
| --nut-input-required-color| _var(--nut-required-color)_  | 
| --nut-input-font-size| _var(--nut-font-size-2)_  | 







