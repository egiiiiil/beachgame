import CampfireGLB from './Campfire.glb'

const Campfire = () => {
	return (
		<a-gltf-model
			src={CampfireGLB}
			animation-mixer="clip: *;"
			shadow
			position="0 0 -4"></a-gltf-model>
	)
}

export default Campfire
