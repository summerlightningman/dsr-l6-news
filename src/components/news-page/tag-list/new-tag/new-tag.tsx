import {FC, useState} from 'react';
import NewTagStyled from "./new-tag.styled";
import Button from "../../../styled/button.styled";
import {Formik} from "formik";
import {NewTagFormErrors, NewTagFormValues} from "./new-tag.types";
import tagService from "../../../../redux/services/tag/tag.service";
import NewTagForm from "./new-tag-form.styled";
import FormErrorMessage from "../../../styled/form-error-message";
import FormGroup from "../../../styled/form-group.styled";
import {FormikHelpers} from "formik/dist/types";
import {useCookies} from "react-cookie";

const NewTag: FC = () => {
    const [isFormOpened, setIsFormOpened] = useState(false);
    const [{token}] = useCookies(['token']);
    const {data: tagList} = tagService.useTagListQuery();
    const [updateTagList] = tagService.useAddTagMutation();
    const toggleFormOpen = () => setIsFormOpened(!isFormOpened);

    const initialValues: NewTagFormValues = {name: ''};
    const validate = (values: NewTagFormValues) => {
        const errors: NewTagFormErrors = {};
        if (!values.name)
            errors.name = 'Tag name cannot be empty';
        if (tagList?.includes(values.name))
            errors.name = 'this tag exists';
        return errors
    };
    const addTag = (values: NewTagFormValues, {resetForm}: FormikHelpers<NewTagFormValues>) => {
        const tags = tagList || [];
        const newTagList = [...tags, values.name];
        return updateTagList({token, tagList: newTagList}).then(() => resetForm());
    };
    const form =
        <Formik initialValues={initialValues} validate={validate} onSubmit={addTag}>
            {
                ({
                     handleChange,
                     handleBlur,
                     values,
                     errors,
                     touched,
                     handleSubmit
                 }) => <NewTagForm onSubmit={handleSubmit}>
                    <FormGroup direction="row">
                        <input name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                        {errors.name && touched.name && <FormErrorMessage>{errors.name || ' '}</FormErrorMessage>}
                    </FormGroup>
                    <FormGroup direction="row" width="auto">
                        <Button type="submit">Add</Button>
                        <Button type="button" onClick={toggleFormOpen}>Cancel</Button>
                    </FormGroup>

                </NewTagForm>
            }
        </Formik>;

    return <NewTagStyled>
        {
            isFormOpened
                ? form
                : <Button onClick={toggleFormOpen}>Create tag</Button>
        }
    </NewTagStyled>
};

export default NewTag;