import React, { useState } from 'react';
import './App.css';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
  
    // Hide all sections except the one clicked
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.style.display = 'block'; // Show the clicked section
      } else {
        section.style.display = 'none'; // Hide other sections
      }
    });
  
    // Scroll to the clicked section
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };
  
  

  return (
    <div className="App">
      {/* Header Section */}
     <header className="header">
        <div className="logo-container">
        <h1 className="title">JobRinger</h1>
        <p className="subtitle">India's Job Portal</p>
        </div>
        <div className="hamburger-menu" onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
          <ul>
          <li><a href="#jobs" onClick={(e) => handleNavClick(e, 'jobs')}>Jobs</a></li>
          <li><a href="#employers" onClick={(e) => handleNavClick(e, 'employers')}>Active Employers</a></li>
          <li><a href="#blogs" onClick={(e) => handleNavClick(e, 'blogs')}>Job Blogs</a></li>
          <li><a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a></li>
          </ul>
          <ul className="login-links">
            <li><a href="#jobseeker-login" className="btn-login" onClick={(e) => handleNavClick(e, 'jobseeker-login')}>Jobseeker Login</a></li>
            <li><a href="#employer-login" className="btn-employer" onClick={(e) => handleNavClick(e, 'employer-login')}>Employer Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Search Section */}
        <div className="search-section">
          <h1>Search Job</h1>
          <input type="text" placeholder="Type keyword..." className="search-input" />
        </div>

        {/* Jobs Section */}
        <section id="jobs" className="jobs-section">
          <h2>Jobs</h2>
          <div className="job-card">
            <h3>Software Developer</h3>
            <p>Location: Pune</p>
          </div>
          <div className="job-card">
            <h3>Data Analyst</h3>
            <p>Location: Mumbai</p>
          </div>
        </section>

        {/* Active Employers Section */}
        <section id="employers" className="employers-section">
          <h2>Active Employers</h2>
          <div className="employer-card">
            <img src="/logo 1.jpg" alt="Employer 1" />
            <p>Johnn Doe </p>
          </div>
          <div className="employer-card">
            <img src="/logo2.jpg" alt="Employer 2" />
            <p>Russuo</p>
          </div>
          <div className="employer-card">
            <img src="/logo3.jpg" alt="Employer 3" />
            <p>Rahul</p>
          </div>
          <div className="employer-card">
            <img src="/logo4.jpg" alt="Employer 4" />
            <p>Jess</p>
          </div>
        </section>

        {/* Job Blogs Section */}
        <section id="blogs" className="blogs-section">
          <h2>Job Blogs</h2>
          <div className="blog-card">
            <h3>How to Ace Your Interview</h3>
            <p>Learn the tips and tricks for a successful job interview.</p>
          </div>        
          <div className="blog-card">
            <h3>Top IT Skills in Demand</h3>
            <p>Discover the most sought-after skills in the tech industry.</p>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pricing-section">
          <h2>Pricing</h2>
          <div className="pricing-card">
            <h3>Basic Plan</h3>
            <p>Price: $19.99/month</p>
          </div>
          <div className="pricing-card">
            <h3>Premium Plan</h3>
            <p>Price: $49.99/month</p>
          </div>
        </section>

        {/* Jobseeker Login Section */}
        <section id="jobseeker-login" className="login-section">
          <h2>Jobseeker Login</h2>
          <form>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" />
            <button type="submit">Login</button>
          </form>
        </section>

        {/* Employer Login Section */}
        <section id="employer-login" className="login-section">
          <h2>Employer Login</h2>
          <form>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" />
            <button type="submit">Login</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 jobRinger. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
