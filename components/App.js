import React, { Component } from 'react';
import StartButton from './StartButton.js';
import CreateMaker from './CreateMaker.js';
import OpenCdp from './OpenCdp.js';
import LockGnome from './LockGnome.js';
import DrawDai from './DrawDai.js';
import WipeDebt from './WipeDebt.js';
import ShutCdp from './ShutCdp.js';

class App extends Component {

  render() {
    return (
      <div>
          <StartButton/>
          <CreateMaker/>
          <OpenCdp/>
          <LockGnome/>
          <DrawDai/>
          <WipeDebt/>
          <ShutCdp/>
      </div>
    );
  }
}

export default App;