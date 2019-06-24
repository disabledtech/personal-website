import React from 'react';

const Project = ({name,  url}) => {

    return (
                    <div className="card">
                        <p>{name}</p>
                    </div>
    )
}

export { Project as default };