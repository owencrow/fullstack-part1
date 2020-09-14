import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick,text}) => {
	return (
		<button onClick={handleClick}>
		{text}
		</button>
	)
}


const App = () => {
	const [ counter, setCounter ] = useState(0)

	const increaseByOne = () => setCounter(counter + 1)
	const decreaseByOne = () => setCounter(counter - 1)

	const setToZero = () => setCounter(0)

	return (
		<div>
		<Display counter={counter}/>
		<Button
		handleClick={increaseByOne}
		text='plus'
		/>
		<Button
		handleClick={setToZero}
		text='zero'
		/>     
		<Button
		handleClick={decreaseByOne}
		text='minus'
		/>           
		</div>
	)

}

let counter = 1

const refresh = () => {

	ReactDOM.render(
		<App counter={counter} />, 
		document.getElementById('root')
	)
}
//refresh()
//counter += 1
//refresh()
//counter += 1
refresh()

// ReactDOM.render(<App />, document.getElementById('root'))
