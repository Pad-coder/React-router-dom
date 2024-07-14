import React from 'react'

function All() {
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
        {
            id: 6,
            p: "7 Unique Web Development Project Ideas for Beginners",
            img: "https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3.webp",
          },
        {
          id: 7,
    
          p: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
          img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
        },
        {
          id: 8,
          p: "Can A Commerce Student Do Data Science?",
          img: "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-1536x804.png",
        },
        {
          id: 9,
          p: "12 Real-World Data Science Examples: Power Of Data Science",
          img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp",
        },
        {
          id: 10,
          p: "10 Best Data Science Online Courses for Beginners | 2024",
          img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
        },
        {
            id: 11,
      
            p: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
            img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
          },
          {
            id: 12,
            p: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
            img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
          },
          {
            id: 13,
            p: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
            img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
          },
          {
            id: 14,
            p: "What Is Hacking? Types of Hacking & More",
            img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
          },
          {
            id: 15,
            p: "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
            img: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
          },
        
      ];
  return<>
  <div style={{display:'flex', flexWrap:'wrap',margin:'50px', justifyContent:'left'}}>
   {
    data.map((e,i) => {
        return  <div className="card" style={{width: '18rem', margin:'10px'}} key={i}>
        <img src={e.img} className="card-img-top" alt="..."style={{width:"100%", height:'11.3125rem',objectFit:'cover'}}/>
        <div className="card-body">
          <h5 className="card-title">{e.p}</h5>
          <p className="card-text">{}</p>
          
        </div>
      </div>
                })
   }</div>
  </>
}

export default All