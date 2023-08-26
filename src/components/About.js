import React from 'react'
// import Navigation from './Navigation';
// import Footer from './Footer'
import "./About.css"
import Typed from 'react-typed'


class About extends React.Component {
  render() {
    return (
      <>
        {/* <Navigation/> */}
        <div className="container-about">
          <div className="img-about">
            <img src="about.png" alt="" />
          </div>
          <hr />
          <div className="img2-about">

            <div>
              <img className="img2-about-1" src="image2.jpeg" alt="" />

            </div>
            <div className="write">
              <ul><br />
                <h1 className='intro'>Introduction</h1><br />
                <div className="intro-sen">



                  <li>Hello, I'm a results-driven React.js developer proficient in crafting seamless user interfaces with a strong command of React, JavaScript, Redux, and Redux Toolkit. With a passion for creating engaging and efficient web applications, I'm dedicated to delivering innovative solutions that enhance user experiences and drive success. </li> <br />

                  <li>My journey in the world of development has equipped me with a deep understanding of React's component-based architecture and its ability to create modular, reusable code. This proficiency extends to JavaScript, where I harness the latest ES6+ features to build performant and maintainable solutions. I'm not just comfortable with Redux; I thrive in it. Managing complex states and ensuring predictability in applications is a challenge I gladly embrace. </li> <br />

                  <li>Beyond technical skills, my collaborative nature shines through. I approach teamwork as an opportunity for growth, valuing open communication and a shared commitment to achieving exceptional results. My attention to detail is unwavering; it fuels my pursuit of perfection in writing clean, efficient, and well-documented code. </li> <br />

                  <li>In essence, I'm not just a React.js developer; I'm a problem solver, a collaborator, and an advocate for user-centered design. I'm excited to bring my expertise to the table and contribute to the creation of innovative digital solutions. </li><br />

                  Thank you for considering my profile. I'm looking forward to the prospect of joining your team and making a positive impact. <br />

                  Best regards, <br /> <br />
                  [Mohd Shadab Khan] <br />
                  [+91 9871840980]
                </div>
              </ul>
            </div>
          </div>
          {/* <h2>Hi, I am a Car!</h2> */}
        </div >
        <hr />
        <div className="edu">
          <h1 className='edu-hd'>My Education</h1>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h1 className='myschooling'>About My Schooling</h1>
                <div><img className='myschool-img' src="img-avatar1.jpg" alt="" /></div>
              </div>
              <div className="flip-card-back">
                <b> <h1>St.Columbus School</h1></b> <br />
                <h4>Dayal Bagh, Faridabad</h4><br />
                <p>2009-2017</p><br />

                <p>My academic journey from 2008 to 2017 was one of continuous growth and achievement. In Class 10, I secured an impressive CGPA of 8, setting a strong foundation for the years ahead. Moving into the realm of Class 11 and 12, I chose the science stream, delving into subjects like Physics, Chemistry, Mathematics, and Computer Science.These years were not just about academic pursuits; they also encapsulated personal growth and a deepening sense of responsibility. The camaraderie shared with classmates, collaborative study sessions, and the joy of solving intricate problems together added an irreplaceable dimension to my overall experience.
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card1">
            <div className="flip-card-inner1">
              <div className="flip-card-front1">

                <h1>About My Graduation</h1>
                <img src="img-avatar2.png" alt="" width="300px" height="420px" />
              </div>
              <div className="flip-card-back1">
                <b><h1>IIMT College Of Engineering</h1> </b> <br />
                <h2>Bachelor's Of Technology</h2>
                <h3>Department Of Computer Science </h3> <br />
                <p>2018-2022</p> <br />
                <p>I have pursued my BTech from IIMT College Of Engineering in CSE department.
                  Embarking on a journey from 2018 to 2022, I delved into the world of Computer Science Engineering at IIMT College. These transformative years shaped my skills, expanded my horizons, and created lasting memories. Guided by dedicated mentors and supported by peers, IIMT College's nurturing environment prepared me for a promising future in the realm of technology. </p>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="container-exp">
          {/* <img className='img-sks' src="img-sks.jpg" alt="" /> */}
          <div className="manage">
            <b><h1 className='my-skills'>My Skills</h1></b>
            <img className="myskills-img" src="myskills.webp" alt="" />
          </div>
          {/* <div className="hed1-1">
            <p className='hed1'>React</p>
            <div className="container-abt1">
              <div className="skills react">90%</div>
            </div>
          </div> */}
          <div className="hed1-2">
            <p className='hed2'>ReactJS</p>
            <div className="container-abt1">
              <div className="skills reactjs">90%</div>
            </div>
          </div>
          <div className="hed1-2">
            <p className='hed2'>JavaScript</p>
            <div className="container-abt1">
              <div className="skills js">75%</div>
            </div>
          </div>
          <div className="hed1-2">
            <p className='hed2'>Redux</p>
            <div className="container-abt1">
              <div className="skills redux">70%</div>
            </div>
          </div>

          <div className="hed1-2">
            <p className='hed2'>Redux Tools</p>
            <div className="container-abt1">
              <div className="skills reduxT">70%</div>
            </div>
          </div>

          <div className="hed1-2">
            <p className='hed2'>HTML</p>
            <div className="container-abt1">
              <div className="skills html">98%</div>
            </div>
          </div>

          <div className="hed1-2">
            <p className='hed2'>CSS</p>
            <div className="container-abt1">
              <div className="skills css">80%</div>
            </div>
          </div>

          <div className="hed1-2">
            <p className='hed2'>NodeJS</p>
            <div className="container-abt1">
              <div className="skills node">65%</div>
            </div>
          </div>

          <div className="hed1-2">
            <p className='hed2'>RESTFUL APIs</p>
            <div className="container-abt1">
              <div className="skills rest">70%</div>
            </div>
          </div>



        </div>
        <hr />
        <div className="container-exp1">
          <div>
            <span className='typed-abt'> {

              <Typed strings={["My Experience Journey!", "My Career Journey!"]} typeSpeed={90} />}</span>
          </div>

          <div className="container-img">
            {/* shadab khan  */}
            <img src="img-exp.jpg" alt="" className="image" />
            <div className="centered">Hover here</div>
            <div className="overlay">
              <div className="text">
                <h1>Suntech Global Info Solutions PVT.LTD</h1><br />
                <h3>Front-End Developer</h3><br />
                <p>03-July-2022 to 05-July-2023</p><br />

                "Greetings! I am a dedicated Front-End Developer with one year of hands-on experience at Suntech Global Info Solutions Pvt. Ltd. My expertise lies in crafting engaging and user-friendly interfaces using HTML, CSS, and JavaScript. I am well-versed in modern web development frameworks such as React, and proficient in utilizing React Hooks and Redux to enhance user experiences. My journey also includes utilizing Node.js for server-side operations. With a passion for creating seamless digital experiences, I am committed to delivering high-quality solutions that align with user needs and business objectives."<br />
                Thankyou, <br /> <br />
                [Mohd Shadab Khan] <br />
                [shadabpp27@gmail.com]
              </div>
            </div>
          </div>

        </div>

        <hr />
        <div className="projects">
          <span className='typed-abt1'> {

            <Typed strings={["Projects", 'My Projects!']} typeSpeed={100} />}
          </span>
          <div>
            <div className="flip-card2">
              <div className="flip-card-inner2">
                <div className="flip-card-front2">
                  <h1>Web Based Integrated HealthCare Management System
                  </h1>
                  <img src="exp-img1.jpg" alt="" width="300px" height="350px" />
                  <br />

                  <h2>Project:1 Team Size: 3
                  </h2>
                </div>
                <div className="flip-card-back2">
                  <b> <h1>Skills:</h1></b> <br />
                  <h2>React, ReactJS, HTML5, CSS3, JavaScript, Firebase, Redux, Redux Tools, React Hooks</h2><br />
                  <b> <h1>Description:</h1></b> <br />
                  <p>"Introducing our cutting-edge Web-Based Integrated Healthcare Management System, developed using a powerful stack of technologies including React, ReactJS, HTML5, CSS3, JavaScript, Firebase, Redux, Redux Tools, and React Hooks. This comprehensive solution seamlessly integrates various aspects of healthcare management, offering an intuitive user interface and advanced features. From streamlined patient information management to real-time updates, our system empowers healthcare providers to deliver efficient and personalized care. With its robust architecture and user-friendly design, our Healthcare Management System represents the future of healthcare administration and patient engagement."
                  </p>
                </div>
              </div>
            </div>
            <div className="flip-card3">
              <div className="flip-card-inner3">
                <div className="flip-card-front3">

                  <h1>Suntech Global Digital Realization</h1>
                  <img src="pr-img-2.jpg" alt="" width="300px" height="390px" />
                  <h2>Project: 2 Team Size: 6</h2>
                </div>
                <div className="flip-card-back3">
                  <b><h1>Live Project</h1> </b> <br />
                  <h2>Skills:</h2><br />
                  <h3>React, ReactJS, HTML5, CSS3, JavaScript, ExpressJs,NodeJs, Redux, Redux Tools, React Hooks</h3> <br />
                  <h1>Description</h1> <br />
                  <p>
                    "In the realm where technology meets creativity, I undertook the role of crafting the frontend of a website that stands as a testament to innovation. Armed with a toolkit encompassing React, ReactJS, HTML5, CSS3, JavaScript, Express.js, Node.js, Redux, Redux Tools, and React Hooks, I embarked on a journey to architect an immersive digital experience. Through skillful implementation of these technologies, I wove together a responsive and dynamic interface that seamlessly connects with users. By synergizing the power of Express.js and Node.js, I ensured both speed and functionality, while Redux and React Hooks contributed to an interactive user journey. The result is a captivating website where aesthetics and technology converge."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </>
    );
  }
}
export default About;
