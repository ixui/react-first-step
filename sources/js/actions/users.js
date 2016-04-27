import alt from '../alt'
import { browserHistory } from 'react-router'

class UsersActions {

  toEdit() {
    browserHistory.push("/me")
  }

  update(fullname, tags) {

    let success = (user) => { this.actions.updateSuccess(user) }
    let failure = (error) => { this.actions.updateFailed(error) }

    // サーバを呼出して何かする ここでは適当にPromiseで代用
    Promise.resolve(
      {
        fullname: fullname, 
        tags: tags
      })
      .then(user => {

        success(user)
      })

  }

  updateSuccess(user){ this.dispatch(user) }
  updateFailed(error){ this.dispatch(error) }


}

export default alt.createActions(UsersActions)
