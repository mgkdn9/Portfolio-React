import React from "react";

export default function ProjectCard(props) {
  if(props.index!==0)
  return (
    <button className="carousel__button carousel__button--left" aria-label="Previous">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>

  );
  return (<></>)
}
