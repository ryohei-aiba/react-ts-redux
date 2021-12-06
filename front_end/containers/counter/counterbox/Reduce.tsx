import * as React from 'react'
import {decrement} from '../../../modules/ActionCreater'


type ReduceButtonProps = {
  decrementAction: typeof decrement,
  switchFunction: any
}

export const ReduceButton: React.FC<ReduceButtonProps> = props =>  {
  function decrement() {
    props.decrementAction()
  }
  function switchMode() {
    props.switchFunction()
  }
  return(
    <div style={{whiteSpace: 'pre-line'}}>
      <span>REDUCE</span><button onClick={decrement}>引く</button>
      {'\n'}
      <button onClick={switchMode}>足し算ボタンを出現させます</button>
    </div>
  )
}