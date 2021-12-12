export function register() {
	let serviceWorkerURL = null
	// const serviceWorkerURL = `${process.env.PUBLIC_URL}/serviceWorker.js`
	// Check for service worker browser support
	const isLocalhost =
		location.hostname === "localhost" || location.hostname === "127.0.0.1"

	if (isLocalhost) {
		serviceWorkerURL = "./serviceWorker.js"
	} else {
		serviceWorkerURL = "sw.js"
	}
	
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register(serviceWorkerURL)
			.then((registration) => {
				console.log(
					"Registration successful! It's scope is: ",
					registration.scope,
				)
			})
			.catch((error) => {
				console.log("Service worker failed to register. Error: ", error)
			})
	}
}
