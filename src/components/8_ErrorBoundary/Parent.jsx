import React, {Component} from 'react';
import Child from "./Child";

export default class Parent extends Component {
  state = {
    hasError: '', //用于标识子组件是否产生错误
  }

  //当Parent的子组件出现报错时，会触发getDerivedStateFromError的调用，并携带错误信息
  //当项目打包上线后才会起作用
  static getDerivedStateFromError(error) {
    return {hasError: error}
  }

  componentDidCatch(error, errorInfo) {
    console.log('此处用于统计错误，反馈给服务器，通知编码人员进行bug修复');
  }

  render() {
    return (
        <div>
          <h3>我是Parent组件</h3>
          {this.state.hasError ? <h2>出错了...</h2> : <Child/>}
        </div>
    )
  }
}