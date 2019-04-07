const knex = require('knex')(require('./knexfile'))

module.exports = {
    createUser({ username, password }) {
        let message = `Add user ${username} with password ${password}`;
        console.log(message)
        return knex('user').insert({
            username,
            password
        })
    }
}