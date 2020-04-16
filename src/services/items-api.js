import tokenService from '../../src/utils/tokenService';

const BASE_URL = '/api/items';

export function getAll() {
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': 'Bearer ' + tokenService.getToken()
    //     }
    // };
    return fetch(BASE_URL/*, options*/)
        .then(res => res.json());
}

export function create(item) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            // Add this header - don't forget the space after Bearer
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(item)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

export function update(item) {
    return fetch(`${BASE_URL}/${item._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(item)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}