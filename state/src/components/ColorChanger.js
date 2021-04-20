import { useState } from 'react'

const ColorChanger = () => {
  const [color, setColor] = useState('blue')

  return (
    <div>
      <div className={`box ${color}`} />
      <div className="buttons-container">
        <button onClick={() => { setColor('red') }}>Red</button>
        <button onClick={() => { setColor('blue') }}>Blue</button>
        <button onClick={() => { setColor('green') }}>Green</button>
      </div>
    </div>
  )
}

export default ColorChanger