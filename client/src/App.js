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
import navmesh from './navmesh/navmesh.gltf'
import './App.css'

function App() {
	return (
		<div className='App'>
			<Helmet>
				<title>Beach Game</title>
				<script src='https://recast-api.donmccurdy.com/aframe-inspector-plugin-recast.js'></script>
			</Helmet>
			<a-scene inspector-plugin-recast>
				<a-entity position='0 3.450 0'>
					<Island />
					<Campfire />
					<ComputerGroup1 />
					<ComputerGroup2 />
					<ComputerGroup3 />
				</a-entity>
				{/* 				<Airplane />
				<Ocean /> */}
			</a-scene>
		</div>
	)
}

export default App
