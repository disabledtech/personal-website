import React, { useState } from 'react';
import Project from './Project';

const Projects = () => {

    const [rotateArrow, setRotateArrow] = useState('fas fa-arrow-circle-right arrow');
    const [displayProjects, setDisplayProjects] = useState(true);

    const projects = [{
        name: 'Expensify',
        url: 'https://expensify-disabledtech.herokuapp.com/'
    },
    {
        name: 'Indecision',
        url: 'https://indecision-disabledtech.herokuapp.com/'
    }
]
    const handleTitleCLick = () => {

        setRotateArrow(displayProjects ? 'fas fa-arrow-circle-right arrow' : 'fas fa-arrow-circle-right arrow rotate');
        setDisplayProjects(!displayProjects);
    }

    return (
        <div className="projects">
            <h1 className="projects__title" onClick={() => handleTitleCLick()}>Projects <i className={rotateArrow}></i></h1>
            <div className={displayProjects ? 'projects__fade-in' : 'projects__fade-out'}>
                { displayProjects && projects.map((project, i) => <Project {...project} key={i} />)}
            </div>
            
        </div>
    )
}

export { Projects as default };