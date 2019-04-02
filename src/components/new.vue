<!-- 跳转至新页面 -->
<template>
  <div class="skill">
    <h1>在新页面中F12查看控制台，Console下打印日志为上个页面的打印日志（或者重新打开控制台的则不会有打印日志）</h1>
    <br>
    <hr>
    <br>
    <h1>改变窗口大小，Console下仍无打印日志，说明新页面没有对上一个页面的图表造成影响</h1>
  </div>
</template>
<style>
.skill{
  color: #000;
  font-size: 18px;
  padding:  20px
}
</style>
<script>
export default {
  name: 'NewPage',
  data () {
    return {

    }
  }
}
</script>
