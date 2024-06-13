import React from 'react';
import { Player } from './Player';
import players from '../players';


export const PlayerList = () => {
  return (
    <div>
        {players.map(pl=><Player data={pl}/>)}
    </div>
  )
}
