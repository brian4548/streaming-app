import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route patch="/" exact component={StreamList} />
          <Route patch="/streams/new" exact component={StreamCreate} />
          <Route patch="/streams/edit" exact component={StreamEdit} />
          <Route patch="/streams/delete" exact component={StreamDelete} />
          <Route patch="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
