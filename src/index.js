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
	const parts = [
		{
			name: 'Fundamentals of React',
			exercises: 10
		},
		{
			name: 'Using props to pass data',
			exercises:  7
		},
		{
			name: 'State of a component',
			exercises: 14
		}
	]

	return (
		<div>
		<Header course={course} />
		<Content
		part1={parts[0].name} exercise1={parts[0].exercises} 
		part2={parts[1].name} exercise2={parts[1].exercises}
		part3={parts[2].name} exercise3={parts[2].exercises} />
		<Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
