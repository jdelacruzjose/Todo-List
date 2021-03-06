import React, { Component } from 'react'
import * as Icon from 'react-bootstrap-icons';

export default class TodoItem extends Component {
  render() {
    const {title, handleDelete, handleEdit} = this.props;
    return (
      <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
        <h6>{title}</h6>
        <div className= 'todo-icon'>
          <span className='mx-2 text-success' onClick={handleEdit}>
            <Icon.Pencil />
          </span>
          <span className='mx-2 text-danger' onClick ={handleDelete}>
            <Icon.Trash />
          </span>

        </div>
      </li>
    )
  }
}
