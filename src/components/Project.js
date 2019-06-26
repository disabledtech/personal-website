import React from 'react';

const Project = ({name,  url}) => {

    return (
                    <div className="project__card">
                        <h1 className="project__card__title">{name}</h1>
                        <div className="project__card__content">
                            <a className="project__card__link" href={url}>Website <i className="fas fa-external-link-alt"></i></a>
                            <a className="project__card__link" href={url}>Source <i className="fab fa-github"></i></a>
                        </div>
                    </div>
    )
}

export { Project as default };