import 'aframe'
import {
	Campfire,
	Island,
	ComputerGroup,
	Ocean,
} from './Components/aframe/models/index.js'
import './App.css'

function App() {
	return (
		<div className="App">
			<a-scene>
				<a-entity position="0 0 0">
					<Island />
					<Campfire />
					<ComputerGroup />
					<Ocean />
				</a-entity>
			</a-scene>
		</div>
	)
}

export default App
