import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Game from './pages/Game';
import Lobby from './pages/LobbyRoom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Lobby} />
      <Route path='/game/:idRoom' component={Game} />
    </BrowserRouter>
  );
};

export default Routes;
