<script>
	import Title from '$lib/Title.svelte';
	import Counter from '$lib/Counter.svelte';
	import Story from '$lib/Story.svelte';
	import Details from '$lib/Details.svelte';
	import FAQ from '$lib/FAQ.svelte';
	import Registration from '$lib/Registration.svelte';

	const storyTitle = `Tacos Tacos and more Tacos`;
	const storyParagraphs = [`Place Taco Ocho Paragraph Here`];
	const eventDate = new Date('August 8, 2025 7:00 PM PDT');
	const eventLocation = 'Northgate Station';
	const faqs = [];
	const jotformIframeId = 'JotFormIFrame-251845910128154';
</script>
<svelte:head>
	<title>2025 Seattle Taco Ocho</title>
	<meta name="description" content="Eight miles, eight tacos" />
</svelte:head>

<Title iteration="First Annual" title="Seattle Taco Ocho" />
<Counter judgementDate={eventDate.getTime()}/>
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
				title="2025 Taco Ocho Registration"
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
