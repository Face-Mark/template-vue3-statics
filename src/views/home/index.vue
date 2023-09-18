<template>
  <div class="user">
    <h1>This is an home page</h1>
    <button @click="goLink('/user')">go user</button>
    <el-button @click="setToken()">点击修改token</el-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
// import { UserModule } from '@/store/modules/user'
import { useStore } from 'vuex'

@Options({
  components: {
  }
})

export default class homeView extends Vue {
  setup () {
    return {}
  }

  created (): void {
    const store = useStore()
    store.commit('SET_TOKEN', 'rrrrrrr')
    console.log('11111111111', store.state.UserModule.token)
  }

  // get token () {
  //   return UserModule.token
  // }

  goLink (val: string) {
    this.$router.push(val)
  }

  setToken () {
    console.log('eer')
  }
}
</script>
