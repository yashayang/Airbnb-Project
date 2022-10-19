import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotsBrowser from "./components/SpotsBrowser";
import SpotDetails from "./components/SpotDetails/SpotDetails";
import CreateSpot from "./components/CreateSpot/CreateSpot";
// import AddSpotImgForm from "./components/CreateSpot/AddSpotImg";
// import UpdateSpotForm from "./components/UpdateSpot/UpdateSpot";
import AllReviewsforSpot from "./components/Reviews/AllReviewsforSpot";
import CreateReview from "./components/Reviews/CreateReview";
import MySpots from "./components/MySpots/MySpots";
import MyReviews from "./components/MyReviews/MyReviews";

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

          {/* <Route exact path="/:spotId/images">
              <AddSpotImgForm />
          </Route>

          <Route exact path="/:spotId/edit">
              <UpdateSpotForm />
          </Route> */}

          <Route exact path="/:spotId/reviews">
              <AllReviewsforSpot />
          </Route>

          <Route exact path="/:spotId/create-reviews">
            <CreateReview />
          </Route>

          <Route exact path="/my-spots">
            <MySpots />
          </Route>

          <Route exact path="/my-reviews">
            <MyReviews />
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
