import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterSex: 0,
      filterEmail: '',
      filterDepartment: '',
    };
  }

  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterSex' ? value : this.state.filterSex,
      name === 'filterEmail' ? value : this.state.filterEmail,
      name === 'filterDepartment' ? value : this.state.filterDepartment,
    );
    this.setState({
      [name]: value,
    });
  };

  render() {
    var { tasks } = this.props;
    var { filterName, filterSex, filterEmail, filterDepartment } = this.state;
    var emlTask = tasks.map((task, index) => {
      return (
        <TaskItem
          key={task.id}
          index={index}
          task={task}
          onDelete={this.props.onDelete}
          onUpdate={this.props.onUpdate}
        />
      );
    });

    return (
      <table className="table table-hover  table-bordered table-striped sortable">
        <thead>
          <tr>
            <th>STT.</th>
            <th>Name</th>
            <th>Sex</th>
            <th>Email</th>
            <th>Department</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control"
                name="filterName"
                onChange={this.onChange}
                value={filterName}
              />
            </td>
            <td>
              <select
                className="form-control"
                name="filterSex"
                onChange={this.onChange}
                value={filterSex}
              >
                <option value={-1}>All</option>
                <option value={0}>Female</option>
                <option value={1}>Male</option>
              </select>
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                name="filterEmail"
                onChange={this.onChange}
                value={filterEmail}
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                name="filterDepartment"
                onChange={this.onChange}
                value={filterDepartment}
              />
            </td>
            <td></td>
          </tr>

          {emlTask}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
