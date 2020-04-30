import tokenService from '../utils/tokenService';

const BASE_URL = '/api/posts';

export function getAll() {
    const options = {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    };
    return fetch(BASE_URL, options)
        .then(res => res.json());
}

export function getSavedPosts() {
    const options = {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    };
    return fetch(`${BASE_URL}/saved/index`, options)
        .then(res => res.json())
}

export function create(post) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(post)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

export function savePost(id) {
    const options = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    };
    return fetch(`${BASE_URL}/saved/${id}`, options).then(res => res.json());
}

export function update(post) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(post)
    };
    return fetch(`${BASE_URL}/${post._id}`, options).then(res => res.json());
}

export function deleteOne(id) {
    const options = {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    };
    return fetch(`${BASE_URL}/${id}`, options).then(res => res.json());
}