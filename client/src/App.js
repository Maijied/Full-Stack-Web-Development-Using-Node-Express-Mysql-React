import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';


function App() {
 
  return <div className="App">
    <Router>
      <nav class="navMenu">
        <Link to="/">Home</Link>
        <Link to="/createpost">Post</Link>
        <Link to="#">About</Link>
        <Link to="#">Work</Link>
        <div class="dot"></div>
      </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createpost" exact component={CreatePost} />
        </Switch>
      </Router>
  </div>;
}
export default App;
