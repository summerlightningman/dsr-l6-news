import {FC, useEffect} from 'react';
import {Formik} from 'formik';
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

import {FormikHelpers} from "formik/dist/types";

import {FormFields} from "./sign-up-form.types";
import FormContainer from "../form-container.styled";
import FormInput from "../../styled/form-input.styled";
import FormErrorMessage from "../../styled/form-error-message";
import FormHeader from "../../styled/form-header.styled";
import SubmitButton from "../../styled/submit-button.styled";
import FormGroup from "../../styled/form-group.styled";
import Link from '../link.styled';
import Form from "../form.styled";
import Endpoint from "../../../endpoint";
import {signUp} from "../../../http";

const SignUpForm: FC = () => {
    const [cookies] = useCookies(['token']);
    const navigate = useNavigate();

    useEffect(() => {
        if (cookies.token)
            navigate(Endpoint.ROOT)
    }, [cookies.token, navigate]);

    const initialVales: FormFields = {login: '', password: ''};
    const validate = (values: FormFields) => {
        const errors: Partial<FormFields> = {};
        if (!values.login)
            errors.login = 'Login cannot be empty'
        if (!values.password)
            errors.password = 'Password cannot be empty'
        return errors
    };

    const handleSubmit = (values: FormFields, {setErrors, setSubmitting}: FormikHelpers<FormFields>) => {
        setSubmitting(true);
        signUp(values.login, values.password)
            .then(resp => {
                if (resp.status >= 400 && resp.status < 500)
                    setErrors({login: 'User already exists'})
                if (resp.status === 201)
                    navigate(Endpoint.AUTH)
            })
            .catch(() => setErrors({login: 'Error'}))
            .finally(() => {
                setSubmitting(false)
            })
    };

    return <FormContainer>
        <Formik initialValues={initialVales} validate={validate} onSubmit={handleSubmit} validateOnChange={true}>
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
              }) =>
                <Form onSubmit={handleSubmit}>
                    <FormHeader>SIGN UP</FormHeader>
                    <FormGroup>
                        <FormInput type="text" name="login" value={values.login} onChange={handleChange}
                                   onBlur={handleBlur} placeholder="Login"/>
                        <FormErrorMessage>{errors.login && touched.login && errors.login}</FormErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <FormInput type="password" name="password" value={values.password} onChange={handleChange}
                                   onBlur={handleBlur} placeholder="Password"/>
                        <FormErrorMessage>{errors.password && touched.password && errors.password}</FormErrorMessage>
                    </FormGroup>
                    <SubmitButton type="submit" disabled={isSubmitting}>Sign up</SubmitButton>
                    <Link to={Endpoint.AUTH}>Sign in</Link>
                </Form>
            }
        </Formik>
    </FormContainer>
};

export default SignUpForm;