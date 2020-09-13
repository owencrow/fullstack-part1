import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const [ counter, setCounter ] = useState(0)

	setTimeout(
		() => setCounter(counter + 1),
		1000
	)

	return (
		<div>{counter}</div>
	)
}

let counter = 1

const refresh = () => {

	ReactDOM.render(
		<App counter={counter} />, 
		document.getElementById('root')
	)
}
refresh()
counter += 1
refresh()
counter += 1
refresh()

// ReactDOM.render(<App />, document.getElementById('root'))
