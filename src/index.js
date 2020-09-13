import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
	console.log(props);
	// <Header course={course} />
	return (
		<div>
		<h1>
		{props.course}
		</h1>
		</div>
	)
}
const Content = (props) => {
	//<Content part={part1} exercise={exercises1} />
	return (
		<div>
		<p>
		{props.part1} {props.exercise1}
		</p>
		<p>
		{props.part2} {props.exercise2}
		</p>
		<p>
		{props.part3} {props.exercise3}
		</p>
		</div>
	)
}

const Total = (props) => {
	return (
		<div>
		<p>
		Number of exercises {props.total}
		</p>
		</div>
	)
}

const App = () => {
	const course = 'Half Stack application development'
	const part1 = {
		name: 'Fundamentals of React',
		exercises: 10
	}
	const part2 = {
		name: 'Using props to pass data',
		exercises:  7
	}
	const part3 = {
		name: 'State of a component',
		exercises: 14
	}

	return (
		<div>
		<Header course={course} />
		<Content part1={part1.name} exercise1={part1.exercises} 
		part2={part2.name} exercise2={part2.exercises}
		part3={part3.name} exercise3={part3.exercises} />
		<Total total={part1.exercises + part2.exercises + part3.exercises} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
