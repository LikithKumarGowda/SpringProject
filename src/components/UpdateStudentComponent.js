import React, { Component } from "react";
import StudentService from "../services/StudentService";

class UpdateStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      studentName: "",
      phoneNumber: "",
      emailId: "",
      rollNumber: "",
      location: "",
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeRollNumberHandler = this.changeRollNumberHandler.bind(this);
    this.changeLocationHandler = this.changeLocationHandler.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
  }

  componentDidMount() {
    StudentService.getStudentById(this.state.id).then((res) => {
      let student = res.data;
      this.setState({
        studentName: student.studentName,
        phoneNumber: student.phoneNumber,
        emailId: student.emailId,
        rollNumber: student.rollNumber,
        location: student.location,
      });
    });
  }

  updateStudent = (e) => {
    e.preventDefault();
    let employee = {
      studentName: this.state.studentName,
      phoneNumber: this.state.phoneNumber,
      emailId: this.state.emailId,
      rollNumber: this.state.rollNumber,
      location: this.state.location,
    };
    console.log("student => " + JSON.stringify(student));
    console.log("id => " + JSON.stringify(this.state.id));
    StudentService.updateStudent(student, this.state.id).then((res) => {
      this.props.history.push("/students");
    });
  };

  changeNameHandler = (event) => {
    this.setState({ studentName: event.target.value });
  };

  changePhoneNumberHandler = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  changeRollNumberHandler = (event) => {
    this.setState({ rollNumber: event.target.value });
  };

  changeLocationHandler = (event) => {
    this.setState({ location: event.target.value });
  };

  cancel() {
    this.props.history.push("/students");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Student</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Name: </label>
                    <input
                      placeholder="Name"
                      name="studentName"
                      className="form-control"
                      value={this.state.studentName}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Phone Number: </label>
                    <input
                      placeholder=" Phone Number"
                      name="phoneNumber"
                      className="form-control"
                      value={this.state.phoneNumber}
                      onChange={this.changePhoneNumberHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Email Id: </label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Roll Number: </label>
                    <input
                      placeholder="Roll Number"
                      name="rollNumber"
                      className="form-control"
                      value={this.state.rollNumber}
                      onChange={this.changeRollNumberHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Location: </label>
                    <input
                      placeholder="Location"
                      name="location"
                      className="form-control"
                      value={this.state.location}
                      onChange={this.changeLocationHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.updateStudent}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateStudentComponent;
