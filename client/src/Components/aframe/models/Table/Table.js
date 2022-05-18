import TableGLB from './Table.glb'

const Table = () => {
	return (
		<a-gltf-model
			src={TableGLB}
			animation-mixer="clip: *;"
			position="0 0.313 0"
			scale="2 0.890 2"
			shadow></a-gltf-model>
	)
}

export default Table
