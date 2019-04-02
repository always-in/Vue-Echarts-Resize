# echarts-fit

> 几种echarts图表自适应方法比较,万能解决方案第3种，在div上绑定对应onresize方法

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

# Vue-Echarts-Resize

**1.使用window.onresize**


```
let myChart = echarts.init(document.getElementById(dom))
window.onresize = function () {
  	myChat.resize()
}
```

**优点**：可以根据窗口大小实现自适应

**缺点**：

    1.多个图表自适应写法比较麻烦（当一个页面的图表太多时，这样写法不是很灵活）；


```
let myChart1 = echarts.init(document.getElementById(dom1))
let myChart2 = echarts.init(document.getElementById(dom2))
window.onresize = function () {
  	myChat1.resize()
  	myChat2.resize()
}
```

    2.多个vue页面有onresize方法时，会被覆盖；

    3.当vue页面路由跳转到下一个页面时，上一个页面的onresize方法会继续执行，（这个时候下一个页面已经不需要onresize方法执行了，当图表过多时会造成页面卡顿）

----------------

**2.使用window.addEventListener添加resize方法**


```
let myChart = echarts.init(document.getElementById(dom))
let sizeFun = function () {
  	myChat.resize()
}
window.addEventListener('resize', sizeFun )
```

**优点：**

    1.可以根据窗口大小实现自适应；

    2.将图表方法封装以后，只需要执行一遍就可以实现多个图表的自适应；

    3.不会被覆盖
    
**缺点：**

    当vue页面路由跳转到下一个页面时，上一个页面的onresize方法会继续执行
    【造成这个问题的原因是因为vue是单页面应用，echarts中的操作都是基于window，
    当然也可以使用window.removeEventListener在下一个页面删除绑定的方法】
[点击查看window.removeEventListener使用注意点](https://www.cnblogs.com/Sarah119/p/7825265.html)

------------

**3.实现在div使用onresize方法**

**实现原理**：在div上实现类似window的onresize
监听，这样既能实现图表的自适应，也不会因为页面跳转之后继续执行三个页面的onresize 方法

**实现方法：**

   1. 引入esresize.js（项目存放有）
   
![](https://user-gold-cdn.xitu.io/2019/3/8/1695c450b2fd9189?w=1065&h=705&f=png&s=119432)
    2. 在div上绑定对应onresize 方法
![](https://user-gold-cdn.xitu.io/2019/3/8/1695c44b5eb5a466?w=1112&h=617&f=png&s=102308)

**优点：**

    1.可以根据窗口大小实现自适应
    2.页面跳转不会执行上次操作
    3.多个方法不会覆盖
**缺点：**

    暂无发现（如有问题，欢迎各位补充）
    
[    文章参考：JS监听div的resize事件](https://www.cnblogs.com/zhtui/p/7059943.html)

