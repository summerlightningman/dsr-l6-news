import {createAsyncThunk} from "@reduxjs/toolkit";
import {SwitchSubscriptionPayload, UserError} from "./user.types";
import {switchTagSubscription} from "../../../http";

const switchTagSub = createAsyncThunk(
    'user/switchTagSub',
    async (payload: SwitchSubscriptionPayload, ThunkAPI) => {
        try {
            const {tag, token} = payload;
            const result = await switchTagSubscription(token, tag);
            if ('id' in result)
                return ThunkAPI.fulfillWithValue(tag)
            else
                return ThunkAPI.rejectWithValue(UserError.SUBSCRIPTION_ERROR)
        } catch (e) {
            return ThunkAPI.rejectWithValue(UserError.SUBSCRIPTION_ERROR)
        }
    });

export default switchTagSub