import ComputerGLB from './Computer.glb'

const Computer = () => {
	return (
		<a-gltf-model
			src={ComputerGLB}
			animation-mixer='clip: *;'
			position='0.038 0.822 -0.317'
			rotation='7 4 -4'
			scale='3 3 3'
			shadow></a-gltf-model>
	)
}

export default Computer
