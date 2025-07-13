<script>
	import Story from '$lib/Story.svelte';
	import Details from '$lib/Details.svelte';
	import FAQ from '$lib/FAQ.svelte';
	import Registration from '$lib/Registration.svelte';
	import Title from '$lib/Title.svelte';
	import Counter from '$lib/Counter.svelte';

	// Placeholders:
	const storyTitle = "Slice-A-Thon is Born!"
	const storyParagraphs = [
		`While the exact moment and who said what is still unclear, one thing is for certain 
		– slice-a-thon was born on a cool fall evening in Seattle. A group of friends were gathered
		 at a bar after completing a weekly run around the Fremont neighborhood. As the drinks and 
		 pretzels were flowing, the conversation bounced back and forth between two of the group’s 
		 favorite topics – pizza and running. There was discussion about which style reigns 
		 supreme, upcoming races and the genius that is pizza by the slice.`,
		`As the night carried on, the two conversations slowly moved closer and closer together
		until someone finally said “well, couldn’t we do both?” And just like that, the clouds 
		parted, a rainbow emerged across the sky and a cat and a dog high-fived, all as if to 
		emphatically say “yes, we can do both!”`,
		`From there, the friends began drawing up the plans for the first annual slice-a-thon. The 
		vision was to create a uniquely fun race, where participants would run a half marathon 
		distance while also stopping at some local pizza by the slice places along the way. 
		Essentially run, eat, repeat until the finish line.`,
		`If you’ve been eating pizza and going for occasional runs, this is the event you’ve been 
		training your whole life for. And if you’ve never done one or both of those things, you’re 
		especially in for a treat. The road to slice-a-thon glory is paved in sauce and cheese.`
	];
</script>

<Title iteration="First Annual" title="Seattle Slice-A-Thon" />
<Counter />
<div class="flex justify-center">
	<div class="item-center mx-10 w-4xl flex-col">
		<Story {storyParagraphs} {storyTitle}/>
		<Details />
		<FAQ />
		<Registration />
	</div>
</div>
