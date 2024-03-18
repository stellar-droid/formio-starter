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
      label: "Select Indian State",
      key: "indianStates",
      dataSrc: "json", // Set data source to URL
      data: {
        // url: 'https://mocki.io/v1/3bc06b43-9c01-4b27-802d-1edf295ed97e', // No URL needed as fetching from local file
        json: indianState, // Use JSON data for options
        
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
