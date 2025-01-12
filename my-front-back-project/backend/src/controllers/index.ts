class IndexController {
    public async getIndex(req, res) {
        res.send('Welcome to the backend API!');
    }

    public async getData(req, res) {
        const data = { message: 'This is some data from the backend.' };
        res.json(data);
    }

    // Add more methods as needed for handling different routes
}

export default IndexController;