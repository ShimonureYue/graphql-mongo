import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const app = express();
const port = 8080;

app.get('/', (request, response) => {
    response.send('Hello World Web');
});

// This is the resolver
const root = {recruitment: () => {
    return {
        id: 123123123,
        name: "Sales Office",
        description: "Some description",
        createdAt: "2016-02-24 20:45:45",
        updatedAt: "2018-02-24 20:45:45",
        deletedAt: null
    };
}};

app.use('/graphql', graphqlHTTP({
    //Schema: indicate what schema will use
    schema: schema,
    //Resolver: The resolver is indicate in rootValue
    rootValue: root,
    //We use graphiql
    graphiql: true

}));


app.listen(port, () => console.log(`El server esta funcionando en el puerto: ${port}`));
