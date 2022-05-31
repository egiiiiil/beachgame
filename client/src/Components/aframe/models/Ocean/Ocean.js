import OceanGLB from './Ocean.glb'

const Ocean = () => {
	return (
		<a-gltf-model
			src={OceanGLB}
			animation='property: object3D.position.y; to: -11.822; dir: alternate; dur: 2000; loop: true'
			position='0 -14.673 0'
			scale='1 0.200 1'
			shadow></a-gltf-model>
	)
}

export default Ocean
