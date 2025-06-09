<script lang="ts">
	import '../app.css';
	import Title from '$lib/Title.svelte';
	import Counter from '$lib/Counter.svelte';

	let { children } = $props();
</script>

<main class="bg-crust w-full">
	<div class="w-full place-content-center">
		<Title />
		<Counter />
		<div class="flex justify-center">
			<div class="item-center mx-10 w-4xl flex-col">
				{@render children()}
			</div>
		</div>
	</div>
</main>
