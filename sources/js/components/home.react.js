// Library
import connectToStores from 'alt/utils/connectToStores'
import React from 'react'
import { Link } from 'react-router'

// Flux
import UserStore from '../stores/user'

// Design
import { Jumbotron, Button } from 'react-bootstrap'

class Home extends React.Component {

  // Alt Store との連結設定 - ここに設定したStoreから変更通知を受け取る
  static getStores() {
    return [UserStore]
  }

  // Alt を使用した場合の Props の生成ルール - ここで返す結果がPropsに設定される
  static getPropsFromStores() {
    return UserStore.getState()
  }  

  render() {

    let username = this.props.currentUser ? this.props.currentUser.fullname : "React" 

    return (

      <div>
        <Jumbotron>
          <h1>Hello. {username}</h1>
        </Jumbotron>
      </div>

    )
  }

}

export default connectToStores(Home)
