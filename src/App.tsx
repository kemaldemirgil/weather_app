import './App.css';
import Enter from './pages/Enter/index'
import Saved from './pages/Saved/index';
import Search from './pages/Search/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="main">
        <Route exact path="/">
          <Enter />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/saved">
          <Saved />
        </Route>
      </div>

    </Router>
  );
}

export default App;
