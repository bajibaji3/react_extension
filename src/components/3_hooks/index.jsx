import React from 'react';
import ReactDOM from 'react-dom'

//类式组件
// class Demo extends Component {
//   state = {count: 0}
//
//   //创建ref容器
//   myRef = React.createRef()
//
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState({count: this.state.count + 1})
//     }, 1000)
//   }
//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }
//
//   render() {
//     return (
//         <div>
//           <input type="text" ref={this.myRef}/>
//           <h1>当前求和：{this.state.count}</h1>
//           <button onClick={this.add}>+1</button>
//           <button onClick={this.unmount}>卸载组件</button>
//           <button onClick={this.show}>点击提示数据</button>
//         </div>
//     )
//   }
//
//   add = () => {
//     const {count} = this.state
//     this.setState({count: count + 1})
//   }
//
//   unmount = () => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }
//
//   show = () => {
//     alert(this.myRef.current.value)
//   }
// }

//函数式组件
function Demo() {
  const [count, setCount] = React.useState(0)
  // const [name, setName] = React.useState('tom')

  React.useEffect(() => {
    //这里相当于componentDidMount和componentDidUpdate钩子
    let timer = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => {
      //这里相当于componentWillUnmount钩子
      clearInterval(timer)
    }
  }, [count])

  const myRef = React.useRef()

  function add() {
    // setCount(count + 1) //第一种写法
    setCount(count => count + 1) //第二种写法

  }

  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  function show() {
    alert(myRef.current.value)
  }


  // function changeName() {
  //   setName('tony')
  // }

  return (
    <div>
      <input type="text" ref={myRef}/>
      <h1>当前求和：{count}</h1>
      {/*<h1>名字：{name}</h1>*/}
      <button onClick={add}>+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点击提示数据</button>
      {/*<button onClick={changeName}>改名</button>*/}
    </div>
  )
}

export default Demo