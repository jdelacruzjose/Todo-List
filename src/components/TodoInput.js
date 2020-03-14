import React, { Component } from 'react'
import * as Icon from 'react-bootstrap-icons';

export default class TodoInput extends Component {
  render() {
    const {item, handleChange, handleSubmit, editItem} = this.props

    return (
      <div className ='card card-body my-3'>
        <form onSubmit ={handleSubmit}>
          <div className ='input-group'>
            <div className ='input-group-prepend'>
              <div className='input-group-text bg-primary text-white'>
                <Icon.DocumentText />
              </div>
              
            </div>
            <input 
              type= 'text' 
              className= 'form-control' 
              placeholder= 'Add A Todo Item' 
              value= {item}
              onChange= {handleChange}
              /> 
          </div>
          <button type= 'submit' 
          className={
            editItem
            ? 'btn btn-block btn-success'
            : 'btn btn-block btn-primary'
          }>
          {editItem ? 'Edit Item': 'Add Item'}
          </button>
        </form>
      </div>
    )
  }
}
