module.exports = {
    createUser({ username, password }) {
        let message = `Add user ${username} with password ${password}`;
        console.log(message)
        return Promise.resolve(message)
    }
}