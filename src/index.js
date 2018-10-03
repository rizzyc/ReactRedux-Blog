import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import PostsIndex from "./components/Posts_index";
import PostsNew from "./components/Posts_new";
import PostsShow from "./components/Posts_show";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          {/* Stephen doesn't know about the exact param so he switches the ordering of the routes, but this makes more sense. Thanks Wes Bos */}
          <Route exact path="/" component={PostsIndex} />
          <Route path="/posts/new" component={PostsNew} />
          <Route exact path="/posts/:id" component={PostsShow} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
