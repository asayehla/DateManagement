import React from "react";
import TimeCard from "../components/TimeCard/index.jsx";
import { StyledSchemaView } from "./style.jsx";

const SchemaView = (props) => {
  var datalist = props.data;

  return (
    <StyledSchemaView>
      <h2>Arbetspass</h2>
      {datalist.map((event, index) => (
        <TimeCard className="s" key={index} event={event} />
      ))}
    </StyledSchemaView>
  );
};

export default SchemaView;
