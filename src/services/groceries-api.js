const BASE_URL = '/api/groceries';

export function getAll() {
    console.log('hitting getAll')
    return fetch(BASE_URL)
        .then(res => {
            // console.log('hitting res', res)
           return res.json()
        });
}

export function create(item) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(item)
    }).then(res => res.json());
}