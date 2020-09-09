import React from 'react';
import ProjectSummary from './ProjectSummary'

function ProjectList () {
    return (
      <div className="project-list">
        <ProjectSummary/>
        <ProjectSummary/>
        <ProjectSummary/>
        <ProjectSummary/>
        <ProjectSummary/>
      </div>
    );
}

export default ProjectList;