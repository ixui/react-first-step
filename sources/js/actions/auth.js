import alt from '../alt'
import { browserHistory } from 'react-router'

class AuthActions {

  toLogin() {
    browserHistory.push("/login")
  }

  toHome() {
    browserHistory.push("/home")
  }

  login(empno, password) {
    let success = (user) => { this.actions.loginSuccess(user) }
    let failure = (error) => { this.actions.loginFailed(error) }

    // サーバを呼出して何かする ここでは適当にPromiseで代用
    Promise.resolve(
      {
        empno:empno, 
        password:password, 
        fullname: "ixui user 1"
      })
      .then(user => {

        browserHistory.push("/home")
        success(user)
      })

  }

  loginSuccess(user){ this.dispatch(user) }
  loginFailed(error){ this.dispatch(error) }

  logout() {
    browserHistory.push("/home")
    this.dispatch()
  }

}

export default alt.createActions(AuthActions)
