import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  console.log("Id is ", id);
  return (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content left-align">
          <span className="card-title text-darken-3">Project Title</span>
          <p> Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
        </div>
        <div className="card-action grey lighten-4 left-align">
          <div> Posted by Soma Siddhartha </div>
          <div> 9th September, 2020 </div>
        </div>
      </div>
    </div>  
  );
}

export default ProjectDetails