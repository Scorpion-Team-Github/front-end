import axios from "axios";
import { globals } from "../utils";
const ROOT = "https://neighlink-api.herokuapp.com/api/";

export default {
    async get({ url, withToken = true } = {}) {
        console.log('GET => ', url)
        let headers = {}
        console.log('TOKEN => ', globals.user.token)
        headers = { Authorization: `Bearer ${globals.user.token}` }
        headers["Access-Control-Allow-Origin"] = "*"
        const result = await axios
            .get(`${ROOT}${url}`, {
                headers: headers
            })
            .then((response) => {
                const data = response.data
                return { ...data, unauthorized: false };
            })
            .catch((error) => {
                console.error(error);
                return { unauthorized: true, error: true, message: 'ERROR SERVICE' }
            });
        console.log('RES => ', url, result)
        return result;
    },
    async post({ url = '', request = {}, withToken = true } = {}) {
        console.log('POST => ', url)
        console.log('REQ => ', request)
        console.log('TOKEN => ', globals.user.token)
        let headers = {}
        if (withToken)
            headers = { Authorization: `Bearer ${globals.user.token}` }
        headers["Access-Control-Allow-Origin"] = "*"
        const result = await axios
            .post(`${ROOT}${url}`, request, {
                headers: headers
            })
            .then((response) => {
                const data = response.data
                return { ...data, unauthorized: false };
            })
            .catch((error) => {
                console.error(error);
                return { unauthorized: true, error: true, message: 'ERROR SERVICE' }
            });
        console.log('RES => ', url, result)
        return result;
    },
    async postFormData({ url = '', request = {} } = {}) {
        console.log('POST FORMDATA => ', url)
        console.log('REQ => ', request)
        console.log('TOKEN => ', globals.user.token)
        const result = await axios
            .post(`${ROOT}${url}`, request, {
                headers: {
                    Authorization: `Bearer ${globals.user.token}`,
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": '*'
                },
            })
            .then((response) => {
                const data = response.data
                return { ...data, unauthorized: false };
            })
            .catch((error) => {
                console.error(error);
                return { unauthorized: true, error: true, message: 'ERROR SERVICE' }
            });
        console.log('RES => ', url, result)
        return result;
    },
    async put({ url = '', request = {} } = {}) {
        console.log('PUT => ', url)
        console.log('REQ => ', request)
        console.log('TOKEN => ', globals.user.token)
        const result = await axios
            .put(`${ROOT}${url}`, request, {
                headers: {
                    Authorization: `Bearer ${globals.user.token}`,
                    "Access-Control-Allow-Origin": '*'
                },
            })
            .then((response) => {
                const data = response.data
                return { ...data, unauthorized: false };
            })
            .catch((error) => {
                console.error(error);
                return { unauthorized: true, error: true, message: 'ERROR SERVICE' }
            });
        console.log('RES => ', url, result)
        return result;
    },
    async putFormData({ url = '', request = {} } = {}) {
        console.log('PUT FORMDATA => ', url)
        console.log('REQ => ', request)
        console.log('TOKEN => ', globals.user.token)
        const result = await axios
            .put(`${ROOT}${url}`, request, {
                headers: {
                    Authorization: `Bearer ${globals.user.token}`,
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": '*'
                },
            })
            .then((response) => {
                const data = response.data
                return { ...data, unauthorized: false };
            })
            .catch((error) => {
                console.error(error);
                return { unauthorized: true, error: true, message: 'ERROR SERVICE' }
            });
        console.log('RES => ', url, result)
        return result;
    },
    async delete(url) {
        console.log('DELETE => ', url)
        console.log('TOKEN => ', globals.user.token)
        const result = await axios
            .delete(`${ROOT}${url}`, {
                headers: {
                    Authorization: `Bearer ${globals.user.token}`,
                    "Access-Control-Allow-Origin": '*'
                },
            })
            .then((response) => {
                const data = response.data
                return { ...data, unauthorized: false };
            })
            .catch((error) => {
                console.error(error);
                return { unauthorized: true, error: true, message: 'ERROR SERVICE' }
            });
        console.log('RES => ', url, result)
        return result;
    },
};
