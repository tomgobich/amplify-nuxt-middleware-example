<template>
	<div>
		<h1>You must be logged in to see me</h1>
		<nuxt-link to="/">Go home</nuxt-link>
	</div>
</template>

<script>
export default {
	middleware: 'auth'
}
</script>
