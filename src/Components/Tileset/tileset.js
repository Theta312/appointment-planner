import React from 'react';
import Tile from '../Tile/tile.js';





export default function TileSet({tiles}) {



    return (
        <div>
            {
                tiles.map((tile, index) => {
                    const { name, ...description } = tile;
                    return (
                        <Tile name={name} description={description} key={index} />
                    )
                })
            }
      </div>
    )
} 
