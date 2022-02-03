import React from 'react'
import { AppContainer } from './components/AppContainer'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	*{
		font-family: 'Roboto', sans-serif;
	}
	body{
		padding: 0;
		margin:0;
		box-sizing: border-box;
	}
`

function App() {
	return (
		<div>
			<GlobalStyle />
        	<AppContainer />
		</div>	
	)
}

export default App
