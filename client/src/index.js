//import 'aframe'
let state = {}
const stateCreator = () => {
	state = {
		comp1: false,
		comp2: false,
	}
	sessionStorage.setItem('state', JSON.stringify(state))
}
stateCreator()
state = JSON.parse(sessionStorage.getItem('state'))
if (state) {
	console.log('State Exist')
}
const stateUpdater1 = () => {
	document
		.querySelector('#updatecomp1State')
		.addEventListener('click', function () {
			// Refresh stuff would go here!
			console.log('comp1')
			state.comp1 = true
			sessionStorage.setItem('state', JSON.stringify(state))
		})
}
const stateUpdater2 = () => {
	document
		.querySelector('#updatecomp2State')
		.addEventListener('click', function () {
			// Refresh stuff would go here!
			console.log('comp2')
			state.comp2 = true
			sessionStorage.setItem('state', JSON.stringify(state))
		})
}
