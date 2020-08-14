import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/Home';
import Gardening from './pages/Gardening';
import Travel from './pages/Travel';
import Recipes from "./pages/Recipes";
import Blog from "./pages/Blog";
import FurBabies from "./pages/FurBabies";
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router basename="/life-itself">
        <div>
          <Nav />
          <Switch>
            <Route exact path="/life-itself" component={About} />
            <Route exact path="/" component={About} />
            <Route exact path="/gardening" component={Gardening} />
            <Route exact path="/travel" component={Travel} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/furbabies" component={FurBabies} />
            <Route exact path="/recipes" component={Recipes} />
          </Switch>
          <Footer />
        </div>
        </Router>
    </div>
  );
}

export default App;
