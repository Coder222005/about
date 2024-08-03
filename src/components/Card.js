import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Linkedin, Mail, Code, Database, Brain, Globe, GraduationCap ,Github} from 'lucide-react';
import image from './image.jpeg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = ['Frontend Developer', 'ML Engineer'];

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__fadeInUp');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('#projects .card').forEach(card => {
      observer.observe(card);
    });
  
    return () => observer.disconnect();
  }, []);
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
    { title: 'Personal Portfolio', description: 'Written using javaScript with react.js framework and designed using bootstrap ',link:"https://coder222005.github.io/about/" },
    { title: 'Multivariate Linear Regression', description: 'I have applied the mulivariate linear regression using sklearn pipelines',link :"https://colab.research.google.com/drive/1Ff2r5izMyjmacPMmrhbjxWlq1mXrCpwi?usp=sharing"},
    
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
    }
  ];
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Sastra University",
      year: "2022 - 2026",
      description: "Relevant coursework: Data Structures, Algorithms, Web Development, Machine Learning"
    },
    {
      degree: "High School Intermediate",
      institution: "Sri Chaitanya College",
      year: "2020 - 2022",
      description: "IIT Academy "
    }
  ];
  return (
    <div className="portfolio">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top "style={{backgroundColor:"#FF8553" ,borderRadius:"25px 25px 25px 25px",marginTop:"10px",height:"46px",marginLeft:"100px",marginRight:"100px"}} >
        <div className="container one ">
          <a className="navbar-brand" href="#home"style={{ fontFamily:"Roboto Condensed"}}>Dheeraj Reddy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto" style={{fontFamily:"DM Sans"}}>
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

      <section id="home" className="vh-100 d-flex align-items-center" style={{backgroundColor:"#FF8553"}}>
        <div className="container text-center">
          <h1 className="display-1 mb-4 animate__animated animate__fadeInDown" style={{fontFamily:"Roboto Condensed",color:"white"}}>My name is Dheeraj</h1>
          <p className="lead mb-5 animate__animated animate__fadeInUp banner" style={{fontFamily:"DM Sans",color:"white"}}>
            <span className="typewriter">{displayText}</span>
            <span className="cursor"></span>
          </p>
          <a href="https://drive.google.com/file/d/1k2uOudyE50AnG_JeXGBLbTNGLHcr2Nlp/view?usp=sharing" className="btn btn-primary btn-lg animate__animated animate__fadeInUp">Resume</a>
        </div>
      </section>

      <section id="about" className="py-5 bg-white">
        <div className="container ">
          <h2 className="text-center mb-5 " style ={{fontFamily:"Roboto Condensed",borderBottom:"solid black 3px",color:"black"}}>About Me</h2>
          <div className="row">
            <div className="col-md-6 animate__animated animate__fadeInLeft">
              <img src={image} alt="Your Name" className="img-fluid rounded-circle mb-4" />
            </div>
            <div className="col-md-6 animate__animated animate__fadeInRight">
              <p style={{color:"black"}}>Hi, I'm Dheeraj, a third-year Computer Science and Engineering student at SASTRA University. My areas of interest include machine learning and frontend development. I am passionate about leveraging AI to create innovative solutions and building dynamic, user-friendly web applications. With a solid foundation in both theoretical and practical aspects of computer science, I am eager to explore and contribute to cutting-edge technologies in these fields.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="education" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-5"style ={{fontFamily:"Roboto Condensed",borderBottom:"solid black 3px" ,color:"black"}}>My Education</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="timeline">
                {educationData.map((edu, index) => (
                  <div key={index} className="timeline-item mb-5">
                    <div className="timeline-icon text-white rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: "#ff8553" }}>
    <GraduationCap size={24} />
</div>

                    <div className="timeline-content bg-white p-4 rounded shadow" style={{fontFamily:"DM Sans"}}>
                      <h3 className="h5 mb-0">{edu.degree}</h3>
                      <span className="text" style={{opacity:"0.46"}}>{edu.institution} | {edu.year}</span>
                      <p className="mt-2 mb-0">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-5"style ={{fontFamily:"Roboto Condensed",borderBottom:"solid black 3px",color:"black"}}>My Skills</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {skillCategories.map((category, index) => (
              <div key={index} className="col">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div className="mb-4">
                    <span className="d-inline-block p-3 rounded-circle text-white" style={{ backgroundColor: "#ff8553" }}>
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
          <h2 className="text-center mb-5"style ={{fontFamily:"Roboto Condensed",borderBottom:"solid black 3px"}}>My Projects</h2>
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm animate__animated animate__fadeInUp">
                  
                  <div className="card-body">
                    <h5 className="card-title" style={{borderBottom: "solid black 2px"}}>{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.link} className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-5 bg-white">
        <div className="container bg-white">
          <h2 className="text-center mb-5"style ={{fontFamily:"Roboto Condensed",borderBottom:"solid black 3px"}}>Contact Me</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form className="animate__animated animate__fadeInUp contact-form">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{backgroundColor:"FF8553"}}>Send Message</button>
              </form>
            </div>
          </div>
          <div className="mt-5 text-center">
            <a href="https://www.linkedin.com/in/bommireddy-venkata-dheeraj-reddy-0a6752218" className="me-3"><Linkedin size={24} /></a>
            <a href="mailto:bommireddyvenkatadheerajreddy@gmail.com" className ="me-3"><Mail size={24} /></a>
            <a href="https://github.com/Coder222005"className="me-3"><Github size={24}/></a>
          </div>
        </div>
      </section>

      <footer className="text-white text-center py-3" style={{backgroundColor: "#FF8553",fontFamily:"DM Sans"}}>
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

/* Navbar Styles */
.navbar {
  padding: 1rem 0;
}

.navbar-nav .nav-link {
  color: white !important;
  transition: all 0.3s ease;
}

.navbar-nav .nav-link.active {
  color: white !important;
  transform: translateY(-2px);
}

.navbar-nav .nav-link:hover {
  color: black !important;
  transform: translateY(-2px);
}

a.navbar-brand {
  color: white;
  font-family: DM Sans;
}

/* Section Backgrounds */
#home, #about, #skills, #contact, #projects {
  background: white;
  color: black;
}

/* Button Styles */
.btn-primary {
  background: white;
  color: #FF8553;
  border: solid #FF8553 1.4px;
  width: 150px;
  border-radius: 60px;
  transition: all 0.3s ease;
  font-family: "DM Sans";
}

.btn-primary:hover {
  background: #FF8553;
  color: white;
  border: solid white 1.4px;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Card Styles */
.card {
  transition: all 0.3s ease;
  border: none;
  border-radius: 15px;
  overflow: hidden;
  font-family: "DM Sans";
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Skills Cards */
#skills .card {
  background-color: #FFFFFF;
  border: 1px solid #FFE0D1;
  transition: all 0.3s ease;
}

#skills .card:hover {
  box-shadow: 0 10px 20px rgba(255, 133, 83, 0.1);
}

#skills .card-body {
  color: #333333;
}

#skills .rounded-circle {
  background-color: #FF8553;
}

/* Project Cards */
#projects .card {
  background-color: #FFFFFF;
  border: 1px solid #FFE0D1;
}

#projects .card-body {
  color: #333333;
}

#projects .btn-primary {
  background-color: #FF8553;
  border-color: #FF8553;
  color: #FFFFFF;
}

#projects .btn-primary:hover {
  background-color: #FF6B3D;
  border-color: #FF6B3D;
}

/* Contact Form */
.contact-form {
          background-color: #FFF5F0;
          padding: 2rem;
          border-radius: 15px;
        }

 .form-control {
  border-color: #FFFFFF !important;
  color:  #333333 !important;
}

#contact .form-control:focus {
  border-color: #FF8553;
  box-shadow: 0 0 0 0.2rem rgba(255, 133, 83, 0.25);
}

#contact .btn-primary {
  background-color: #FF8553;
  border-color: #FF8553;
  color: #FFFFFF;
}

#contact .btn-primary:hover {
  background-color: #FF6B3D;
  border-color: #FF6B3D;
}

/* Animation Styles */


.animate__fadeInDown {
  animation-name: fadeInDown;
}



.animate__fadeInLeft {
  animation-name: fadeInLeft;
}

.animate__fadeInRight {
  animation-name: fadeInRight;
}

/* Keyframe Animations */
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
  
        .typewriter {
          display: inline-block;
          overflow: hidden;
          border-right: 2px solid white;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: 0.15em;
          animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
        }

        .cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background-color: white;
          margin-left: 2px;
          animation: blink 0.7s infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: white }
        }

        @keyframes blink {
          0%, 100% { opacity: 1 }
          50% { opacity: 0 }
        }
        
      `}</style>
    </div>
  );
};

export default Portfolio;
