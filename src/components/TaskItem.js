import React, { Component } from 'react';

class TaskItem extends Component {
  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  };

  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  };
  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}.</td>
        <td> {task.name}</td>
        <td>
          <span
            className="{task.sex===1 ? 
				   'label label-danger' : 'label label-scucess'}"
            //    onClick={this.onUpdateStatus}
          >
            {task.sex === 1 ? 'Male' : 'Female'}
          </span>
        </td>
        <td> {task.email}</td>
        <td> {task.department}</td>
        <td>
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.onUpdate}
          >
            Sua
          </button>

          <button
            type="button"
            onClick={this.onDelete}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
