import { Formio, Components } from "formiojs";
import indianState from "../api-options/indianState.json";






const FieldComponent = Components.components.field;

export default class IndianStatesSelect extends FieldComponent {
  constructor(component, options, data) {
    super(component, options, data);
    this.state = { options: [] }; // Add state to store fetched options
  }

  static schema() {
    return FieldComponent.schema({
      type: "select",
      label: "Indian State",
      key: "indianState",
      placeholder: "Select your state",
      dataSrc: "json",
      data: {
        json: indianState, // Replace with empty array initially
      },
      validate: {
        required: true,
      },
    });
  }


  static builderInfo = {
    title: "Indian States",
    group: "basic",
    icon: "fa fa-map",
    weight: 10,
    documentation: "http://link.to.documentation",
    schema: IndianStatesSelect.schema(),
  };

  //  attached() {
  //   super.attached();
    // console.log('Fetching options from:', 'http://localhost:8080/indianStates.json');
    // const response = await fetch('http://localhost:8080/indianStates.json');
    // const states = await response.json();
    // this.setState({ options: states }); // Update state with fetched options
    // this.setState({ options: {
    //   "name" : "LearnBestCoding",
    //   "website" : "www.learnbestcoding.com",
    //   "email" : "something@learnbestcoding.com",
    //   "country" :[
    //       {"value": "USA", "name" : "USA"},
    //       {"value": "USA", "name" : "Canada"},
    //       {"value": "RPC", "name" : "Japan"},
    //       {"value": "ARATA", "name" : "Australia"}
    //   ]
    // } });
    // // this.setState({ options: indianStates });
    // console.log('Rendering IndianStatesSelect',indianState);

  // }

  // render() {
  //   // Override render to use options from state
  //   return this.renderTemplate("select", {
  //     input: `<select class="form-control" ref="select">
  //       <option value="1">   AP</option>
  //       <option value="1">   Arunachal Pradesh</option>
  //       <option value="1">   Assam</option>
  //       <option value="1">   Bihar</option>
  //       <option value="1">   Chhattisgarh</option>

  //     </select>`,
  //   });
  // }
}

Formio.use({
  components: {
    IndianStatesSelect: IndianStatesSelect,
  },
});
