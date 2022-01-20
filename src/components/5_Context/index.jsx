import React, {Component} from 'react';
import './index.css'

//创建Context对象
const MyContext = React.createContext()
const {Provider, Consumer} = MyContext

export default class A extends Component {
  state = {name: 'tom', age: 18}

  render() {
    const {name, age} = this.state
    return (
        <div className="parent">
          <h3>我是A组件</h3>
          <h4>名字:{name}</h4>
          <Provider value={{name, age}}>
            <B/>
          </Provider>
        </div>
    )
  }
}

class B extends Component {
  render() {
    return (
        <div className="child">
          <h3>我是B组件</h3>
          <h4>从A接收的名字:{}</h4>
          <C/>
        </div>
    )
  }
}

// class C extends Component {
//   static contextType = MyContext
//   render() {
//     const {name, age} = this.context
//     return (
//         <div className="grand">
//           <h3>我是C组件</h3>
//           <h4>从A接收的名字:{name}</h4>
//           <h4>从A接收的年龄:{age}</h4>
//         </div>
//     )
//   }
// }

function C() {
  return (
    <div className="grand">
      <h3>我是C组件</h3>
      <Consumer>
        {
          value => `名字:${value.name},年龄:${value.age}`
        }
      </Consumer>
    </div>
  )
}