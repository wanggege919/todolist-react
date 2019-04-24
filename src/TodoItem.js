import React from 'react'

class todoItem extends React.Component{
    constructor (props) {
        super(props)
        this.itemClick = this.itemClick.bind(this)
    }
    //子组件如果想和父组件通信，就必须调用父组件传递过来的方法
    itemClick () {
    //    console.log(this.props.index) 
       this.props.delete(this.props.index)
    }
    render () {
        const { content } = this.props //解构赋值
        return (
            // <div onClick={this.itemClick}>{this.props.content}</div>
            <div onClick={this.itemClick}>{content}</div>
        )
    }
}

export default todoItem







