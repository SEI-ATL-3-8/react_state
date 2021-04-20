import { useState } from 'react'

import './App.css';
import ColorChanger from './components/ColorChanger';
import Counter from './components/Counter'

function App() {
  const [showing, setShowing] = useState('color-changer')

  return (    
    <div className="container">
      <nav>
        <span onClick={() => { setShowing('color-changer')}}>ColorChanger</span>
        {' '}
        <span onClick={() => { setShowing('counter') }}>Counter</span>
      </nav>

      { showing === 'color-changer' ? 
        <ColorChanger />
        : null
      }

      {showing === 'counter' ? 
        <Counter />
        : null
      }
    </div>
  );
}

export default App;
