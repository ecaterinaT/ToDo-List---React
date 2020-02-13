import React from 'react';

class ToDoItem extends React.Component {

  render() {
    debugger;
    const { item,handleCheck,deleteTodo,editTodo } = this.props;
    return (
      <div>
        {item.name}
        <input type="checkbox"
          onChange={() => handleCheck(item)}
          defaultChecked={item.selected} />
        <button onClick={() => deleteTodo(item.id)}>
          Delete
        </button>
        <button onClick={() => editTodo(item)}>
          Edit
        </button>
      </div>
    )
  }
}

export default ToDoItem;  