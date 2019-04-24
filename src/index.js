//React入口文件
import React from 'react'; //引入React,帮我们理解特有的语法和写作规则
import ReactDOM from 'react-dom';//帮我们把一个组件渲染到一个dom节点上

// App组件，大写字母开头
import TodoList from './TodoList';


ReactDOM.render(<TodoList />, document.getElementById('root'));


