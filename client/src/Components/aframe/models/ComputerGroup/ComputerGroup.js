import Computer from '../Computer/Computer.js'
import Table from '../Table/Table.js'

const ComputerGroup = () => {
	return (
		<a-entity position="7 -0.656 8" rotation="0 50 0">
			<Computer />
			<Table />
		</a-entity>
	)
}

export default ComputerGroup
