import React from 'react';

function AboutMe() {

  return (
        <div className="about-me">
            <a  href="https://www.linkedin.com/in/disabledtech/" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <i 
                    className="fab fa-linkedin-in fa-5x zoom"
                    aria-hidden="true" 
                    aria-label="Find me on LinkedIn"
                    title="Find me on LinkedIn"
                >
                </i>
            </a>
            
            <a  href="mailto:taylor@taylordanielson.ca"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <i 
                    className="fas fa-at fa-5x zoom"
                    aria-hidden="true" 
                    aria-label="Email me"
                    title="Email me"
                >
                </i>
            </a>


            <a  href="https://github.com/disabledtech"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <i 
                    className="fab fa-github fa-5x zoom" 
                    aria-hidden="true" 
                    aria-label="Find me on Github"
                    title="Find me on Github"
                >
                </i>
            </a>
        </div>


  );
}

export { AboutMe as default }
