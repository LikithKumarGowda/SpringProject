import React, { Component } from "react";
import StudentService from "../services/StudentService";

class ViewStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      student: {},
    };
  }

  componentDidMount() {
    StudentService.getStudentById(this.state.id).then((res) => {
      this.setState({ student: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">View Student Details</h3>
          <hr />
          <div className="card-body">
            <div className="row">
              <label>
                <h5>Student Name:</h5>{" "}
              </label>
              <div> {this.state.student.studentName}</div>
              <hr />
            </div>
            <div className="row">
              <label>
                <h5> Student Phone Number:</h5>{" "}
              </label>
              <div> {this.state.student.phoneNumber}</div>
              <hr />
            </div>
            <div className="row">
              <label>
                <h5>Student Email ID:</h5>{" "}
              </label>
              <div> {this.state.student.emailId}</div>
              <hr />
            </div>
            <div className="row">
              <label>
                <h5>Student Roll Number:</h5>{" "}
              </label>
              <div> {this.state.student.rollNumber}</div>
              <hr />
            </div>
            <div className="row">
              <label>
                <h5>Student Location:</h5>{" "}
              </label>
              <div> {this.state.student.location}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewStudentComponent;
