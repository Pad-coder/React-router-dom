import React from 'react'
import { Link } from 'react-router-dom'

function Career() {
    let data =[
        {
          title:"Software developer",
          p:"HTML, JS, CSS and PHP code should be in separate files none of the code must co-exist in the same file. Use jQuery to simplify dom manipulations.Only use Jquery AJAX for interacting with the backend (strictly no usage of form submission). CSS can be used but the form must be designed in bootstrap in order to maintain page responsiveness. Use MySql for storing the registered data and MongoDB for Storing the details of the user profiles. In MySQL always use Prepared Statements, with no usage of simple SQL statements. The login session should be maintained only using browser localstorage (Do not use PHP Session). Use Redis to store the session information in the backend. Don't use more than two fonts and any icons or images should be in SVG format. Host it on Heroku or AWS."
        },
        {
            title:"Full Stack Developer",
            p:"A full-stack software developer, or full-stack engineer, is a developer or engineer who can build both the front end and back end of a website or application. They need to be proficient in both front-end and back-end languages and understand various database management systems (DBMS). Full-stack developers may also work on database design, user interface design, and development"
        },
    {
        title:"Software Testing",
        p:"Software testing is the process of evaluating and verifying that a software product or application does what it's supposed to do. The benefits of good testing include preventing bugs and improving performance. Verify and validate application quality to ensure it meets user requirements."
    }
    ]
  return<>
   <div style={{display:'flex',flexDirection:'column', margin:'20px', flexWrap:'wrap', justifyContent:'left'}}>
   {
    data.map((e,i) => {
        return  <div className="card" style={{width: '40rem', margin:'10px', height:'300px'}} key={i}>
       <div className="card-body">
       <Link to='/' style={{textDecoration:'none', color:'inherit'}}><h2 className="card-title" style={{marginBottom:'20px', fontFamily:'cursive'}}>{e.title}</h2>
       <p className="card-text" style={{fontFamily: 'Montserrat sans-serif', fontOpticalSizing: 'auto',fontWeight: 'weight', fontStyle: 'normal'}}>{e.p}</p></Link>
       </div>
      </div>
                })
   }</div>
  </>
}


export default Career