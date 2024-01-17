import React, { useState } from 'react';
import studentsData from '../data/studentsData';
import Student from '../components/Student';
//import './Attendance.css';

const Attendance = () => {
  const [attendance, setAttendance] = useState(studentsData);

  const handleToggle = (id) => {
    setAttendance((prevAttendance) =>
      prevAttendance.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  return (
    <div>
      <h2>Attendance List</h2>
      {attendance.map((student) => (
        <Student key={student.id} student={student} onToggle={handleToggle} />
      ))}
    </div>
  );
};

export default Attendance;