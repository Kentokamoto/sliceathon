<script>
	import Title from '$lib/Title.svelte';
	import Counter from '$lib/Counter.svelte';
	import Story from '$lib/Story.svelte';
	import Details from '$lib/Details.svelte';
	import FAQ from '$lib/FAQ.svelte';
	import Registration from '$lib/Registration.svelte';

	const storyTitle = `Egg Nog Leg Jog`;
	const storyParagraphs = [``];
	const eventDate = new Date('November 15, 2025 10:00 AM PDT');

	const eventLocation = 'Woodland Park';
	const faqs = [
		{
			title: 'Is this a real race?',
			description: `yes`
		}
	];
	const jotformIframeId = 'JotFormIFrame-251845910128154';
</script>

<svelte:head>
	<title>2025 Seattle Egg Nog Leg Jog</title>
	<meta name="description" content="Prime your gut" />
</svelte:head>

<Title iteration="First Annual" title="Seattle Egg Nog Leg Jog" />
<Counter judgementDate={eventDate.getTime()} />
<div class="flex justify-center">
	<div class="item-center mx-10 w-4xl flex-col">
		<Story {storyTitle} {storyParagraphs} />
		<Details {eventDate} {eventLocation}>
			<div
				class="strava-embed-placeholder"
				data-embed-type="route"
				data-embed-id="3365426768628971324"
				data-style="standard"
				data-map-hash="10.19/47.662/-122.3215"
				data-from-embed="true"
			></div>
		</Details>
		<FAQ {faqs} />
		<Registration iframeId={jotformIframeId}>
			<iframe
				id={jotformIframeId}
				title="2025 Egg Nog Leg Jog Registration"
				allowtransparency
				allow="geolocation; microphone; camera; fullscreen; payment"
				src="https://form.jotform.com/251845910128154"
				frameborder="0"
				style="border:none;"
				scrolling="no"
				width="100%"
				height="200px"
				class="rounded-lg"
			>
			</iframe>
		</Registration>
	</div>
</div>
