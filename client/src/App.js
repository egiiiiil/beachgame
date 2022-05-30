import 'aframe'
import {
	Campfire,
	Island,
	ComputerGroup,
	Ocean,
	Airplane,
} from './Components/aframe/models/index.js'
import './App.css'

function App() {
	return (
		<div className="App">
			<a-scene>
				<a-sky color="#ACEBFF" />
				<Airplane position="0 0 0" />
				<a-entity position="0 0 0">
					<Island />
					<Campfire />
					<ComputerGroup />
				</a-entity>
				<Ocean />
			</a-scene>
		</div>
	)
}

export default App
