import React from 'react'
import Home from './src/screens/Home'
import {Provider} from 'react-redux'
import store from './src/redux/store'

const App = () =>(
	<Provider store={store}>
		<Home />
	</Provider>
	
)

export default App
