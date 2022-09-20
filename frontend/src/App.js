import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotsBrowser from "./components/SpotsBrowser";
import SpotDetails from "./components/SpotDetails/SpotDetails";
import CreateSpot from "./components/CreateSpot/CreateSpot";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

          <Route exact path="/">
            <SpotsBrowser />
          </Route>

          <Route path="/spots/:spotId">
            <SpotDetails />
          </Route>

          <Route path="/new-spot">
            <CreateSpot />
          </Route>

          <Route>
            PageNotFound
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
