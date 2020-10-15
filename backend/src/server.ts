import express from 'express';

import './database/connection';

const app =  express();

app.use(express.json());


// Query Params: http://localhost:3333/users?search=john
// Route params: http://localhost:3333/users?/1 (identificar recurso)
// Body: http://localhost:3333/users (identificar um recurso)

app.get('/users',(request, response)=>{  
    return response.json( { message: 'Helo World'});
    
});


app.listen(3333);


