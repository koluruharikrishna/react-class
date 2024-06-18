import React from 'react'

export default function Props(props) {
    console.log(props)
  return (
    <div>
      <h1>This is Props Components</h1>
      <p>Name: <b>{props.studentName}</b> RollNo: {props.studentRollNo}</p>
    </div>
  )
}
