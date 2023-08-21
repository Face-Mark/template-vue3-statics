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
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'

@Options({
  components: {
    HelloWorld
  }
})
export default class userView extends Vue {
  count = 0
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
