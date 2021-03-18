import React from "react";
import "./Content.scss";

function Content(props) {
  const { data, width } = props;

  const buttons = () => {
    // do not want to show buttons in the home page
    // check if link exists and if exists show buttons
    if (data.link) {
      return (
        <>
          <a target="_blank" rel="noreferrer" href={data.link}>
            Link
          </a>
          <a target="_blank" rel="noreferrer" href={data.mylink}>
            {data.name === "Email" ? "email me" : "my page at " + data.name}
          </a>
        </>
      );
    }
  };

  return (
    <div className="Content" style={{ marginLeft: width }}>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      {buttons()}
    </div>
  );
}

export default Content;
