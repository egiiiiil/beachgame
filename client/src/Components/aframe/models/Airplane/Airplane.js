import AirplaneGLB from './Airplane.glb'

const Airplane = () => {
	return (
		<a-gltf-model
			src={AirplaneGLB}
			animation-mixer="clip: *;"
			shadow
			scale="0.1 0.1 0.1"
			position="133.734 0.458 -168.916"
			rotation="45.354 -12.401 -32.174"></a-gltf-model>
	)
}

export default Airplane
