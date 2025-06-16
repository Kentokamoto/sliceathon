<script>
	import { base } from '$app/paths';
	import mascotThumb from '$lib/assets/Slice-a-Thon_Mascot_thumb.webp?inline';
</script>

<a href="{base}/">
	<header class="bg-yellow-cheese flex w-full flex-row">
		<img
			class="m-4 w-8 flex-none place-content-center object-scale-down"
			src={mascotThumb}
			alt="slice-a-thon mascot"
		/>
		<div class="flex-1 place-content-center">
			<h2 class="text-red-sauce text-center text-xl font-extrabold sm:text-3xl">First Annual</h2>
			<h1 class="text-red-sauce text-center text-2xl font-black sm:text-4xl">
				Seattle Slice-A-Thon
			</h1>
		</div>
		<img
			class="m-4 w-8 flex-none place-content-center object-scale-down"
			src={mascotThumb}
			alt="slice-a-thon mascot"
		/>
	</header>
</a>
