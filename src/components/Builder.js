import { Form, FormBuilder } from "@formio/react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import ReactJson from "react-json-view";
import IndianStatesSelect from "./customComponent/IndianStatesSelect "; // Import your custom component
import "../styles/Builder.css";
import IndianCitySelect from "./customComponent/IndianCitySelect";
import indianCity from "./api-options/indianCity.json";
const Builder = () => {
  const [jsonSchema, setSchema] = useState({ components: [] });
  const onFormChange = (schema) => {
    setSchema({ ...schema, components: [...schema.components] });
  };
  return (
    <>
      {/* Register the custom component within the FormBuilder */}
      <FormBuilder
        form={jsonSchema}
        onChange={onFormChange}
        customComponents={{ IndianStatesSelect,IndianCitySelect }}
        key={"formBuilder"}
      >
        <IndianStatesSelect  />
        <IndianCitySelect cityData={indianCity}/>
        </FormBuilder>
      <Card title="Form JSON Schema" className="my-4">
        <Card.Body>
          <Card.Title className="text-center">As JSON Schema</Card.Title>
          <ReactJson src={jsonSchema} name={null} collapsed={true}></ReactJson>
        </Card.Body>
      </Card>
      <Card className="my-4">
        <Card.Body>
          <Card.Title className="text-center">As Rendered Form</Card.Title>
          <Form form={jsonSchema} />
        </Card.Body>
      </Card>
    </>
  );
};

export default Builder;
