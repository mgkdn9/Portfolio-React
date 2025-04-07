import React from 'react'
// import { BrowserRouter } from 'react-router-dom'

import css from '../logos/css.png'
import db from '../logos/db.png'
import html from '../logos/html.png'
import javascript from '../logos/javascript.png'
import node from '../logos/node.png'
import postgres from '../logos/postgres.png'
import python from '../logos/python.png'
import react from '../logos/react.png'

export default function Skills(){
  return (
    <div className='skills-container'>
      <h2 className='section-title'>Skills</h2>
      <div className="row"> 
        <div className="col-sm-3">
          <img className="logo" src={javascript} alt=""></img>
          <br></br><br></br>
          <b>JavaScript</b>
        </div>
        <br></br><br></br><br></br>
        <div className="col-sm-3">
          <img className="logo" src={python} alt=""></img>
          <br></br><br></br>
          <b>Python</b>
        </div>
        <div className="col-sm-3">
          <img className="logo" src={postgres} alt=""></img>
          <br></br><br></br>
          <b>PostgreSQL</b>
        </div>
        <br></br><br></br><br></br>
        <div className="col-sm-3">
          <img className="logo" src={css} alt=""></img>
          <br></br><br></br>
          <b>CSS</b>
        </div>
        <div className="col-sm-3">
          <img className="logo" src={react} alt=""></img>
          <br></br><br></br>
          <b>React</b>
        </div><br></br><br></br><br></br>
        <div className="col-sm-3">
          <img className="logo" src={node} alt=""></img>
          <br></br><br></br>
          <b>Node</b>
        </div>
        <div className="col-sm-3">
          <img className="logo" src={html} alt=""></img>
          <br></br><br></br>
          <b>HTML</b>
        </div><br></br><br></br><br></br>
        <div className="col-sm-3">
          <img className="logo" src={db} alt=""></img>
          <br></br><br></br>
          <b>MongoDB</b>
        </div>
    </div>
  </div>
  )
}