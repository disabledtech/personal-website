import React from 'react';
import Project from './Project';

const Projects = () => {

    const projects = [{
        name: 'Expensify',
        url: 'https://expensify-disabledtech.herokuapp.com/'
    },
    {
        name: 'Indecision',
        url: 'https://indecision-disabledtech.herokuapp.com/'
    }
];

    return (
        <>
            { projects.map((project, i) => <Project {...project} key={i} />)}
        </> 
    )
}

export { Projects as default };