const http = new EasyHTTP;

// Get users
// http.get('http://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// User Data
const data = {
    "name": "Bob",
    "username": "BobFrob",
    "email": "BobFrob@FrobBob.com"
}

// Post user data
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// Update post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// Delete users date
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(error => console.log(error));