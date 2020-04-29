import tokenService from '../utils/tokenService';

const BASE_URL = '/api/classrooms';

// export function getAll() {
//     return fetch(BASE_URL)
//         .then(res => res.json());
// }

export function create(classroom) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(classroom)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

export function update(classroom) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(classroom)
    };
    return fetch(`${BASE_URL}/${classroom._id}`, options).then(res => res.json());
}

export function deleteOne(id) {
    const options = {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    };
    return fetch(`${BASE_URL}/${id}`, options).then(res => res.json());
}