import './App.css';
import React,{useState,useEffect} from 'react';
import StringQuery from 'query-string';
// import Person from './components/Person';
// import ClickCount from './components/ClickCount';
import ColorBox from './components/ColorBox';
import ToDoList from './components/ToDoList';
import ToDoForm  from './components/ToDoForm';
import PostList  from './components/PostList';
import Pagination  from './components/Pagination';
import PostFilterForm from './components/PostFilterForm';
import Clock from './components/Clock';
import CountNumber from './components/CountNumber';
import RandomColor from './components/RandomColor';



function App() {

  const [todoList,setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍' },
    { id: 2, title: 'We love Easy Frontend! 🥰' },
    { id: 3, title: 'They love Easy Frontend! 🚀' },
  ]);

  const [postList,setPostList] = useState([]);

  const [pagination,setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });

  const [filters,setFilters] = useState({
    _limit: 10,
    _page:1,
  })

  useEffect(()=>{
    async function fetchPostList(){
      try {
        const paramsString = StringQuery.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const {data,pagination} = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed fetch request url',error.message);
      }
    }
    fetchPostList();
  },[filters]);

  const handleClickButton = (newPage) =>{
    console.log('New Page',newPage);
    setFilters({
      ...filters,
      _page: newPage,
    })
  }
  const handleTodoClick = (todo) =>{
    const indexClick = todoList.findIndex((x)=>x.id===todo.id);
    const newTodoList = [...todoList];
    newTodoList.splice(indexClick, 1);
    setTodoList(newTodoList);
  }
  const handleTodoSubmit = (formValues) =>{
    // console.log('Form values: ', formValues)   ;

    const newTodoList = [...todoList];
    const newTodo = {
      id: newTodoList.length*5,
      // ...formValues : lấy toàn bộ các key và value còn lại trong mảng formValues
      ...formValues,
    }
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  const handleFilterChange = (newFilter) =>{
    setFilters({
      ...filters,
      // set page về 1 nếu filter ko đủ 2 trên trở lên
      _page: 1, 
      title_like: newFilter.searchTerm,
    });
  };



  return (
    <div className="App">
      {/* <ClickCount/>
      <Person name='abc' age='10'>My hoobies: Fuck off</Person>
      <Person name='c' age='20' />
      <Person name='Nam' age='130' />
      <ColorBox/> */}
      <Clock />
      {/* <CountNumber /> */}
      {/* <PostFilterForm onSubmit={handleFilterChange}/> */}
      {/* <ToDoForm onSubmit={handleTodoSubmit}/> */}
      {/* <ToDoList todos={todoList} onTodoClick = {handleTodoClick}/>
      <PostList posts={postList}/>
      <Pagination pagination={pagination} onChangePage={handleClickButton}/> */}
      {/* <RandomColor/> */}
    </div>
  );
}

export default App;
