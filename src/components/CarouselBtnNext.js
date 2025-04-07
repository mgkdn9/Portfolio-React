import React from "react";

export default function ProjectCard(props) {
  if(props.index!==4)
  return (
    <button className="carousel__button carousel__button--right" aria-label="Next">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  );
  return (<></>)
}
