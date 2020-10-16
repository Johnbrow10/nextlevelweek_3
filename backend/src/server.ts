import express from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

import './database/connection';

const app =  express();

app.use(express.json());


// Query Params: http://localhost:3333/users?search=john
// Route params: http://localhost:3333/users?/1 (identificar recurso)
// Body: http://localhost:3333/users (identificar um recurso)

app.post('/orphanages', async (request, response)=>{  

    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        opening_on_weekends,
    } = request.body;
    
    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        opening_on_weekends,
    });

     await orphanagesRepository.save(orphanage);

    return response.json( { message: 'Helo World' } );
    
});


app.listen(3333);


