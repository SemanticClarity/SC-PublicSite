import { Elements, Router, Route } from "@augmentedjs/elements";
import Home from "./views/home.jsx";

import Mediator from "./mediator.js";

const MAIN_MOUNT = "#main";

const home = () => <Home name="home" mediator={Mediator} channel="main" identifier="main"/>;

// TODO: Should be some kind of view component
const solutions = () => <div>Solutions</div>;
const tools = () => <div>Tools</div>;

const router = () => {
  return (
    <Router transitionOut={250} transitionIn={250}>
      <Route path="" component={home} mount={MAIN_MOUNT} />
      <Route path="home" component={home} mount={MAIN_MOUNT} />
      <Route path="solutions" component={solutions} mount={MAIN_MOUNT} />
      <Route path="tools" component={tools} mount={MAIN_MOUNT} />
    </Router>
  );
};

export default router;
