<script>
	import Title from '$lib/Title.svelte';
	import Counter from '$lib/Counter.svelte';
	import Story from '$lib/Story.svelte';
	import Details from '$lib/Details.svelte';
	import FAQ from '$lib/FAQ.svelte';
	import Registration from '$lib/Registration.svelte';

	const storyTitle = `Tacos Tacos and more Tacos`;
	const storyParagraphs = [`Place Taco Ocho Paragraph Here`];
</script>

<Title iteration="First Annual" title="Seattle Taco Ocho" />
<Counter />
<div class="flex justify-center">
	<div class="item-center mx-10 w-4xl flex-col">
		<Story {storyTitle} {storyParagraphs} />
		<Details />
		<FAQ />
		<Registration />
	</div>
</div>
