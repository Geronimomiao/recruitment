import React from 'react'
import { Button, List } from 'antd-mobile';

class App extends React.Component{
  render() {
    const boss = '李云龙'
    return (
      <div>
        <h2>独立团，团长{boss}</h2>
        <OneCamp camper='张大喵'></OneCamp>
        <Cavalry boss="孙德胜"></Cavalry>
      </div>
    )
  }
}

// class Cavalry extends React.Component{
//   render() {
//     return <h2>骑兵连连长 {this.props.boss}</h2>
//   }
// }
function Cavalry(props) {
  return <h2>骑兵连连长 {props.boss}</h2>
}


class OneCamp extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      solders: ['虎子', '柱子', '王根生']
    }
    // this.addSolder = this.addSolder.bind(this)
  }
  componentWillMount() {
    console.log('组件马上就要加载了')
  }
  componentDidMount() {
    console.log('组件加载完毕')
  }
  addSolder() {
    this.setState({
      solders: [...this.state.solders, '新兵'+Math.random()]
    })
  }
  render() {
    console.log('组件正在加载')
    return (
      <div>
        <h2>一营营长，{this.props.camper}</h2>
        <Button type="primary" onClick={() => this.addSolder()}>新兵入伍</Button>
        <List
          renderHeader={ () => '士兵列表' }
        >
          {
            this.state.solders.map(v => {
              return <List.Item key={v}> {v} </List.Item>
            })
          }
        </List>
      </div>
    )
  }
}

export default App
