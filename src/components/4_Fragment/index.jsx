import React, {Component, Fragment} from 'react';

//类式组件
export default class Demo extends Component {
  render() {
    return (
        //Fragment在渲染时会被丢掉，避免标签层级太多
        <Fragment>
          <input type="text"/>
          <h1>当前求和：{}</h1>
        </Fragment>
    )
  }
}