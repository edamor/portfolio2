import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import Child from './routes/Child';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        
        <Switch>
          <Route exact path="/" children={<Child />} />
          <Route path="/:page" children={<Child />} />
        </Switch>
      </div>  
    </BrowserRouter>
  );
}

export default App;
