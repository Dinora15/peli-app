import React from 'react';
import { useParams } from 'react-router-dom';

export function Pelicula (){
    let {id, title}= useParams();
    return(
        <> 
         
        <h1> {title} </h1>
        <h2> {id} </h2>
        
        </>
    );

}

