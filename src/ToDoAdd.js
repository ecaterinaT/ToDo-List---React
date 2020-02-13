import React from 'react';
import ToDoItem from './ToDoItem';
import axios from 'axios';
class ToDoAdd extends React.Component {

  constructor () {
    super();
    this.state = {
      name: '',
      list: []
    };
  }

  editID = null;

  guid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  componentDidMount(){
    this.getData();
  }
  getData(){
    debugger
    axios({
      method: 'get',
      url: 'http://localhost:3002/todo',
      
    }).then((response) => {
      console.log(response);
      this.setState({
        list: [...response.data],
        name: ''
      });
    }, (error) => {
      console.log(error);
    });
  }
  saveTodo = (event) => {
    event.preventDefault();
    debugger;
    if (this.editID) {
      //const editIndex = this.state.list.findIndex(el => el.id === this.editID);
      // this.state.list[editIndex].name = this.state.name;
      this.editID.name = this.state.name;
      this.setState({
        list: [...this.state.list],
        name: ''
      });
      axios({
        method: 'patch',
        url: 'http://localhost:3002/todo',
        data:this.editID
      }).then((response) => {
        console.log(response);
        this.editID = null;
      }, (error) => {
        console.log(error);
        this.editID = null;
      });
      
      return;
    }
    const newTodo = {
      name: this.state.name,
      id: this.guid()
    }
    const items = this.state.list.concat(newTodo);
    this.setState({
      list: items,
      name: ''
    })

    //todoActions.insert(newTodo);

    axios({
      method: 'post',
      url: 'http://localhost:3002/todo',
      data: newTodo
    });
    localStorage.setItem('xxx', JSON.stringify(this.state));
  }

  editTodo = (item) => {
    this.setState({
      name: item.name
    });
    this.editID = item;
    // debugger;
    // const items = this.state.list.filter(el => el.id !== id);
    // this.setState({
    //   list: items
    // })
    // localStorage.setItem('xxx', JSON.stringify(this.state));
  }

  deleteTodo = (id) => {
    debugger;
    const items = this.state.list.filter(el => el.id !== id);
    this.setState({
      list: items
    })
    axios({
      method: 'delete',
      url: 'http://localhost:3002/todo',
      data: {
        id
      }
    }).then((response) => {
      console.log(response);
      this.editID = null;
    }, (error) => {
      console.log(error);
      this.editID = null;
    });
  }

  onChange = (event) => {
    this.setState({ name: event.target.value });
  }
  handleCheck = (item) => {
    item.selected = !item.selected;
  }
  deletedSelected = () => {
    const items = this.state.list.filter(el => !el.selected);
    this.setState({
      list: items
    })
  }

  render() {

    return (
      <div>
        <form onSubmit={this.saveTodo}>
          <input type="text"
            value={this.state.name}
            onChange={this.onChange} >
          </input>
          <button className="btn" onClick={this.saveTodo}>
            SAVE
          </button>
        </form>

        <ul>
          {this.state.list.map((item) => {
            return <li key={item.name}>
              <ToDoItem
                item={item}
                handleCheck={this.handleCheck}
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
              ></ToDoItem>
            </li>;
          })}
        </ul>
        <button className="btn" onClick={() => this.deletedSelected()}>
          Delete selected
              </button>

      </div>);
  }
}

export default ToDoAdd;  