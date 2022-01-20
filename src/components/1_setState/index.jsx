import React, {Component} from 'react';

export default class Demo extends Component {
  state = {count: 0}

  render() {
    return (
        <div>
          <h1>当前求和：{this.state.count}</h1>
          <button onClick={this.add}>+1</button>
        </div>
    )
  }

  add = () => {
    //对象式的setState
    /*const {count} = this.state
    this.setState({count: count + 1}, () => {
      console.log('count1', this.state.count);
    })
    console.log('count2', this.state.count);*/

    //函数式的setState
    // this.setState((state, props) => {
    //   console.log(state, props);
    //   return {count: state.count + 1}
    // })

    this.setState(state => ({count: state.count + 1}))
  }
}