module.exports.fetchUsers = () => fetch('https://my-api.com/users');

module.exports.addUser = ({ id, name }) => fetch('https://my-api.com/users', {
    method: 'POST',
    body: JSON.stringify({ "id": id, "name": name })
});

module.exports.deleteUser = (id) => fetch('https://my-api.com/users/' + id, {
    method: 'DELETE'
});

module.exports.updateUser = ({ id, name }) => fetch('https://my-api.com/users/' + id, {
    method: 'PUT',
    body: JSON.stringify({ "id": id, "name": name })
});

module.exports.getFistUserName = () => fetch('https://my-api.com/users/', {
    method: 'GET',
});