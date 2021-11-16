// Check for service worker browser support
if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("serviceWorker.js")
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
