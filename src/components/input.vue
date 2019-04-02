<template>
  <div class="hello">
    <div id="myChart"></div>
    <div id="myChart2"></div>

    <h1>在当前页面中F12查看控制台，Console下无打印日志</h1>
    <hr>
    <h1>改变浏览器窗口大小，查看控制台，Console下出现打印日志</h1>
     <router-link to="/new">点击跳转至新页面查看情况</router-link>
  </div>
</template>

<script>
import {EleResize} from '../assets/js/esresize.js'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'Input',
  data () {
    return {
    }
  },
  mounted () {
    this.setChart1()
    this.setChart2()
  },
  methods: {
    drawLine (dom, option) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById(dom))
      let resizeDiv = document.getElementById(dom)
      // 绘制图表
      myChart.setOption(option)
      console.log(EleResize)
      let listener = function () {
        console.log('resize')
        myChart.resize()
      }
      EleResize.on(resizeDiv, listener)
    },
    setChart1 () {
      let dom = 'myChart'
      let option = {
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
      this.drawLine(dom, option)
    },
    setChart2 () {
      let dom = 'myChart2'
      let option = {
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['1212', '333', '444', 'fff', '吃饭饭', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [53, 203, 36, 10, 10, 20]
        }]
      }
      this.drawLine(dom, option)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  padding: 20px;
}
#myChart{
  width: 50%;height: 300px;
}
#myChart2{
  width: 50%;height: 300px;
}

</style>
