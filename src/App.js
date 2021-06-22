import './App.css';
import AllPLaygrounds from './FetchData/AllPlaygrounds';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QuestionbyLevel from './FetchData/QuestionsByLevel';
import Question from './FetchData/Question';
import Playground from './components/Playground';
import Nav from './components/Nav';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={AllPLaygrounds}/>
          <Route path="/playground/:id" component={Playground}/>
          <Route path="/level/:id" component={QuestionbyLevel}/>
          <Route path="/question/:id" component={Question}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
