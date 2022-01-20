import React, {Component} from 'react';

export default class Child extends Component {
  state = {
    // users:[
    //   {id: '01', name: 'tom', age: 2},
    //   {id: '02', name: 'peiqi', age: 3},
    //   {id: '03', name: 'qiaozhi', age: 5},
    // ]
    users: '123'
  }

  render() {
    return (
        <div className="parent">
          <h3>我是Child组件</h3>
          {
            this.state.users.map(item => {
              return <h3 key={item.id}>{item.name}------{item.age}</h3>
            })
          }
        </div>
    )
  }
}