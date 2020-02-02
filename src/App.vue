<template>
	<Div ID = "App">
		<router-view />
	</Div>
</template>

<style lang = "scss">
	*, *::before, *::after { box-sizing: border-box }

	html {
		&, body {
			margin: 0;
			overflow: hidden;
		}

		body { background-color: initial }
	}
</style>

<script>
	export default {};
</script>