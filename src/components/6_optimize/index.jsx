import React, {PureComponent} from 'react';
import './index.css'

export default class A extends PureComponent {
  state = {name: 'tom'}

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   //nextProps:接下来要变化的目标props, nextState:接下来要变化的目标state
  //   return this.state.name !== nextState.name;
  // }

  render() {
    console.log('parent-render');
    const {name} = this.state
    return (
        <div className="parent">
          <h3>我是A组件</h3>
          <h4>名字:{name}</h4>
          <button onClick={this.changeName}>改名</button>
          <B name={name}/>
        </div>
    )
  }

  changeName = () => {
    this.setState({name: 'peiqi'})
  }
}

class B extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   //nextProps:接下来要变化的目标props, nextState:接下来要变化的目标state
  //   return this.props.name !== nextProps.name;
  // }

  render() {
    console.log('child-render');
    return (
        <div className="child">
          <h3>我是B组件</h3>
          <h4>从A接收的名字:{this.props.name}</h4>
        </div>
    )
  }
}
