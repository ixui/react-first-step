import Alt from '../alt'
import _ from 'lodash'
import AuthActions from '../actions/auth'
import UsersActions from '../actions/users'

class UserStore {

  // **************************************************** 
  // コンストラクタ
  // **************************************************** 
  constructor() {
    this.bindActions(AuthActions)
    this.bindActions(UsersActions)
    this.currentUser = null
    this.loggedIn = (this.currentUser) ? true : false
  }

  loginSuccess(user) {
    debugger
    this.currentUser = _.merge({}, user)
    this.loggedIn = (this.currentUser) ? true : false
  }

  loginFailed(error) {
    this.currentUser = null
    this.loggedIn = (this.currentUser) ? true : false
    alert("ログインできませんでした")
  }

  logout() {
    this.currentUser = null
    this.loggedIn = (this.currentUser) ? true : false
  }

  updateSuccess(user) {
    debugger
    this.currentUser = _.merge(this.currentUser, user)
    this.loggedIn = (this.currentUser) ? true : false
    alert("更新しました")
  }

  updateFailed(error) {
    alert("情報が更新できませんでした")
  }


}

export default Alt.createStore(UserStore, 'UserStore')