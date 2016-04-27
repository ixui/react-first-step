// Library
import connectToStores from 'alt/utils/connectToStores'
import React from 'react'

import AuthActions from '../../actions/auth'

// Design
import { Modal, Button } from 'react-bootstrap'

class Login extends React.Component {

  // Alt Store との連結設定 - ここに設定したStoreから変更通知を受け取る
  static getStores() {
    return []
  }

  // Alt を使用した場合の Props の生成ルール - ここで返す結果がPropsに設定される
  static getPropsFromStores() {
    return {}
  }  

  login() {
    let empno = this.refs.empno.value
    let password = this.refs.password.value
    AuthActions.login(empno, password)
  }

  render() {

    return (

      <div className="static-modal">
        <Modal.Dialog>

          <Modal.Body className="login-form">

            <div className="form-wrapper">
              <h1>ログイン</h1>
              <div>
                <div className="form-item">
                  <input type="text" ref="empno" required="required" placeholder="従業員番号"></input>
                </div>
                <div className="form-item">
                  <label htmlFor="password"></label>
                  <input type="password" ref="password" required="required" placeholder="パスワード"></input>
                </div>
                <div className="button-panel">
                  <input type="button" className="button" title="ログインする" value="ログインする" onClick={this.login.bind(this)}></input>
                </div>
              </div>
            </div>

          </Modal.Body>

        </Modal.Dialog>
      </div>

    )
  }

}

export default connectToStores(Login)
