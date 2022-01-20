import React, {Component} from 'react';
import './index.css'

export default class A extends Component {
  render() {
    return (
        <div className="parent">
          <h3>我是A组件</h3>
          {/*renderProps类似于vue中的插槽*/}
          <B render={(name) => <C name={name}/>}/>
        </div>
    )
  }
}

class B extends Component {
  state = {name: 'tom'}

  render() {
    const {name} = this.state
    return (
        <div className="child">
          <h3>我是B组件</h3>
          {this.props.render(name)}
        </div>
    )
  }
}

class C extends Component {

  render() {
    return (
        <div className="grand">
          <h3>我是C组件</h3>
          <h4>从B接收到的名字:{this.props.name}</h4>
        </div>
    )
  }
}
