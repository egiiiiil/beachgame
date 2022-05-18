import IslandGLB from './Island.glb'

const Island = () => {
	return (
		<a-gltf-model
			src={IslandGLB}
			animation-mixer="clip: *;"
			shadow></a-gltf-model>
	)
}

export default Island
