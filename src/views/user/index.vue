<template>
  <div class="user">
    <h1>This is an user page</h1>
    <button @click="countHandle('cut')">-</button>
    <button>{{ count }}</button>
    <button @click="countHandle('add')">+</button>
    <br>
    <button @click="goLink('/')">go home</button>
    <br>
    <HelloWorld msg="This is an helloWord" />
    <el-button type="warning">1313131</el-button>
    <br>
    <el-button type="primary" @click="handleClipboard('我是一个汉字', $event)">复制</el-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import { ElButton } from 'element-plus'
import { handleClipboard } from '@/utils/clipboard'

@Options({
  components: {
    HelloWorld,
    ElButton
  }
})
export default class userView extends Vue {
  count = 0
  private handleClipboard = handleClipboard
  countHandle (type: string) {
    switch (type) {
      case 'add':
        this.count++
        break
      case 'cut':
        this.count--
        break
      default:
        break
    }
  }

  goLink (val: string) {
    this.$router.push(val)
  }
}
</script>
