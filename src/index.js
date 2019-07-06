import express from 'express';

const app = express();
const port = 8080;

app.get('/', (request, response) => {
    response.send('Hello Word, GraphQL practices');
});

app.listen(port, () => console.log(`El server esta funcionando en el puerto: ${port}`));
