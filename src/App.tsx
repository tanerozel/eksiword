import React, { useState, useEffect } from 'react';
import AppContent from './component/AppContent';
import Form from './component/Form';
import LikeText from './component/LikeText';
import Logo from './component/Logo';
import { AppProvider } from './contex/AppContex';
import { Visualisation } from './component/Visualisation';
import { config } from "./config";
import axios from "axios";
axios.defaults.baseURL = config.BASEURL;

function App() {

  return (
    <div className="App">
      <AppProvider>
        <AppContent>
          <Logo />
          <Form />
          <Visualisation />
          <LikeText />
        </AppContent>
      </AppProvider>
    </div>
  );
}

export default App;
