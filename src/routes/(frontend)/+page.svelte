<script>
	import { Button } from '$components';
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	import { navigating } from '$app/stores';

	beforeNavigate(() => {
		console.log('beforeNavigate');
	});
	afterNavigate(() => {
		console.log('afterNavigate');
	});

	$: console.log($navigating);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={() => goto('about')}>Go to About</button>

<a href="/about">About</a>

<Button>Button</Button>
