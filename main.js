import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './components/App.jsx'

const PORT = 3000
const app = express();

// creating a react components
// App div -> h1
// const h1 = createElement('h1', null, 'Hello, from Server')
// const App = createElement('div', null, h1)

app.get('/', (req, res) => {
	const appHTML = renderToString(<App/>)
	res.send(`
		<!DOCTYPE>
		<html lang="en">
			<head>
				<title>React SSR App</title>
			</head>
			<body>
				${appHTML}
			</body>
		</html>
	`);
})

app.listen(PORT, () => {
	console.log(`server is running on : ${PORT}`)
})