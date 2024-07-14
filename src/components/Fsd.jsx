import React from "react";

function Fsd() {
  let data = [
    {
      id: 1,

      p: "Best Full-Stack Development Project Ideas in 2024",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
    },
    {
      id: 2,
      p: "10 Best Database Management Systems For Software Developers",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png",
    },
    {
      id: 3,
      p: "How Long Would It Take to Be a Full Stack Developer?",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
    },
    {
      id: 4,
      p: "How does Apache work? A detailed introduction to Apache",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png",
    },
    {
      id: 5,
      p: "7 Unique Web Development Project Ideas for Beginners",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3.webp",
    },
  ];
  return (
    <>
      <div style={{ display: "flex",flexWrap:'wrap',margin:'50px', justifyContent:'left'}}>
        {data.map((e, i) => {
          return (
            <div
              className="card"
              style={{ width: "18rem", margin: "10px" }}
              key={i}
            >
              <img
                src={e.img}
                className="card-img-top"
                alt="..."
                style={{
                  width: "100%",
                  height: "11.3125rem",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{e.p}</h5>
                <p className="card-text">{}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Fsd;
