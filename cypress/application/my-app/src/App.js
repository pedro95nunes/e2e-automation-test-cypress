
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './Home';
import SecondPage from './SecondPage';

function App() {

  return (
    //<div>
      //<button data-testid="button-1" onClick={() => handleClick(1)}>Button 1</button>
      //<button data-testid="button-2" onClick={() => handleClick(2)}>Button 2</button>
    //</div>

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/second' element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;