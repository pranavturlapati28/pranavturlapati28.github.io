import React from 'react';
import { FaGraduationCap, FaBriefcase, FaProjectDiagram, FaTools } from 'react-icons/fa'; // Icons
import './Home.css'; // Updated styles

const Home = () => {
    return (
        <div className="home-container">
            <header className="hero-section">
                <h2 className="hero-subtitle">Web Developer & Tech Enthusiast</h2>
                <img src="/path/to/your/profile.jpg" alt="Profile" className="profile-pic" />
            </header>

            <section className="education">
                <h2><FaGraduationCap /> EDUCATION</h2>
                <div className="edu-container">
                    <p>
                        University of North Carolina at Chapel Hill - Chapel Hill, NC  
                        <br /> 
                        May 2022 - 2026
                        <br />
                        Computer Science B.S, Statistics B.S 
                        <br />
                        Honors Dean’s List | GPA: 3.9
                    </p>
                </div>
            </section>

            <section className="experience">
                <h2><FaBriefcase /> EXPERIENCE</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>StarHEELs Performance Venture Lab - Elipsys LLC</h3>
                            <h4>Software Engineering Intern</h4>
                            <p>March 2024 - Present</p>
                            <ul>
                                <li>Collaborated with 5 startups to build financial models.</li>
                                <li>Developed a Python-based data pipeline for sports video data.</li>
                                <li>Supported development of 3 innovative sports technologies.</li>
                                <li>Deployed machine learning models on Amazon SageMaker.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>UNC Labs for Applied Technical Sciences - Bai Labs</h3>
                            <h4>Computer Research Assistant</h4>
                            <p>September 2023 - Present</p>
                            <ul>
                                <li>Built data processing software using C++ and VTK.</li>
                                <li>Coauthored a paper in Science Advances.</li>
                                <li>Created 30 GB biometric datasets in MySQL.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>Kiritra Services</h3>
                            <h4>Data Engineering Intern</h4>
                            <p>May 2022 - July 2023</p>
                            <ul>
                                <li>Trained models using Python, PyTorch, and Torchvision.</li>
                                <li>Implemented data classification and transfer learning.</li>
                                <li>Maintained Flask source code with deployed ML models.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>Carolina Analytics & Data Science (CADS)</h3>
                            <h4>Student Volunteer</h4>
                            <p>May 2022 - July 2023</p>
                            <ul>
                                <li>Volunteered at data science hackathons.</li>
                                <li>Created a political dashboard with Tableau and R.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projects">
                <h2><FaProjectDiagram /> PROJECTS</h2>
                <div className="project">
                    <h3>IMC Trading Prosperity Algorithmic Trading Competition</h3>
                    <p>Built a mean reversion bot utilizing machine learning.</p>
                </div>
                
                <div className="project">
                    <h3>Asset Management and Community Banking Innovate for Impact Case Study Competition JP Morgan</h3>
                    <p>Analyzed investment data from multiple sources for efficient bond management.</p>
                </div>
                
                <div className="project">
                    <h3>Predicting Outcomes of NBA Regular Season Games</h3>
                    <p>Developed 16 ML models to predict NBA game statistics with 76% accuracy.</p>
                </div>

                <div className="project">
                    <h3>FDIC Challenge</h3>
                    <p>Conducted analysis on the risk factors of specific banks based on COVID data.</p>
                </div>

                <div className="project">
                    <h3>Predicting Deforestation Using Random Forest Regression</h3>
                    <p>Research predicting deforestation in the Amazon using machine learning techniques.</p>
                </div>
            </section>

            <section className="skills">
                <h2><FaTools /> TECHNICAL SKILLS</h2>
                <h3>Developer Languages:</h3>
                <p>Python, R, Java, PostgreSQL, C++, JavaScript, .NET, HTML, CSS</p>
                
                <h3>Other Platforms/Certifications:</h3>
                <p>Linux/Unix, Git, Tableau, Power BI, MS Excel, JupyterLab, AWS, Bloomberg Terminal</p>
                
                <h3>Technology Frameworks/Libraries:</h3>
                <p>
                    (Python) pandas, numpy, OpenCV, PyTorch, TensorFlow, scikit-learn, PIL, Flask, JIRA Rest API, Django<br />
                    (C) VTK<br />
                    (Java) JavaFX, Maven (XML), JUnit<br />
                    (JavaScript) Three.js, Plotly, Angular, React.js, Node.js, TypeScript
                </p>
                
                <h3>Cloud Technologies:</h3>
                <p>AWS (DynamoDB), Azure (SQLDB, DevOps), Docker, Kubernetes</p>
            </section>
        </div>
    );
};

export default Home;
