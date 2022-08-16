import React from "react";
import "./Nav.css";

function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger p-0">

      <div className="navbar-header">
            <button
              className="navbar-toggler navbtn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=".navbar2 #navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                {" "}
                <img id="downnav" src={require("../../Images/down.png")} />
              </span>
            </button>
          </div>
          <div className="container-fluid mainnav ">
            <div className="navbar2" style={{"background":"#ff9d1f;", "height":"4rem"}}>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/agenda">
                      Agenda
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/aboutus">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/Corevalues">
                      Core Values
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/mission">
                      Mission
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/vision">
                      Vision
                    </a>
                  </li>
                  
                  <li className="nav-item dropdown">
                     <div className="dropdown">
                      <li className="dropbtn2">Project</li>
                      <div className="dropdown-content">
                        <a href="/pro1">1. Art,Literature,Culture & Religion</a>
                        <a href="/pro2">2. Blood Donation</a>
                        <a href="/pro3">3. Drug De-Addiction</a>
                        <a href="/pro4">4. Environment Armour </a>
                        <a href="/pro5">5. Gender Justice</a>
                        <a href="/pro6">6. Gracious Justice</a>
                        <a href="/pro7">7. Human Rights</a>
                        <a href="/pro8">8. Old Age,Orphanage & Blind Home</a>
                        <a href="/pro9">9. Sports Training Support</a>
                        <a href="/pro10">10. True Eternal Warriors</a>
                        <a href="/pro11">11. Training and Skill Enhancement</a>
                        <a href="/pro12">12. True Wisdom Devotees</a>
                        <a href="/pro13">13. Vigour and Vitality</a>
                        <a href="/pro14">14. Voiceless Souls Protection</a>
                        <a href="/pro15">15. Woman Empowerment</a>
                      </div>
                     </div> 
                  </li>
                  
                  <li className="nav-item dropdown">
                    <div className="dropdown">
                    <li className="dropbtn2">Organiogram</li>
                      <div className="dropdown-content">
                        <a href="/organigram">Organiogram</a>
                        <a href="/management">Management</a>
                        <a href="/coc">Code Of Conduct</a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <div className="dropdown">
                    <li className="dropbtn2">Career</li>
                      <div className="dropdown-content">
                        <a href="/rec">Recruitments</a>
                        <a href="/loginI">Interview Form</a>
                        <a href="/loginJ">Joining Form</a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/refp">
                      Refund Policy
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <div className="dropdown">
                    <li className="dropbtn2">Login</li>
                      <div className="dropdown-content">
                        <a href="/organigram">Numero</a>
                        <a href="/management">Employee</a>
                        <a href="/crm">RMS</a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/crmlogin">
                      CRM
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/faq">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#Fp" id="mylink">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/survey">
                      Survey
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/survey">
                      Support Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>



    
  );
}

export default Navbar;
