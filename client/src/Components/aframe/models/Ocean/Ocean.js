import OceanGLB from './Ocean.glb'

const Ocean = () => {
	return (
		<a-gltf-model
			src={OceanGLB}
			animation-mixer="clip: *;"
			position="0 -13.456 0"
			scale="1 0.200 1"
			shadow></a-gltf-model>
	)
}

export default Ocean
