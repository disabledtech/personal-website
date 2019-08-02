import React from 'react';
import Card, {
    CardPrimaryContent,
    CardActions,
    CardActionButtons,
  } from "@material/react-card";
  import Button from '@material/react-button';

const Project = ({name, about, github, website, tech}) => {

    return (
    <Card className="project">
      <CardPrimaryContent>
        <h1 className="project__title">{name}</h1>
        <p className="project__about">{about}</p>
        <p className="project__tech">{tech}</p>
      </CardPrimaryContent>
      <CardActions>
        <CardActionButtons className="project_links">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Button icon={<i className="fab fa-github fa-5x"></i>} outlined={true}>
                GITHUB
              </Button>
            </a>    
            <a href={website} target="_blank" rel="noopener noreferrer">
              <Button icon={<i className="fas fa-external-link-alt"></i>} outlined={true}>
                WEBSITE
              </Button>
            </a>   
        </CardActionButtons>
      </CardActions>
    </Card>
    )
}

export { Project as default };