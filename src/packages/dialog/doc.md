# Dialog 对话框

模态对话框，在浮层中显示，引导用户进行相关操作，支持图片对话框。

## 基本用法

```javascript
this.$dialog({
  title: "确定删除此订单？",
  content: "删除后将从你的记录里消失，无法找回",
  onOkBtn(event) {
    this.close(); //关闭对话框
  }
});
```

## 事件
```javascript
this.$dialog({
        title: "自定义Dialog标题",
        content: "小屏或移动端浏览效果最佳",
        closeBtn:true,  //显式右上角关闭按钮
        onOkBtn(event) {  //确定按钮点击事件
           this.$toast.text("okBtn");
          this.close(); //关闭对话框
        },
        onCancelBtn(event) {  //取消按钮点击事件，默认行为关闭对话框
           this.$toast.text("cancelBtn");
          //return false;  //阻止默认“关闭对话框”的行为
        },
        onCloseBtn(event) { //右上角关闭按钮点击事件
           this.$toast.text("closeBtn");
          //return false;  //阻止默认“关闭对话框”的行为
        },
        closeCallback(target) {
           this.$toast.text("will close");  //对话框关闭回调函数，无论通过何种方式关闭都会触发
        }
});
        
```
## 多行按钮
```javascript
this.$dialog({
        content: '我认为，大多数设计师只是试图从他们已经做过的事情中努力，在讲故事方面并没有什么特别之处，而我的回归，将伴随着一个伟大的演讲',
        multiButton:true,
        textAlign:"left",
        multiButtonText:[{
          name: '主要操作1(禁止)',
          value: 0,
          disabled:true
        },
        {
          name: '主要操作2',
          value: 1,
          disabled:false,
        }],
        chooseBtn(item,index){
          console.log(index)
           this.$toast.text(`我点击了第${index + 1}个按钮`)
          this.close()
        },    
      });
        
```
## 关闭dialog不销毁实例
```javascript
 this.$dialog({
        animation: false, //禁用弹出动效
        title: "注册说明",
        canDestroy:false,
        content:
          "原账号为您本人所有，建议直接登录或找回密码。原账号内的订单资产可能丢失，可联系京东客服找回。"
      });
        
```
## 页面滚动锁定

**lockBgScroll** 值设为 **true** 时，可在弹窗出现时锁定页面滚动，且不影响窗体内部滚动。

```javascript
this.$dialog({
        title: "背景滚动锁定",
        lockBgScroll:true,
        content:"弹窗弹出后，页面滚动锁止。在窗体和遮罩层上滑动时，页面不再跟随滚动。"
});
```

## 图片弹窗

**type** 值为 **image** 时为图片弹窗，需要配置一张图片，可带链接（非必须）。默认展示关闭按钮。点击图片触发 **onClickImageLink** 事件，返回**false**可阻止默认的跳转链接行为。

```javascript
this.$dialog({
  type:"image", //设置弹窗类型为”图片弹窗“
  link:"http://m.jd.com", //点击图片跳转的Url
  imgSrc:"https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/4875/23/1968/285655/5b9549eeE4997a18c/070eaf5bddf26be8.jpg", //图片Url
  onClickImageLink:function(){ //图片点击事件，默认行为是跳转Url
    console.log(this); //this指向该Dialog实例
    return false;  //返回false可阻止默认的链接跳转行为
  }
});
```

## 标签式写法

如果Dialog内容有复杂交互，可使用Dialog的标签式用法。注意标签使用的时候，属性不建议使用驼峰，推荐使用如下写法

```html
<nut-dialog title="标签形式调用" :visible="dialogShow" @ok-btn-click="dialogShow=false" @cancel-btn-click="dialogShow=false" @close="dialogShow=false">
    <a href="javascript:;" @click="dialogShow=false" :noCancelBtn="true">点我可以直接关闭对话框</a>
</nut-dialog>
```

```javascript
export default {
  data() {
    return {
      dialogShow: false
    };
  }
}
```

## prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| title | 标题 | String | -
| content | 内容，支持HTML | String | -
| type | 弹窗类型，值为**image**时为图片弹窗 | String | -
| closeOnClickModal | 点击蒙层是否关闭对话框 | Boolean | true
| noFooter | 是否隐藏底部按钮栏 | Boolean | false
| noOkBtn | 是否隐藏确定按钮 | Boolean | false
| noCancelBtn | 是否隐藏取消按钮 | Boolean | false
| cancelBtnTxt | 取消按钮文案 | String | ”取 消“
| okBtnTxt | 确定按钮文案 | String | ”确 定“
| okBtnDisabled | 禁用确定按钮 | Boolean | false
| cancelAutoClose | 取消按钮是否默认关闭弹窗 | Boolean | true
| textAlign | 文字对齐方向，可选值同css的text-align | String | "left"-
| maskBgStyle | 遮罩层样式（颜色、透明度） | String | -
| customClass | 增加一个自定义class | String | -
| link | 点击图片跳转的Url，仅对图片类型弹窗有效 | String | -
| imgSrc | 图片Url，仅对图片类型弹窗有效 | String | -
| animation | 是否开启默认动效 | Boolean | true
| multiButton | 是否开启多行按钮 | Boolean | false
| multiButtonText | 多行按钮内容。内容必须包含name,按钮显示的内容 | Array | -
| lockBgScroll | 锁定遮罩层滚动，不影响弹窗内部滚动（实验性质）会给body添加posotion:fix属性，注意 | Boolean | false

## event

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| onOkBtn | 确定按钮回调 | Function | -
| onCancelBtn | 取消按钮回调 | Function | -
| onCloseBtn | 关闭按钮回调 | Function | -
| closeCallback | 关闭回调，任何情况关闭弹窗都会触发 | Function | -
| chooseBtn | 多行按钮内容。回调函数，返回参数为 点击的item和index | Function | -