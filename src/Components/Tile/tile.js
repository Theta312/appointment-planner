import React from 'react';




export default function Tile({name, description}) {


    return (
        <div>
            <p>{name}</p>
            {
                Object.values(description).map(value => {
                    
                    return (
                        <>
                           <p>{value}</p>
                        </>
                    )
                })
            }
        </div>
        )
        
}