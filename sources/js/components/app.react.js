// Library
import connectToStores from 'alt/utils/connectToStores'
import React from 'react'

// Alt - Flux
import AuthActions from '../actions/auth'
import UsersActions from '../actions/users'
import UserStore from '../stores/user'

// Design
import { Navbar, NavItem, Nav, Grid } from 'react-bootstrap'

class App extends React.Component {

  // Alt Store との連結設定 - ここに設定したStoreから変更通知を受け取る
  static getStores() {
    return [UserStore]
  }

  // Alt を使用した場合の Props の生成ルール - ここで返す結果がPropsに設定される
  static getPropsFromStores() {
    return UserStore.getState()
  }  

  home() {
    AuthActions.toHome()
  }

  login() {
    AuthActions.toLogin()
  }

  logout() {
    AuthActions.logout()
  }

  useredit() {
    UsersActions.toEdit()
  }

  render() {

    // デフォルトは未ログイン状態
    let buttons = (
      <Nav pullRight>
        <NavItem onClick={this.login.bind(this)}>ログイン</NavItem>
      </Nav>
    )

    // ログイン済み
    buttons = this.props.loggedIn  ? (
      <Nav pullRight>
        <NavItem onClick={this.useredit.bind(this)}>ユーザ情報の変更</NavItem>
        <NavItem onClick={this.logout.bind(this)}>ログアウト</NavItem>
      </Nav>
    ) : buttons

    return (

      <div>
       <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a onClick={this.home.bind(this)}>React First Step</a>
            </Navbar.Brand>
            <Navbar.Toggle /> 
          </Navbar.Header>
          <Navbar.Collapse>
            {buttons}
          </Navbar.Collapse>
        </Navbar>
        <Grid>
        {this.props.children}
        </Grid>
      </div>

    )
  }

}

export default connectToStores(App)