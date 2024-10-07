import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faStar } from "@fortawesome/free-solid-svg-icons";

const CoursesListForm = () => {
  return (
    <div>
      <div>
        <h1>Design Courses</h1>
      </div>
      <div>
        <p>All Development Courses</p>
      </div>

      <div className="mb-4">
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={faSliders} className="mx-2" />
          Filter
        </button>
        <p className="text-xs">Sort By</p>
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Relevance
        </button>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default CoursesListForm;
