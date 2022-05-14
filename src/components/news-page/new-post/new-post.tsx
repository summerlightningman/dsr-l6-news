import {ChangeEventHandler, FC, FormEventHandler, MouseEventHandler, useEffect} from 'react';

import {Tag} from '../news-page.types';

import Label from "../../styled/label.styled";

import FormGroupStyled from "../../styled/form-group.styled";
import FormInputStyled from "../../styled/form-input.styled";
import NewPostStyled from "./new-post.styled";
import FormTextarea from "../../styled/form-textarea.styled";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import Select from "../../styled/select.styled";
import fetchTagList from "../../../redux/slices/tag/fetch-tag-list";
import {
    addNewPostTag,
    removeNewPostTag,
    setIsDraft,
    setNewPostDescription,
    setNewPostHeader
} from "../../../redux/slices/news/news.slice";
import TagStyled from "./tag.styled";
import NewPostSubmit from "./new-post-submit";
import Checkbox from "../../styled/checkbox.styled";
import submitNewPost from "../../../redux/slices/news/submit-new-post";
import {useCookies} from "react-cookie";


const NewPost: FC = () => {
    const [{token}] = useCookies(['token']);
    const [{list: tagList}, {
        newPostHeader,
        newPostDescription,
        newPostTags,
        isDraft
    }] = useAppSelector(state => [state.tag, state.news]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!tagList.length)
            dispatch(fetchTagList());
    }, [dispatch, tagList]);

    const handleHeaderChange: ChangeEventHandler<HTMLInputElement> =
        e => dispatch(setNewPostHeader(e.currentTarget.value));
    const handleDescriptionChange: ChangeEventHandler<HTMLInputElement> =
        e => dispatch(setNewPostDescription(e.currentTarget.value));
    const handleTagsSelect: ChangeEventHandler<HTMLSelectElement> =
        e => dispatch(addNewPostTag(e.currentTarget.value));
    const removeTag = (tag: Tag): MouseEventHandler<HTMLButtonElement> => e => {
        e.preventDefault();
        dispatch(removeNewPostTag(tag));
    };
    const handleIsDraftChange: ChangeEventHandler<HTMLInputElement> =
        e => dispatch(setIsDraft(e.currentTarget.checked));
    const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        dispatch(submitNewPost({token, header: newPostHeader, description: newPostDescription, tags: newPostTags, isDraft}))
    };

    // @ts-ignore
    return <NewPostStyled onSubmit={handleSubmit}>
        <FormGroupStyled>
            <Label htmlFor="header">Header</Label>
            <FormInputStyled background="white" id="header" name="header" value={newPostHeader}
                             onChange={handleHeaderChange}/>
        </FormGroupStyled>
        <FormGroupStyled width="100%">
            <Label htmlFor="description">Description</Label>
            <FormTextarea id="description" name="description" value={newPostDescription}
                          onChange={handleDescriptionChange}/>
        </FormGroupStyled>
        <FormGroupStyled width="100%">
            <Label htmlFor="tags">Tags</Label>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {newPostTags.map(
                    tag => <TagStyled>
                        #{tag}
                        <button onClick={removeTag(tag)}>X</button>
                    </TagStyled>)}

                <Select id="tags" name="tags" onChange={handleTagsSelect}>
                    <option value="">Select...</option>
                    {
                        tagList
                            .filter(tag => !newPostTags.includes(tag))
                            .map(tag => <option value={tag} key={tag}>{tag}</option>)
                    }
                </Select>
            </div>
        </FormGroupStyled>
        <FormGroupStyled>
            <Label>
                <Checkbox checked={isDraft} onChange={handleIsDraftChange}/>
                Save as draft
            </Label>
        </FormGroupStyled>
        <NewPostSubmit type="submit">Create post</NewPostSubmit>
    </NewPostStyled>
};

export default NewPost;