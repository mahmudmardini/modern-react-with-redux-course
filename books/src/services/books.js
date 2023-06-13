import axios from "axios";

export default {
    async createBook (title) {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        return response.data;
    },

    async getBooks () {
        const response = await axios.get('http://localhost:3001/books');

        return response.data;
    },

    async updateBook (id, title) {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title
        });

        return response.data;
    },

    async deleteBook (id) {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);

        return response.data;
    },
};
