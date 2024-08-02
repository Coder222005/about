import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Linkedin, Mail, Code, Database, Brain, Globe, GraduationCap } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    { title: 'Project 1', description: 'A brief description of Project 1' },
    { title: 'Project 2', description: 'A brief description of Project 2' },
    { title: 'Project 3', description: 'A brief description of Project 3' },
  ];
  const skillCategories = [
    {
      icon: <Globe size={32} />,
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"]
    },
    {
      icon: <Code size={32} />,
      title: "Programming Languages",
      skills: ["C++", "Java", "Python"]
    },
    {
      icon: <Database size={32} />,
      title: "Databases",
      skills: ["SQL"]
    },
    {
      icon: <Brain size={32} />,
      title: "AI & ML",
      skills: ["Machine Learning", "AI Enthusiast"]
    },
    {
      icon:<Brain size={32}/>,
      title:"CYBER SECURITY",
      skills:["hi","hello"]
    }
  ];
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Your University Name",
      year: "2020 - 2024",
      description: "Relevant coursework: Data Structures, Algorithms, Web Development, Machine Learning"
    },
    {
      degree: "High School Diploma",
      institution: "Your High School Name",
      year: "2018 - 2020",
      description: "Graduated with honors, participated in national-level coding competitions"
    }
  ];
  return (
    <div className="portfolio">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top "style={{backgroundColor:"#0D6DFD" ,marginTop:"10px",borderRadius:"20px 20px 20px 20px",height:"46px"}} >
        <div className="container one ">
          <a className="navbar-brand" href="#home">Dheeraj Reddy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {['Home', 'About','Education','Skills', 'Projects', 'Contact'].map((item) => (
                <li className="nav-item" key={item}>
                  <a 
                    className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`} 
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="vh-100 d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-1 mb-4 animate__animated animate__fadeInDown">Dheeraj Reddy</h1>
          <p className="lead mb-5 animate__animated animate__fadeInUp banner">Web Developer & Designer</p>
          <a href="http://resume.in" className="btn btn-primary btn-lg animate__animated animate__fadeInUp">Resume</a>
        </div>
      </section>

      <section id="about" className="py-5 bg-black">
        <div className="container ">
          <h2 className="text-center mb-5 " style ={{border:"dotted white 3px",color:"white"}}>About Me</h2>
          <div className="row">
            <div className="col-md-6 animate__animated animate__fadeInLeft">
              <img src="" alt="Your Name" className="img-fluid rounded-circle mb-4" />
            </div>
            <div className="col-md-6 animate__animated animate__fadeInRight">
              <p className=";;">Hi, I'm Dheeraj, a third-year Computer Science and Engineering student at SASTRA University. My areas of interest include machine learning and frontend development. I am passionate about leveraging AI to create innovative solutions and building dynamic, user-friendly web applications. With a solid foundation in both theoretical and practical aspects of computer science, I am eager to explore and contribute to cutting-edge technologies in these fields.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="education" className="py-5 bg-black">
        <div className="container">
          <h2 className="text-center mb-5"style ={{border:"dotted white 3px" ,color:"white"}}>My Education</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="timeline">
                {educationData.map((edu, index) => (
                  <div key={index} className="timeline-item mb-5">
                    <div className="timeline-icon  bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" >
                      <GraduationCap size={24} />
                    </div>
                    <div className="timeline-content bg-white p-4 rounded shadow">
                      <h3 className="h5 mb-0">{edu.degree}</h3>
                      <span className="text-muted">{edu.institution} | {edu.year}</span>
                      <p className="mt-2 mb-0">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="py-5 bg-black">
        <div className="container">
          <h2 className="text-center mb-5"style ={{border:"dotted white 3px"}}>My Skills</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {skillCategories.map((category, index) => (
              <div key={index} className="col">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div className="mb-4">
                      <span className="d-inline-block p-3 rounded-circle text-white bg-primary">
                        {category.icon}
                      </span>
                    </div>
                    <h5 className="card-title">{category.title}</h5>
                    <ul className="list-unstyled">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="mb-1">{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
      </section>
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5"style ={{border:"dotted white 3px"}}>My Projects</h2>
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm animate__animated animate__fadeInUp">
                  <img src={`/api/placeholder/400/300?text=${project.title}`} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5"style ={{border:"dotted white 3px"}}>Contact Me</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form className="animate__animated animate__fadeInUp">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
          <div className="mt-5 text-center">
            <a href="#" className="me-3"><Linkedin size={24} /></a>
            <a href="#"><Mail size={24} /></a>
          </div>
        </div>
      </section>

      <footer className="text-white text-center py-3">
        <p>&copy; 2024 Dheeraj Reddy. All rights reserved.</p>
      </footer>

      <style jsx>{`
        :root {
          --primary-color: #4a00e0;
          --secondary-color: #8e2de2;
          --text-color: #333;
          --bg-color: #f4f4f4;
        }

        body {
          font-family: 'Arial', sans-serif;
          color: var(--text-color);
          background-color: var(--bg-color);
        }

        .navbar {
         
          padding: 1rem 0;
          
        }

        .navbar-nav .nav-link {
          color: black !important;
          transition: all 0.3s ease;
        }

        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link.active {
          color:black!important;
          transform: translateY(-2px);
          
        }
          a.navbar-brand{
          color:black;
          }

        #home {
          background: black;
          color: white;
        }
        }
        #about {
          background: black;
          color:white;
        }

        #skills {
          background: black;
          color:white;
        }
        
      

        #contact ,#projects{
          background: black;
          color:white;
        }

        .btn-primary {
          background: #0D6DFD;
          border: none;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .card {
          transition: all 0.3s ease;
          border: none;
          border-radius: 15px;
          overflow: hidden;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        footer {
          background: #0D6DFD;
        }

        .animate__animated {
          animation-duration: 1s;
          animation-fill-mode: both;
        }
        
        .animate__fadeInDown {
          animation-name: fadeInDown;
        }
        
        .animate__fadeInUp {
          animation-name: fadeInUp;
        }
        
        .animate__fadeInLeft {
          animation-name: fadeInLeft;
        }
        
        .animate__fadeInRight {
          animation-name: fadeInRight;
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translate3d(-100%, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translate3d(100%, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;