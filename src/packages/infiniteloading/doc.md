# Infiniteloading 无限加载
列表滚动到底部自动加载更多数据。

## 基本用法

```html
<nut-infiniteloading @loadmore="onInfinite" :is-show-mod="true" :has-more="isHasMore" :is-loading="isLoading"
    :threshold="200">
    <div class="list">
    <nut-cell v-for="(item, index) of data" :key="item" :title="'噜啦噜'+index" sub-title="我又来送福利啦！关注之后你就会">
         <template slot="avatar">
        <nut-avatar sizeNum="60" bg-image="https://img14.360buyimg.com/imagetools/jfs/t1/130112/36/5492/38449/5f1f964cEfd6f41bf/bec836b48b55bb00.jpg" bg-icon></nut-avatar>
        </template>
        <div slot="desc">
        <p class="timer">10:12</p>
        <p class="badge">
            <nut-badge :value="9" :max="99" top="0px" right="15px"></nut-badge>
        </p>
        </div>
    </nut-cell>
    </div>
</nut-infiniteloading>
```
```javascript
export default {
    data() {
        return {
            data: new Array(30),
            page: 2,
            num: 30,
            isHasMore: true,
            isLoading: false,
            isErr: false,
            timer: null
        };
    },
    methods: {
        onInfinite () {
            this.isLoading = true;
            this.timer = setTimeout(() => {
                if (this.page <= 5) {
                    this.data = new Array(this.num * this.page);
                    this.page = this.page + 1;
                } else {
                    this.isHasMore = false;
                }
                this.isLoading = false;
            }, 100);
        }
    },
    destroyed() {
        clearTimeout(this.timer);
    }
};
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| has-more | 是否还有更多数据 | Boolean | true
| is-loading | 是否加载中 | Boolean | false
| threshold | 距离底部多远加载 | Number | 200
| is-showMod | 是否展示懒加载模块内容，一般适用于选项卡切换 | Boolean | false
| use-window | 将滚动侦听器添加到 window 否则侦听组件的父节点 | Boolean | true
| use-capture | 是否使用捕获模式 true捕获 false冒泡 | Boolean | false
| unload-more-txt | 没有更多数据展示文案 | String | 哎呀，这里是底部了啦

## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| loadmore | 继续加载的回调函数 | -
| scrollChange | 实时监听滚动高度 | 滚动高度