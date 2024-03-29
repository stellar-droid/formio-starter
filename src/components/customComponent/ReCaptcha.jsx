import { Formio, Components } from "formiojs";

const FieldComponent = Components.components.htmlelement; 

export default class CaptchaComponent extends HTMLElement  {
    constructor(component, options, data) {
        super(component, options, data);
        this.recaptchaId = null;
    }

  
    static schema() {
        return FieldComponent.schema({
            type: "recaptcha",
            key: "display",
            label: "Complete reCAPTCHA Challenges",
            dataSrc: "html",
            input: true,
            data: `
              <h1>Lok</h1>
            `,
            validate: {
                required: true, // Make verification mandatory
            },
        });
    }

    static builderInfo = {
        title: "CAPTCHA Challenge",
        group: "basic",
        icon: "fa fa-shield", // Font Awesome icon for CAPTCHA
        weight: 10,
        documentation: "https://developers.google.com/recaptcha/web/overview", // reCAPTCHA docs link
        schema: CaptchaComponent.schema(),
    };


  


 


   
    

}

// Register the component with Form.io
Formio.use({
    components: {
        CaptchaComponent: CaptchaComponent,
    },
});


// import { Formio, Components } from "formiojs";
// // import { Field } from 'formiojs/build/components/field';
// const FieldComponent = Components.components.field; 

// export default class CaptchaComponent extends FieldComponent {

    
//     constructor(component, options, data) {
//         super(component, options, data);
//         this.recaptchaId = null;
//         this.loadScript();
//     }

//     loadScript() {
//         const script = document.createElement('script');
//         script.src = "https://www.google.com/recaptcha/api.js";
//         script.async = true;
//         script.defer = true;
//         script.onerror = (error) => {
//             console.error("Error loading reCAPTCHA script:", error);
//         };
//         document.body.appendChild(script);
//     }

//     static schema() {
//         return FieldComponent.schema({
//             type: 'captcha',
//             label: 'CAPTCHA',
//             key: 'captcha',
//             input: false,
//             persistent: false,
//             validate: {
//                 required: true // Make verification mandatory
//             }
//         });
//     }

//     static get builderInfo() {
//         return {
//             title: 'CAPTCHA Challenge',
//             group: 'basic',
//             icon: 'fa fa-shield',
//             weight: 10,
//             schema: CaptchaComponent.schema()
//         };
//     }

//     render() {
//         // Render the element for reCAPTCHA
//         this.recaptchaId = this.component.key;
//         this.element.innerHTML = `<div id="${this.recaptchaId}" class="g-recaptcha"></div>`;
//     }

//     // render() {


//     //     console.log("Captcha Component")
//     //     // Call the super render method to ensure this.element is defined
//     //     super.render();

//     //     <div class="g-recaptcha"
//     //    data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"></div>               
    
//     //     // Render the reCAPTCHA HTML
//     // //     if (this.element) {
//     // //         this.recaptchaId = this.component.key;
//     // //         this.element.classList.add('g-recaptcha');
//     // //         this.element.setAttribute('data-sitekey', '6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR');
//     // //         this.element.setAttribute('id', this.recaptchaId);
//     // //         this.element.innerHTML = ''; // Clear any existing content
    
//     // //         // Load reCAPTCHA script and initialize reCAPTCHA widget
//     // //         this.loadRecaptchaScript();
//     // //     }
//     // // }
    
//     // // loadRecaptchaScript() {
//     // //     // Check if grecaptcha is already defined
//     // //     if (typeof grecaptcha !== 'undefined') {
//     // //         this.initRecaptcha();
//     // //     } else {
//     // //         // Load the reCAPTCHA script
//     // //         const script = document.createElement('script');
//     // //         script.src = "https://www.google.com/recaptcha/api.js";
//     // //         script.async = true;
//     // //         script.defer = true;
//     // //         document.body.appendChild(script);
    
//     // //         // Initialize reCAPTCHA after script is loaded
//     // //         script.onload = () => {
//     // //             this.initRecaptcha();
//     // //         };
//     // //     }
//     // }
    
//     // initRecaptcha() {
//     //     // Initialize reCAPTCHA widget
//     //     grecaptcha.render(this.recaptchaId, {
//     //         'sitekey': '6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR',
//     //         'theme': 'light' // Optional: set theme to light or dark
//     //     });
//     // }
    

//     onCaptchaVerify(response) {
//         // Handle verification response here
//         console.log('reCAPTCHA verified:', response);
//         // You might want to emit an event or update the form data accordingly
//     }
// }

// // Register the component with Form.io
// Formio.Components.addComponent('captcha', CaptchaComponent);
