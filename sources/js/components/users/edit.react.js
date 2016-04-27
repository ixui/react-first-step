// Library
import connectToStores from 'alt/utils/connectToStores'
import React from 'react'

// Alt - Flux
import UsersActions from '../../actions/users'
import UserStore from '../../stores/user'

// Design
import { Modal, Button } from 'react-bootstrap'

class Edit extends React.Component {

  // Alt Store との連結設定 - ここに設定したStoreから変更通知を受け取る
  static getStores() {
    return [UserStore]
  }

  // Alt を使用した場合の Props の生成ルール - ここで返す結果がPropsに設定される
  static getPropsFromStores() {
    return UserStore.getState()
  }  

  update() {
    let fullname = this.refs.fullname.value
    let tags = this.refs.tags.value
    UsersActions.update(fullname, tags)
  }

  render() {

    return (

        <div className="user-edit-form">
          <div className="form-wrapper">
            <div>
              <div className="form-item">
                <label htmlFor="empno">社員番号</label><br/>
                <input type="text" ref="empno" defaultValue={this.props.currentUser.empno} disabled={true} placeholder="5077"/>
              </div>
              <div className="form-item">
                <label htmlFor="fullname">名前</label><br/>
                <input type="text" ref="fullname" defaultValue={this.props.currentUser.fullname} placeholder="川崎 達也"/>
              </div>
              <div className="form-item">
                <label htmlFor="tags">タグ(カンマ区切り)</label><br/>
                <input type="text" ref="tags" defaultValue={this.props.currentUser.tags} placeholder="ixui,rcs"/>
              </div>
              <div className="button-panel">
                <input type="button" className="button" title="Updatea" value="Update" onClick={this.update.bind(this)}></input>
              </div>
            </div>
          </div>
        </div>

    )
  }

}

export default connectToStores(Edit)
