import {FC, useEffect} from 'react';
import {Formik} from 'formik';
import {FormFields} from "./sign-in-form.types";
import {FormikHelpers} from "formik/dist/types";
import SignInFormContainer from "./sign-in-form-container.styled";
import FormInput from "../../styled/form-input.styled";
import FormErrMsg from "../../styled/form-err-msg.styled";
import FormHeader from "../../styled/form-header.styled";
import SignInFormStyled from "./sign-in-form.styled";
import SubmitButton from "../../styled/submit-button.styled";
import {signIn} from "../../../http";
import {useCookies} from "react-cookie";
import FormGroup from "../../styled/form-group.styled";
import {useNavigate} from "react-router-dom";
import Endpoint from "../../../endpoint";

const SignInForm: FC = () => {
    const [cookies, setCookies] = useCookies(['token']);
    const navigate = useNavigate();
    useEffect(() => {
        if (cookies.token)
            navigate(Endpoint.NEWS_PAGE)
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
                return navigate(Endpoint.NEWS_PAGE);
            })
            .catch(() => {
                setErrors({login: 'Login and/or password are incorrect'})
            })
            .finally(() => {
                setSubmitting(false)
            });
    };

    return <SignInFormContainer>
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
                <SignInFormStyled onSubmit={handleSubmit}>
                    <FormHeader>SIGN IN</FormHeader>
                    <FormGroup>
                        <FormInput type="text" name="login" value={values.login} onChange={handleChange}
                                   onBlur={handleBlur} placeholder="Login"/>
                        {errors.login && touched.login && <FormErrMsg>{errors.login}</FormErrMsg>}
                    </FormGroup>
                    <FormGroup>
                        <FormInput type="password" name="password" value={values.password} onChange={handleChange}
                                   onBlur={handleBlur} placeholder="Password"/>
                        {errors.password && touched.password && <FormErrMsg>{errors.password}</FormErrMsg>}
                    </FormGroup>
                    <SubmitButton type="submit" disabled={isSubmitting}>Sign in</SubmitButton>
                </SignInFormStyled>
            }
        </Formik>
    </SignInFormContainer>
};

export default SignInForm;