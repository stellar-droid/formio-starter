import { Formio, Components } from "formiojs";
import ReCAPTCHA from "react-google-recaptcha";
const FieldComponent = Components.components.field;

export default class CaptchaComponent extends FieldComponent {
    constructor(component, options, data) {
        super(component, options, data);
        this.recaptchaId = null;
    }

    static schema() {
        return FieldComponent.schema({
            type: "recaptcha",
            key: "captcha",
            label: "Complete reCAPTCHA Challenge",

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


    onChange(value) {
        console.log("Captcha value:", value);
    }
    // render() {
    //     return (

    //         <ReCAPTCHA
    //             sitekey="Your client site key"
    //             onChange={onChange}
    //         />,
    //     )
    // }



    render() {
        // Customize the rendering of the component here
        const input = ` <ReCAPTCHA
        sitekey="Your client site key"
        onChange={onChange}
        />`; // Example customization
        return this.renderTemplate("custom", {
            input: input,
        });
    }

}

// Register the component with Form.io
Formio.use({
    components: {
        CaptchaComponent: CaptchaComponent,
    },
});
