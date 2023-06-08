import axios from "axios";

export const instance = axios.create({
    withCredentials: true, baseURL: 'http://localhost:5001/',
});

export const profileAPI = {
    getTable() {
        return instance.get('/users')
            .then(response => {
                return response.data;
            });
    },

    updateTable(table, id) {

        return instance.patch('users/' + id, table)
            .then(response => {
                return response.data;
            })
    },
    newUserSend(table, id) {

        return instance.post('users/', table)
            .then(response => {
                return response;
            })
    },

    deleteFromTable( id) {
        return instance.delete('users/' + id)
            .then(response => {
                return response;
            })
    },
}

