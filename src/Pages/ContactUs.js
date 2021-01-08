import React, {Component} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/footer';
import {SPACING} from '../Enums/Enums';
import { Formik, Field, Form } from 'formik';
import './ContactUs.css';
const Airtable = require('airtable');

export default class ContactUs extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    submit = (values) => {
        var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base('app719K3YR8fwVLQA');
        base('Contacts').create([
        {
            "fields": {
            "name": values.name,
            "email": values.email,
            "topic": values.topic,
            "message": values.message,
            }
        }], function(err) {
        if (err) {
            console.error(err);
            return;
        }});
    }

    render() {
        return (
            <div>
            <div style={{padding: SPACING.PAGE_SPACE}}>
                <Header pageHeader={true} pageHeaderTitle={"CONTACT"} pageHeaderSubtitle={"submit a question"}/>

                <div className="contactForm">
                    <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        topic: "",
                        message: "",
                    }}

                    onSubmit={(values, {resetForm}) => {
                        this.submit(values);
                        alert("Your inquiry has been submitted! We'll get back to you ASAP.");
                        resetForm();
                    }}
                    >
                    <Form>
                        <div className="formInputs">

                        <p className="inputFieldContainer">Name</p>
                        <Field name="name" placeholder="Jane Doe" className="inputField"/>

                        <p className="inputFieldContainer">Email</p>
                        <Field
                        name="email"
                        placeholder="janedoe@gmail.com"
                        type="email"
                        className="inputField"
                        />

                        <p className="inputFieldContainer">Topic</p>
                        <Field name="topic" placeholder="e.g. Volume 3: Article Question" className="inputField"/>

                        <p className="inputFieldContainer">Message</p>
                        <Field 
                        component="textarea" 
                        name="message" 
                        placeholder="I was thinking..."
                        className="inputFieldLarge"
                        />

                        <div className="submitContainer">
                        <button type="submit">Submit</button>
                        </div>

                        </div>

                    </Form>
                    </Formik>
                </div>

            </div>
            <div className="footerStyling" style={{position: "static"}}>
            <Footer/>
            </div>
            </div>
        )
    }
}