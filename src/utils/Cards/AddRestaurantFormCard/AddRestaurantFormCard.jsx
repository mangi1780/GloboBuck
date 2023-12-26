import {useState} from 'react'
import { Link } from 'react-router-dom'

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import TextUtil from '../../FormUtils/TextUtil/TextUtil'
import TelUtil from '../../FormUtils/TelUtil/TelUtil'
import TextAreaUtil from '../../FormUtils/TextAreaUtil/TextAreaUtil'

import css from './AddRestaurantFormCard.module.css';

let AddRestaurantFormCard = () => {

    let [initialValues, setInitialValues] = useState({ 
        restName: '',
        location: '',
        phone: '',
        message: '' 
    })
    let validationSchema = Yup.object({
        restName: Yup.string()
        .min(5, 'Minimum 5 characters required')
        .max(15, 'Must be less than 15 characters')
        .required('Required'),
        location: Yup.string().required('Required'),
        phone: Yup.string(),
        message: Yup.string(),
    })

    let submitForm = (values, { setSubmitting }) => {
        console.log(values, "submited");
    }

    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitForm}
                className={css.formikForm}
            >
                <Form className={css.form}>
                    <TextUtil name="restName" placeholder="Shop name*"/>
                    <TextUtil name="location" placeholder="Shop location*"/>
                    <TelUtil name="phone" placeholder="Shop contact number"/>
                    <TextAreaUtil name="message" placeholder="What do you like about the Shop?" />
                    <button type='submit' className={css.btn}>Submit</button>
                </Form>
            </Formik>
            <div className={css.tag}>Shop owners can <Link to='' className={css.link}>add Shop from here</Link></div>
        </div>
    </div>
}

export default AddRestaurantFormCard;