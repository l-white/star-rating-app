import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <StarRating
        style={{ backgroundColor: 'lightblue' }}
        onDoubleClick={(e) => alert('double click')}
      />
    </div>
  )
}

const Star = ({ selected, onSelect = (f) => f }) => (
  <FaStar color={selected ? 'orange' : 'grey'} onClick={onSelect} />
)

const createArray = (length) => [...Array(length)]

const StarRating = ({ style = {}, totalStars = 5, ...props }) => {
  const [selectedStars, setSelectedStars] = useState(0)
  return (
    <div style={{ padding: '5px', ...style }} {...props}>
      {createArray(totalStars).map((star, i) => (
        <Star
          key={i}
          selected={i < selectedStars}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </div>
  )
}

export default App
