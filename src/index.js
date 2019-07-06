import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const app = express();
const port = 8080;

app.get('/', (request, response) => {
    response.send('Hello World Web');
});

// This is the resolver
const root = {hola: () => "Hello World GraphQL"}

app.use('/graphql', graphqlHTTP({
    //Schema: indicate what schema will use
    schema: schema,
    //Resolver: The resolver is indicate in rootValue
    rootValue: root,
    //We use graphiql
    graphiql: true

}));


app.listen(port, () => console.log(`El server esta funcionando en el puerto: ${port}`));
