import React from 'react'

function DataScience() {
    let data = [
        {
          id: 1,
    
          p: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
          img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
        },
        {
          id: 2,
          p: "Can A Commerce Student Do Data Science?",
          img: "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-1536x804.png",
        },
        {
          id: 3,
          p: "12 Real-World Data Science Examples: Power Of Data Science",
          img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp",
        },
        {
          id: 4,
          p: "10 Best Data Science Online Courses for Beginners | 2024",
          img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
        },
        {
          id: 5,
          p: "Roles and Responsibilities of a Data Scientists",
          img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4-1536x866.png",
        },
      ];
  return <>
  <div style={{display:'flex', margin:'20px', flexWrap:'wrap', justifyContent:'left'}}>
   {
    data.map((e,i) => {
        return  <div className="card" style={{width: '18rem', margin:'10px'}} key={i}>
        <img src={e.img} className="card-img-top" alt="..."style={{width:"100%", height:'11.3125rem',objectFit:'cover'}}/>
        <div className="card-body">
          <h5 className="card-title">{e.p}</h5>
          <p className="card-text">{}</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
                })
   }</div>
  </>
}

export default DataScience