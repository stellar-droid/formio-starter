import { Formio, Components } from "formiojs";
import indianCity from "../api-options/indianCity.json";

const FieldComponent = Components.components.field;
let selectedStateCity = [];
export default class IndianCitySelect extends FieldComponent {
  constructor(component, options, data) {
    super(component, options, data);
    this.state = { options: indianCity, selectedState: "" ,selectedStateCity:{}}; // Assign JSON data to state
     // Find the IndianStatesSelect component object from the schema
     const schema = this.form.schema;
     const statesSelect = schema.components.find(
       (comp) => comp.key === "indianStates"
     );
     // Add event listener for change event on statesSelect (if found)
     if (statesSelect) {
       statesSelect.on("componentChange", (event) => {
        console.log("event",event)
         this.setState({ selectedState: event.data.value });
       });
     } else {
       console.warn("IndianStatesSelect component not found in the schema");
     }
     


}

  static schema() {
    return FieldComponent.schema({
      type: "select",
      label: "Select Indian City",
      key: "indianCity",
      dataSrc: "json", // Set data source to JSON
      data: {
        json: indianCity, // Use JSON data for options
      },
      componentChanged: (event) => {
        console.log("event",event)
      },
      redrawOn:"any"
    });
  }

  static builderInfo = {
    title: "Indian Cities",
    group: "basic",
    icon: "fa fa-building",
    weight: 11,
    documentation: "http://link.to.documentation",
    schema: IndianCitySelect.schema(),
  };

//   render() {
//     // Override render to use options from state
//     return this.renderTemplate("select", {
//       input: `<select class="form-control" ref="select">
//         ${this.selectOptions}
//       </select>`,
//     });
//   }
  
//   get selectOptions() {
//     // Generate option elements for select dropdown
//     return this.state.options.map((city) => {
//         console.log(city);
//       return `<option value="${city.id}">${city.name}</option>`;
//     }).join('');
//   }
}

Formio.use({
  components: {
    IndianCitySelect: IndianCitySelect,
  },
});
