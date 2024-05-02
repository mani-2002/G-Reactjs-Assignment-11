import React from "react";
import list from "./list.json";
import { useParams } from "react-router-dom";
function Listdetails() {
  const { projectId } = useParams();
  const projectObj = list.find((event) => event.projectId == projectId);
  return (
    <div>
      <h1>{projectObj.projectName}</h1>
      <h1>{projectObj.projectDesc}</h1>
      <h1>{projectObj.projectDate}</h1>
    </div>
  );
}

export default Listdetails;
