import {fetch} from 'react';
import config from '../config';

export const notificationServices = {
    postToken,
};

async function postToken(token) {

    const requestOptions = {
        method: 'POST',
        url: config.baseUrl + '/notifications/register',
        headers: {'Content-Type': 'application/json'},
        body: {
            "fcm_token": token,
            "id": "4565465"
        }
    };


    try {
        const result = await fetch(requestOptions.url, {
            method: requestOptions.method,
            headers: requestOptions.headers,
            body: JSON.stringify(requestOptions.body)
        });
        console.log(result);
        // if (!result)
        // throw "No Response";

    } catch (error) {
        throw error
    }

}