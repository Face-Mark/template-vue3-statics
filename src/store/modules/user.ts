import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { getToken, setToken, removeToken } from '@/utils/cookies'

export interface IUserState {
  token: string
}

// @Module({ dynamic: true, store, name: 'user' })
@Module
export default class UserModule extends VuexModule implements IUserState {
  public token = getToken() || ''

  @Mutation
  private SET_TOKEN (token: string) {
    this.token = token
  }

  @Action
  public async Login (userInfo: { username: string, password: string}) {
    // let { username, password } = userInfo
    // username = username.trim()
    // const { data } = await login({ username, password })
    // setToken(data.accessToken)
    // this.SET_TOKEN(data.accessToken)
  }

  @Action
  public ResetToken () {
    removeToken()
    this.SET_TOKEN('')
  }

  @Action
  public async LogOut () {
    removeToken()
    this.SET_TOKEN('')
  }
}

// export const UserModule = getModule(User)
