<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="bg-crust w-full">
	<div class="w-full place-content-center">
		{@render children()}
	</div>
</main>
