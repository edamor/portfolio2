import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// const Nav = lazy(() => import('./components/Nav/Nav'))
// const Child = lazy(() => import('./routes/Child'))
import Nav from './components/Nav/Nav';
import Child from './routes/Child';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <Suspense fallback={<div className="loading-screen"><p className="h2 text-light-blue">Building...</p></div>} > */}

          <div className="App">
            <Nav />
              <Switch>
                <Route exact path="/" children={<Child />} />
                <Route path="/:page" children={<Child />} />
              </Switch>
          </div>  
        {/* </Suspense> */}

    </BrowserRouter>
  );
}

export default App;
