<template>
  <div class="user">
    <h1>This is an home page</h1>
    <button @click="goLink('/user')">go user</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
  }
})
export default class homeView extends Vue {
  goLink (val: string) {
    this.$router.push(val)
  }
}
</script>
