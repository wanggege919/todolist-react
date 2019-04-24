import React, { Component } from 'react';
import TodoItem from './TodoItem'
//定义一个React组件，定义一个App的类，继承了React组件的特性
class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick= this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleClick () {
    // this.state.list.push(44444444444)
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }
  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleDelete (index) {
    // this.state.list.splice(index,1)
    //不要对state里面的值直接进行修改，要复制出一个副本出来
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      // list: list
      list
    })
    
  }
  //父组件通过属性的方式向子组件传值
  //子组件通过props的方式接收

  getTodoItems () {
    return (
      this.state.list.map((item,index) => {
        return (<TodoItem
         content={item} 
         index={index} 
         delete={this.handleDelete}
         key={index}></TodoItem>)
      })
    )
  }
  render() {
    //jsx 语法

    return (
      <div>
          <input type="text" value={this.state.inputValue} onChange = {this.handleInputChange}/>
          <button style={{background: 'red',color: '#fff'}} onClick = {this.handleClick}>添加</button>
        <ul>
          {this.getTodoItems()} 
        </ul>
      </div>
    );
  }
}

export default TodoList;
