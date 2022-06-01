package com.springboot.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "students")
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "student_name")
	private String studentName;
	
	@Column(name = "phone_number")
	private long phoneNumber;
	
	@Column(name = "email_id")
	private String emailId;
	
	
	@Column(name = "roll_number")
	private String rollNumber;
	
	@Column(name = "location")
	private String location;
	
	public Student() {
		
	}
	public Student(String studentName, long phoneNumber, String emailId, String rollNumber, String location) {
		super();
		this.studentName = studentName;
		this.phoneNumber = phoneNumber;
		this.emailId = emailId;
		this.rollNumber = rollNumber;
		this.location = location;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public long getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getRollNumber() {
		return rollNumber;
	}
	public void setRollNumber(String rollNumber) {
		this.rollNumber = rollNumber;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
	
}
