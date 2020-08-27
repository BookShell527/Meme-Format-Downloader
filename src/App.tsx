import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContextProvider from "./context/context";
import Home from './pages/Home';
import Error from './pages/Error'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Error} />
        </Switch>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App;
