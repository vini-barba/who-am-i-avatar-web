import React, { useEffect, useState } from 'react';
import * as io from '../../services/io';

import { Container } from './styles';

import Board from '../../components/Board';
import Sidebar from '../../components/Sidebar';
import Statusbar from '../../components/Statusbar';
import Tile, { ITile } from '../../components/Tile';

import toph from '../../assets/atla/Toph_Beifong.png';
import zuko from '../../assets/atla/Zuko.png';
import katara from '../../assets/atla/Katara.jpg';
import suki from '../../assets/atla/Suki.png';
import mai from '../../assets/atla/Mai.png';
import june from '../../assets/atla/June.png';
import aang from '../../assets/atla/Aang.png';
import ozai from '../../assets/atla/Ozai.png';
import appa from '../../assets/atla/Appa.png';
import tyLee from '../../assets/atla/Ty_Lee.png';
import jooDee from '../../assets/atla/Joo_Dee.png';
import zhao from '../../assets/atla/Zhao.png';
import Bumi from '../../assets/atla/Bumi.png';
import combustionMan from '../../assets/atla/Combustion_Man.png';
import cabbagenMan from '../../assets/atla/Cabbage_merchant.png';
import azula from '../../assets/atla/Azula.png';
import yue from '../../assets/atla/Yue.png';
import jet from '../../assets/atla/Jet.png';
import momo from '../../assets/atla/Momo.png';
import sokka from '../../assets/atla/Sokka.jpg';
import roku from '../../assets/atla/Roku.png';
import piandao from '../../assets/atla/Piandao.png';
import iroh from '../../assets/atla/Iroh.png';
import bosco from '../../assets/atla/Bosco.png';
import api from '../../services/api';

const characterList = [
  { id: 0, tileUp: true, name: 'Toph', image: toph },
  { id: 1, tileUp: true, name: 'Zuko', image: zuko },
  { id: 2, tileUp: true, name: 'Katara', image: katara },
  { id: 3, tileUp: true, name: 'Suki', image: suki },
  { id: 4, tileUp: true, name: 'Mai', image: mai },
  { id: 5, tileUp: true, name: 'June', image: june },
  { id: 6, tileUp: true, name: 'Aang', image: aang },
  { id: 7, tileUp: true, name: 'Ozai', image: ozai },
  { id: 8, tileUp: true, name: 'Appa', image: appa },
  { id: 9, tileUp: true, name: 'Ty Lee', image: tyLee },
  { id: 10, tileUp: true, name: 'Joo Dee', image: jooDee },
  { id: 11, tileUp: true, name: 'Zhao', image: zhao },
  { id: 12, tileUp: true, name: 'Bumi', image: Bumi },
  { id: 13, tileUp: true, name: 'Comb. man', image: combustionMan },
  { id: 14, tileUp: true, name: 'Cabbage man', image: cabbagenMan },
  { id: 15, tileUp: true, name: 'Azula', image: azula },
  { id: 16, tileUp: true, name: 'Yue', image: yue },
  { id: 17, tileUp: true, name: 'Jet', image: jet },
  { id: 18, tileUp: true, name: 'Momo', image: momo },
  { id: 19, tileUp: true, name: 'Sokka', image: sokka },
  { id: 20, tileUp: true, name: 'Roku', image: roku },
  { id: 21, tileUp: true, name: 'Piandao', image: piandao },
  { id: 22, tileUp: true, name: 'Iroh', image: iroh },
  { id: 23, tileUp: true, name: 'Bosco', image: bosco },
];

const Game: React.FC = () => {
  const [tiles, setTiles] = useState<ITile[]>([]);
  const [char, setChar] = useState<any>(null);
  function generateGame() {
    setTiles(characterList);
  }

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const roomId = sessionStorage.getItem('roomId');

    generateGame();
    io.socket.on('join room', () => {
      api
        .post('/games', { room: { roomId } })
        .then((res) => res.data)
        .then((game) => {
          console.log(game);

          if (userId === game.player1) {
            console.log('user1');

            const [randomChar] = characterList.filter(
              (character) => character.id === game.char1
            );
            setChar(randomChar);
          }
          if (userId === game.player2) {
            console.log('user2');

            const [randomChar] = characterList.filter(
              (character) => character.id === game.char2
            );
            setChar(randomChar);
          }
        });
    });
  }, []);

  return (
    <Container>
      <Statusbar />
      <Board>
        {tiles.map((tile: any) => {
          return <Tile key={tile.id} tileData={tile} />;
        })}
      </Board>
      <Sidebar randomChar={char} />
    </Container>
  );
};

export default Game;
