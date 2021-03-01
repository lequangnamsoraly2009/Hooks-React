import './App.css';
import React,{useState,useEffect} from 'react';
// import Person from './components/Person';
// import ClickCount from './components/ClickCount';
// import ColorBox from './components/ColorBox';
// import ToDoList from './components/ToDoList';
// import ToDoForm  from './components/ToDoForm';
import PostList  from './components/PostList';


function App() {

  // const [todoList,setTodoList] = useState([
  //   { id: 1, title: 'I love Easy Frontend! 😍' },
  //   { id: 2, title: 'We love Easy Frontend! 🥰' },
  //   { id: 3, title: 'They love Easy Frontend! 🚀' },
  // ]);

  const [postList,setPostList] = useState([]);

  useEffect(()=>{
    async function fetchPostList(){
      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const {data} = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log('Failed fetch request url',error.message);
      }
    }
    fetchPostList();
  },[]);

  // const handleTodoClick = (todo) =>{
  //   const indexClick = todoList.findIndex((x)=>x.id===todo.id);
  //   const newTodoList = [...todoList];
  //   newTodoList.splice(indexClick, 1);
  //   setTodoList(newTodoList);
  // }
  // const handleTodoSubmit = (formValues) =>{
  //   // console.log('Form values: ', formValues);

  //   const newTodoList = [...todoList];
  //   const newTodo = {
  //     id: newTodoList.length*5,
  //     // ...formValues : lấy toàn bộ các key và value còn lại trong mảng formValues
  //     ...formValues,
  //   }
  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);
  // }


  return (
    <div className="App">
      {/* <ClickCount/>
      <Person name='abc' age='10'>My hoobies: Fuck off</Person>
      <Person name='c' age='20' />
      <Person name='Nam' age='130' />
      <ColorBox/> */}
      {/* <ToDoForm onSubmit={handleTodoSubmit}/>
      <ToDoList todos={todoList} onTodoClick = {handleTodoClick}/> */}
      <PostList posts={postList}/>
    </div>
  );
}

export default App;
