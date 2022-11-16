import './App.css';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import { useEffect } from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Welcome from './Components/Welcome';
import Contact from './Components/Contact';
import About from './Components/About';
import Resume from './Components/Resume';
import Works from './Components/Works';
import ThankYou from './Components/ThankYou';

function App() {

  useEffect(() => {
    document.title = 'David Williford';
  }, []);

  return (
    <Router>

      <div className="App">
        <Header/>
          <Routes>
            <Route exact path="/PersonalSite" element={ <Welcome/> } />
            <Route exact path='/Welcome' element={ <Welcome /> }/>
            <Route exact path='/About' element={ <About /> }/>
            <Route exact path='/Resume' element={ <Resume /> }/>
            <Route exact path='/Works' element={ <Works /> }/>
            <Route exact path='/Contact' element={ <Contact /> }/>
            <Route exact path='/ThankYou' element={ <ThankYou/> }/>
            <Route exact path='/' element={ <Welcome /> }/>
          </Routes>
        <Footer/>
      </div>

    </Router>

  );
}

export default App;
