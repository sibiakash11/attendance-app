import React from 'react';
//import './Student.css';

const Student = ({ student, onToggle }) => {
  return (
    <div className="student">
      <span>{student.name}</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={student.present}
          onChange={() => onToggle(student.id)}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Student;