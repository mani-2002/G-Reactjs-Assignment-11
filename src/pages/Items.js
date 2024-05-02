import React from "react";
import { Link } from "react-router-dom";
import list from "./list.json";
function Items() {
  return (
    <div>
      {list.map((item) => {
        return (
          <div>
            <ul>
              <li>
                <Link to={`/items/${item.projectId}`}>
                  <h1>{item.projectName}</h1>
                </Link>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
