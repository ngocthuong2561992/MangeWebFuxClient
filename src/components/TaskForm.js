import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      sex: -1,
      email: '',
      department: '',
    };
  }

  componentWillMount() {
    //chu y truyen vao props la task
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        sex: this.props.task.sex,
        email: this.props.task.email,
        department: this.props.task.department,
      });
      console.log(this.state);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        sex: nextProps.task.sex,
        email: nextProps.task.email,
        department: nextProps.task.department,
      });
      console.log(this.state);
    } else if (!nextProps.task) {
      console.log('sua-->them');
      this.setState({
        id: "",
        name: "",
        sex: 1,
        email: "",
        department: "",
      });
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  };

  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === 'sex') {
      value = target.value === 0 ? 0 : 1;
    }
    this.setState({
      [name]: value,
    });
  };

  onClear = () => {
    this.setState({
      name: '',
      sex: 1,
      email: '',
      department: '',
    });
  };

  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === 'sex') {
      value = target.value === '1' ? 1 : 0;
    }
    this.setState({
      [name]: value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    //khuv nay hoi kho hieu
    this.props.onSubmit(this.state);
    this.onClear();
    this.onCloseForm();
  };

  render() {
    var { id } = this.state;

    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <div className="panel-title">
            {id !== '' ? 'Update User' : 'Add User'}

            <span
              className="glyphicon glyphicon-remove text-right"
              aria-hidden="true"
              onClick={this.onCloseForm}
            ></span>
          </div>
        </div>
        <div className="pannel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label>Sex :</label>
            <select
              className="form-control"
              name="sex"
              value={this.state.sex}
              onChange={this.onChange}
            >
              <option value={1}>Male</option>
              <option value={0}>Female</option>
              <option value={-1}></option>
            </select>
            <br />

            <div className="form-group">
              <label>Email :</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label>Department :</label>
              <input
                type="text"
                className="form-control"
                name="department"
                value={this.state.department}
                onChange={this.onChange}
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button
                type="submit"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
