import React, { useState } from 'react';
import Project from './Project';

const Projects = () => {

    const [rotateArrow, setRotateArrow] = useState('fas fa-arrow-circle-right arrow');
    const [displayProjects, setDisplayProjects] = useState(false);

    const projects = [{
        name: 'Expensify',
        about: 'An app for tracking your expenses. Features a login system which uses your Google account and a Firebase database so your data is always available quickly.',
        website: 'https://expensify-disabledtech.herokuapp.com/',
        github: 'https://github.com/disabledtech/expensify_app',
        tech: 'React, Firebase, JavaScript ES6'
    },
    {
        name: 'Historical Weather',
        about: "Compares today's temperature with last year's.",
        website: 'http://weather.taylordanielson.ca/',
        github: 'https://github.com/disabledtech/Twitch-IRC-Logs-To-DB',
        tech: 'NodeJS, JavaScript ES6, DarkSky API, Mapbox API'
    },
    {
        name: 'Indecision',
        about: 'Input your TODO list and let chance decide what you should do next.',
        website: 'https://indecision-disabledtech.herokuapp.com/',
        github: 'https://github.com/disabledtech/indecision-app',
        tech: 'React, Firebase, JavaScript ES6'
    },
    {
        name: 'Twitch Logger',
        about: 'Logs the messages sent in popular Twitch.tv channels.',
        website: 'https://github.com/disabledtech/Twitch-IRC-Logger',
        github: 'https://github.com/disabledtech/Twitch-IRC-Logger',
        tech: 'Python, Twitch.tv API'
    },
    {
        name: 'Twitch Logs-to-DB',
        about: 'Processes the logs from  Twitch Logger into a SQLite database.',
        website: 'https://github.com/disabledtech/Twitch-IRC-Logs-To-DB',
        github: 'https://github.com/disabledtech/Twitch-IRC-Logs-To-DB',
        tech: 'Python, SQLite'
    },

]
    const handleTitleClick = () => {

        setRotateArrow(displayProjects ? 'fas fa-arrow-circle-right arrow' : 'fas fa-arrow-circle-right arrow rotate');
        setDisplayProjects(!displayProjects);
    }

    return (
        <div className="projects">
            <h1 className="projects__title" onClick={() => handleTitleClick()}>Projects<i className={rotateArrow}></i></h1>
            <div className={displayProjects ? 'projects__fade-in' : 'projects__fade-out'}>
                { displayProjects && projects.map((project, i) => <Project {...project} key={i} />)}
            </div>
            
        </div>
    )
}

export { Projects as default };