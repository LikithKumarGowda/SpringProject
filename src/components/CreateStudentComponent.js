import React, { Component } from "react";
import StudentService from "../services/StudentService";
import swal from "sweetalert";

class CreateStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
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
    this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
  }

  // step 3

  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
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
  }
  saveOrUpdateStudent = (e) => {
    e.preventDefault();
    let student = {
      studentName: this.state.studentName,
      phoneNumber: this.state.phoneNumber,
      emailId: this.state.emailId,
      rollNumber: this.state.rollNumber,
      location: this.state.location,
    };
    //console.log("student => " + JSON.stringify(student));

    // step 5
    if (this.state.id === "_add") {
      StudentService.createStudent(student)
        .then((res) => {
          this.sleep(3000).then((r) => {
            // do something

            swal({
              title: "Student Added Successfully",
              text: res.data.message,
              icon: "success",
              button: "Done!",
            });
            this.props.history.push("/students");
          });
        })
        .catch((error) => {
          console.log("Error adding data, Please check the data entry", error);
          this.sleep(500).then((r) => {
            swal({
              title: "Error Adding Data",
              text: "Error",
              icon: "error",
              button: "Done!",
            });
          });
        });
    } else {
      StudentService.updateStudent(student, this.state.id)
        .then((res) => {
          this.sleep(3000).then((r) => {
            swal({
              title: "Updated Successfully",
              text: res.data.message,
              icon: "success",
              button: "Done!",
            });
            this.props.history.push("/students");
          });
        })
        .catch((error) => {
          console.log(
            "Error updating data, Please check the data entry",
            error
          );
          this.sleep(500).then((r) => {
            swal({
              title: "Error Updating Data",
              text: "Error",
              icon: "error",
              button: "Done!",
            });
          });
        });
    }
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

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Student</h3>;
    } else {
      return <h3 className="text-center">Update Student</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>
                      <h5>Name:</h5>{" "}
                    </label>
                    <input
                      placeholder="Name"
                      name="studentName"
                      className="form-control"
                      value={this.state.studentName}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <h5>Phone Number:</h5>{" "}
                    </label>
                    <input
                      placeholder=" Phone Number"
                      name="phoneNumber"
                      className="form-control"
                      value={this.state.phoneNumber}
                      onChange={this.changePhoneNumberHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <h5>Email Id:</h5>{" "}
                    </label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <h5>Roll Number:</h5>{" "}
                    </label>
                    <input
                      placeholder="Roll Number"
                      name="rollNumber"
                      className="form-control"
                      value={this.state.rollNumber}
                      onChange={this.changeRollNumberHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <h5>Location:</h5>{" "}
                    </label>
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
                    onClick={this.saveOrUpdateStudent}
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

export default CreateStudentComponent;
