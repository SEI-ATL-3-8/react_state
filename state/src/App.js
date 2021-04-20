import { useState } from 'react'

import './App.css';
// import ColorChanger from './components/ColorChanger';
// import Counter from './components/Counter'

function App() {
  const [color, setColor] = useState('blue')
  const [number, setNumber] = useState(0)
  const [showing, setShowing] = useState('color-changer')

  return (    
    <div className="container">
      <nav>
        <span onClick={() => { setShowing('color-changer')}}>ColorChanger</span>
        {' '}
        <span onClick={() => { setShowing('counter') }}>Counter</span>
      </nav>

      { showing === 'color-changer' ? 
        <div>
          <div className={`box ${color}`} />
          <div className="buttons-container">
            <button onClick={() => { setColor('red') }}>Red</button>
            <button onClick={() => { setColor('blue') }}>Blue</button>
            <button onClick={() => { setColor('green') }}>Green</button>
          </div>
        </div>
        : null
      }

      {showing === 'counter' ? 
        <div>
          <div>{number}</div>
          <button onClick={() => { setNumber(number + 1) }}>+</button>
          <button onClick={() => { setNumber(number - 1) }}>-</button>
        </div>
        : null
      }
    </div>
  );
}

export default App;
