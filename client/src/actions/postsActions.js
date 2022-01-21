import axios from "axios"
import { POST_CREATE_REQUEST, POST_CREATE_SUCCESS, POST_LIST_FAIL, POST_LIST_REQUEST, POST_LIST_SUCCESS } from "../constants/postsConstants"

export const listPosts = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: POST_LIST_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`/api/posts`, config);

        dispatch({
            type: POST_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: POST_LIST_FAIL,
            payload: message,
        });
    }
};

export const createPostAction = (title, content, category) => async (dispatch, getState) => {
    try {
        dispatch({
            type: POST_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/posts/create`, { title, content, category }, config)

        dispatch({
            type: POST_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: POST_LIST_FAIL,
            payload: message,
        });
    }
}