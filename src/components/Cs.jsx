import React from 'react'

function CyberSecurity() {
    let data = [
        {
          id: 1,
          p: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
          img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
        },
        {
          id: 2,
          p: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
          img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
        },
        {
          id: 3,
          p: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
          img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
        },
        {
          id: 4,
          p: "What Is Hacking? Types of Hacking & More",
          img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
        },
        {
          id: 5,
          p: "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
          img: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
        },
      ];
  return<>
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

export default CyberSecurity