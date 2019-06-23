import React from 'react';

const Project = ({name,  url}) => {

    return (
        <>
            <p>{name}, {url}</p>
        </>
    )
}

export { Project as default };