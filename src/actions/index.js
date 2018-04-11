import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=jeffreicher15';

export function getList() {
    const response = axios.get(`${BASE_URL}/todos/${API_KEY}`);

    return {
        type: types.GET_LIST_DATA,
        payload: response
    };
};

export function getSingleItem(id) {
    const response = axios.get(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: types.GET_SINGLE_ITEM,
        payload: response
    };
};

export function addNewItem(item) {
    const response = axios.post(`${BASE_URL}/todos/${API_KEY}`, item);

    return {
        type: types.ADD_ITEM,
        payload: response
    };
};

export function markComplete(id) {
    const response = axios.put(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: types.MARK_COMPLETE,
        payload: response
    };
};

export function deleteItem(id) {
    const response = axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: types.DELETE,
        payload: response
    };
};

//Delete item:
//axios.delete(`${BASE_URL}/todos/${id + API_KEY}`)

//Toggle Complete:
//axios.put(`${BASE_URL}/todos/${id + API_KEY}`)
