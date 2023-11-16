import React from "react";
import "./Home.css";

import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import logo from "../images/logo.png";

const Home = () => {
  return (
    <>
      <div className="hero">
        <h1>Real-world skills to land your dream job or internship</h1>
        <p>
          Build the real-world skills you need to stand out to employers hiring
          for entry-level roles with Chegg Skills
        </p>
        <a href="/"><button className="btn">Get started</button></a>
      </div>

      <div className="imgContainer">
        <img className="img1" src={img1} alt="img1" />
        <img className="img2" src={img2} alt="img2" />
      </div>

      <div className="features">
        <ul className="cards">
          <li>
            <img src="https://www.internships.com/wp-content/themes/IDC-theme/assets/skills/data.svg" alt="chegg"/>
            <div className="h-title">Real-world examples</div>
            <div className="h-copy">
              Learn practice skills with interactive modules and examples from
              real college grads
            </div>
          </li>
          <li>
            <img src="https://www.internships.com/wp-content/themes/IDC-theme/assets/skills/clock.svg" alt="chegg"/>
            <div className="h-title">Only 1 hour/week</div>
            <div className="h-copy">
              Between classes or study breaks, add new skills at your own pace
              and on your own time
            </div>
          </li>
          <li>
            <img src="https://www.internships.com/wp-content/themes/IDC-theme/assets/skills/certificate.svg" alt="chegg"/>
            <div className="h-title">Get certified</div>
            <div className="h-copy">
              Stand out with a top certified skill employers seek
            </div>
          </li>
        </ul>
      </div>

      <div className="courses">
        <h2>
          Select a career path below to access exclusive internships and gain
          real-world skills
        </h2>
        <div className="course-cards">
          <a href="/" className="course-card">
            <div>
              <div>
                <img src="https://outcomesidc.wpenginepowered.com/wp-content/uploads/2019/09/business_systems_analyst_profile_image.jpg" alt="chegg"/>
              </div>
              <div className="copy">
                <h3>Data & Analytics</h3>
                <div>
                  <span className="salary">$64,781</span>
                  <span>/Median starting salary</span>
                </div>
                <div className="top-title">Top skills to learn:</div>
                <div className="frow skills">
                  <div className="skill">Excel</div>
                  <div className="skill">Python</div>
                  <div className="skill">SQL</div>
                  <div className="skill">Tableau</div>
                </div>
              </div>
            </div>
          </a>
          <a href="/" className="course-card">
            <div>
              <div>
                <img src="https://outcomesidc.wpenginepowered.com/wp-content/uploads/2019/09/3d_animator_profile_image.jpg" alt="chegg"/>
              </div>
              <div className="copy">
                <h3>Design</h3>
                <div>
                  <span className="salary">$81,677</span>
                  <span>/Median starting salary</span>
                </div>
                <div className="top-title">Top skills to learn:</div>
                <div className="frow skills">
                  <div className="skill">Adobe Photoshop</div>
                  <div className="skill">Figma</div>
                </div>
              </div>
            </div>
          </a>
          <a href="/" className="course-card">
            <div>
              <div>
                <img src="https://outcomesidc.wpenginepowered.com/wp-content/uploads/2019/09/systems_analyst_profile_image.jpg" alt="chegg"/>
              </div>
              <div className="copy">
                <h3>Software Engineering</h3>
                <div>
                  <span className="salary">$98,454</span>
                  <span>/Median starting salary</span>
                </div>
                <div className="top-title">Top skills to learn:</div>
                <div className="frow skills">
                  <div className="skill">Excel</div>
                  <div className="skill">Python</div>
                  <div className="skill">SQL</div>
                  <div className="skill">Tableau</div>
                </div>
              </div>
            </div>
          </a>
          <a href="/" className="course-card">
            <div>
              <div>
                <img src="https://outcomesidc.wpenginepowered.com/wp-content/uploads/2019/09/project_manager_profile_image.jpg" alt="chegg"/>
              </div>
              <div className="copy">
                <h3>Marketing</h3>
                <div>
                  <span className="salary">$60,133</span>
                  <span>/Median starting salary</span>
                </div>
                <div className="top-title">Top skills to learn:</div>
                <div className="frow skills">
                  <div className="skill">Excel</div>
                  <div className="skill">Python</div>
                  <div className="skill">SQL</div>
                  <div className="skill">Tableau</div>
                </div>
              </div>
            </div>
          </a>
          <a href="/" className="course-card">
            <div>
              <div>
                <img src="https://outcomesidc.wpenginepowered.com/wp-content/uploads/2019/09/financial_analyst_resume_cover_letter.jpg" alt="chegg"/>
              </div>
              <div className="copy">
                <h3>Finance &amp; Accounting</h3>
                <div>
                  <span className="salary">$67,714</span>
                  <span>/Median starting salary</span>
                </div>
                <div className="top-title">Top skills to learn:</div>
                <div className="frow skills">
                  <div className="skill">Excel</div>
                  <div className="skill">Python</div>
                  <div className="skill">SQL</div>
                  <div className="skill">Tableau</div>
                </div>
              </div>
            </div>
          </a>
          <a href="/" className="course-card">
            <div>
              <div>
                <img src="https://outcomesidc.wpenginepowered.com/wp-content/uploads/2019/09/SoftawareEngineer_Profile_image.jpg" alt="chegg"/>
              </div>
              <div className="copy">
                <h3>IT & Cybersecurity</h3>
                <div>
                  <span className="salary">$79,104</span>
                  <span>/Median starting salary</span>
                </div>
                <div className="top-title">Top skills to learn:</div>
                <div className="frow skills">
                  <div className="skill">Excel</div>
                  <div className="skill">Python</div>
                  <div className="skill">SQL</div>
                  <div className="skill">Tableau</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="employers-container">
        <h2>
          Students with these skills are getting hired by top employers like
        </h2>
        <ul class="employers">
          <li class="employer">
            <img src="https://www.internships.com/wp-content/themes/IDC-theme/assets/typeform/employers/meta.png" alt="chegg"/>
          </li>
          <li class="employer">
            <img src="https://www.internships.com/wp-content/themes/IDC-theme/assets/typeform/employers/pwc.png" alt="chegg"/>
          </li>
          <li class="employer">
            <img src="https://www.internships.com/wp-content/themes/IDC-theme/assets/typeform/employers/salesforce.png" alt="chegg"/>
          </li>
          <li class="employer">
            <img src="https://www.internships.com/wp-content/themes/IDC-theme/assets/typeform/employers/spotify.png" alt="chegg"/>
          </li>
          <li class="employer">
            <img src="https://www.internships.com/wp-content/themes/IDC-theme/assets/typeform/employers/google.png" alt="chegg"/>
          </li>
          <li class="employer">
            <img src="https://www.internships.com/wp-content/themes/IDC-theme/assets/typeform/employers/cisco.png" alt="chegg"/>
          </li>
        </ul>
      </div>

      <div className="featured-skills">
        <h2>Featured skill programs</h2>
        <div class="f-skills">
          <div class="fcol box">
            <h3>Excel for Data & Analytics</h3>
            <div class="copy">
              Learn how data is analyzed and visualized with Microsoft Excel,
              and master key Excel skills like look-up functions, pivot tables,
              and macro formulas.&nbsp;
            </div>
            <a class="btn" href="/">
              Get started
            </a>
          </div>
          <div class="fcol box">
            <h3>Python for Software Engineering</h3>
            <div class="copy">
              Master the ins and outs of Python, from data analysis and
              visualization, to programming your own application.
            </div>
            <a class="btn" href="/">
              Get started
            </a>
          </div>
          <div class="fcol box">
            <h3>Social Media Marketing</h3>
            <div class="copy">
              From Twitter to TikTok to LinkedIn, establishing a presence on
              social media is key to a winning marketing strategy. Sharpen your
              skills across social media platforms with this introductory skill
              program.&nbsp;&nbsp;
            </div>
            <a class="btn" href="/">
              Get started
            </a>
          </div>
        </div>
      </div>

      <div class="testimonials">
        <h2>Testimonials</h2>
        <div class="reviews">
          <div class="fcol box">
            <div class="stars"></div>
            <div class="copy">
              “Learning how Excel is used for projects big and small at real
              companies helped me gain a better understanding of what's going to
              be expected of me when I get my first job.”
            </div>
            <div class="frow student">
              <div
                class="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://tse1.mm.bing.net/th?id=OIP.25iSkbJTm4F-Rq0g1JR8NgHaHa&pid=Api&P=0&h=180')",
                }}
              ></div>
              <div class="fcol">
                <div class="name">Lauren K.</div>
                <p>Rutgers University '24</p>
              </div>
            </div>
          </div>
          <div class="fcol box">
            <div class="stars"></div>
            <div class="copy">
              “Learning more about my dream job while learning a new skill was
              so helpful. I loved that each module was only an hour because I
              could find time to squeeze it into my schedule.”
            </div>
            <div class="frow student">
              <div
                class="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://tse1.mm.bing.net/th?id=OIP.25iSkbJTm4F-Rq0g1JR8NgHaHa&pid=Api&P=0&h=180')",
                }}
              ></div>
              <div class="fcol">
                <div class="name">Stephanie C.</div>
                <p>NC State University '24</p>
              </div>
            </div>
          </div>
          <div class="fcol box">
            <div class="stars"></div>
            <div class="copy">
              “I've learned two new skills this month and have felt so much more
              confident on interview calls because of these courses. I've heard
              back from most of the jobs I've submitted my resume to.”
            </div>
            <div class="frow student">
              <div
                class="thumbnail"
                style={{
                  backgroundImage:
                    "url('https://tse1.mm.bing.net/th?id=OIP.25iSkbJTm4F-Rq0g1JR8NgHaHa&pid=Api&P=0&h=180')",
                }}
              ></div>
              <div class="fcol">
                <div class="name">Blake J.</div>
                <p>University of Michigan '25</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}

      <div class="chegg-footer">
        <nav class="row">
          <div class="col-3">
            <h4>Your Next Internship</h4>
            <div>
              <p>Create Your Profile</p>
              <p>Browse Internships</p>
              <p>Resource Center</p>
              <p>Discover Your Options</p>
              <p>Get the Job</p>
            </div>
          </div>

          <div class="col-3">
            <h4>Resume</h4>
            <div>
              <p>Resume 101</p>
              <p>Resume Samples</p>
            </div>

            <h4>Cover Letter</h4>
            <div>
              <p>Cover Letter 101</p>
              <p>Cover Letter Samples</p>
            </div>

            <h4>Effective Interviewing</h4>
            <div>
              <p>Interview Tips</p>
              <p>Internship Interview Questions</p>
              <p>Interview Follow-Up</p>
            </div>
          </div>

          <div class="col-3">
            <h4>Employers</h4>
            <div>
              <p>Post an Internship or Job (for Free)</p>
              <p>Employer Resources</p>
              <p>Setting Up an Internship Program</p>
              <p>Help Center</p>
            </div>
          </div>

          <div class="col-3">
            <h4>Legal</h4>
            <div>
              <p>Terms (Updated)</p>
              <p>Privacy Policy</p>
              <p>Intellectual Property Rights</p>
              <p>DO NOT SELL MY INFO</p>
              <p>Cookie Notice</p>
            </div>

            <h4>Customer Service</h4>
            <div>
              <p>Contact Us</p>
              <p>Trust and Safety Center</p>
              <p>About</p>
            </div>
          </div>
        </nav>
      </div>

      <div className="disclaimer">
        <img src={logo} alt="Chegg Internships" />
        <p>Chegg&copy; Internships is a service provided by Chegg, Inc. &copy; 2023
        Chegg, Inc. All Rights Reserved</p>
      </div>
    </>
  );
};

export default Home;
