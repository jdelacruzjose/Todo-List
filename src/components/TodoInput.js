import React, { Component } from 'react'
import * as Icon from 'react-bootstrap-icons';

export default class TodoInput extends Component {
  render() {
    return (
      <div className ='card card-body my-3'>
        <form>
          <div className ='input-group'>
            <div className ='input-group-prepend'>
              <div className='input-group-text bg-primary text-white'>
                <Icon.DocumentText />
              </div>
            </div>
            <input 
              type= 'text' 
              className= 'form-control' 
              placeholder= 'Add A Todo Item' />
          </div>
          <button type= 'submit' className='btn btn-block btn-primary'>
            Add Item
          </button>
        </form>
      </div>
    )
  }
}
