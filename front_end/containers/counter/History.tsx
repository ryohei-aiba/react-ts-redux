import * as React from 'react';
import { connect } from 'react-redux'
import { Link, NavLink } from "react-router-dom";
import { /*AppState,*/} from '../../modules/Reducers'
import { CounterType } from 'front_end/modules/ActionTypes';
import { CountHeader } from './Header'
import SignOut from '../Signout'

type HistoryListProps = {
  name: string,
  counterState: Array<CounterType['state']>
}

const HistoryList: React.FC<HistoryListProps> = props => {
  let list = props.counterState.map((item, index) => {
    if(item.action === 'increment') {
      return (
        <p key={index} style={{margin: 0}}>
          {item.timeStamp.getHours()}時{item.timeStamp.getMinutes()}分足しました
        </p>
      )
    } else if(item.action === 'decrement') {
      return (
        <p key={index} style={{margin: 0}}>
          {item.timeStamp.getHours()}時{item.timeStamp.getMinutes()}分引きました
        </p>
      )
    }
  })
  return(
    <div style={{whiteSpace: 'pre-line'}}>
      <CountHeader userName={props.name} number={props.counterState[props.counterState.length -1].number} />
      <h1>検索履歴一覧</h1>
      <NavLink to='/counter'>TOP</NavLink>
      {list}
      {'\n'}
      <SignOut />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  name: state.user.name,
  counterState: state.counter
})

export default connect(mapStateToProps)(HistoryList)
