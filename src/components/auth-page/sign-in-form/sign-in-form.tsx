import {FC, useEffect} from 'react';
import {Formik} from 'formik';
import {useNavigate} from "react-router-dom";
import {FormFields} from "./sign-in-form.types";
import {FormikHelpers} from "formik/dist/types";
import FormContainer from "../form-container.styled";
import FormInput from "../../styled/form-input.styled";
import FormErrMsg from "../../styled/form-err-msg.styled";
import FormHeader from "../../styled/form-header.styled";
import SubmitButton from "../../styled/submit-button.styled";
import {signIn} from "../../../http";
import {useCookies} from "react-cookie";
import FormGroup from "../../styled/form-group.styled";
import Endpoint from "../../../endpoint";
import Form from "../form.styled";
import Link from '../link.styled';

const SignInForm: FC = () => {
    const [cookies, setCookies] = useCookies(['token']);
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
        signIn(values.login, values.password)
            .then(({token}) => {
                if (!token)
                    return setErrors({login: 'Cannot get auth key from server'})
                setCookies('token', token, {maxAge: 3600 * 24});
                return navigate(Endpoint.ROOT);
            })
            .catch(() => {
                setErrors({login: 'Login and/or password are incorrect'})
            })
            .finally(() => {
                setSubmitting(false)
            });
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
                    <FormHeader>SIGN IN</FormHeader>
                    <FormGroup>
                        <FormInput type="text" name="login" value={values.login} onChange={handleChange}
                                   onBlur={handleBlur} placeholder="Login"/>
                        <FormErrMsg>{errors.login && touched.login && errors.login}</FormErrMsg>
                    </FormGroup>
                    <FormGroup>
                        <FormInput type="password" name="password" value={values.password} onChange={handleChange}
                                   onBlur={handleBlur} placeholder="Password"/>
                        <FormErrMsg>{errors.password && touched.password && errors.password}</FormErrMsg>
                    </FormGroup>
                    <SubmitButton type="submit" disabled={isSubmitting}>Sign in</SubmitButton>
                    <Link to={Endpoint.SIGN_UP}>Sign up</Link>
                </Form>
            }
        </Formik>
    </FormContainer>
};

export default SignInForm;