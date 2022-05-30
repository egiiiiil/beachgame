import OceanGLB from './Ocean.glb'

const Ocean = () => {
	return (
		<a-gltf-model
			src={OceanGLB}
			animation="property: object3D.position.y; to: -12; dir: alternate; dur: 2000; loop: true"
			position="0 -13 0"
			scale="1 0.200 1"
			shadow></a-gltf-model>
	)
}

export default Ocean
