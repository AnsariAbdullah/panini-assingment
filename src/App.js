import React from 'react';
import Slider from './components/slider';

function App() {
  return (
    <div className="App">
			<Slider 
				minVal={1}
				maxVal={100}
				startValue='25k'
				endValue='1Cr'
			/>
    </div>
  );
}

export default App;
