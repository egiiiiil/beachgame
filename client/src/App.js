import 'aframe'
import { Helmet } from 'react-helmet'
import {
	Campfire,
	Island,
	ComputerGroup1,
	ComputerGroup2,
	ComputerGroup3,
	Ocean,
	Airplane,
} from './Components/aframe/models/index.js'
import './App.css'

function App() {
	return (
		<div className='App'>
			<Helmet>
				<title>My Title</title>
				<script src='https://recast-api.donmccurdy.com/aframe-inspector-plugin-recast.js'></script>
			</Helmet>
			<a-scene inspector-plugin-recast>
				<Island />
				<Campfire />
				<Airplane />
				<ComputerGroup1 />
				<ComputerGroup2 />
				<ComputerGroup3 />

				<Ocean />
			</a-scene>
		</div>
	)
}

export default App
