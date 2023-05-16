<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import { invalidateAll } from '$app/navigation';

	export let data: LayoutData;

	const logout = async () => {
		const response = await fetch('/api/logout', { method: 'POST' });
		if (response.ok) {
			invalidateAll();
		}
	};
</script>

<svelte:head>
	<title>Svelte Page {$page.data.title ? `- ${$page.data.title}` : ''}</title>
	{#if $page.data.description}
		<meta name="description" content={$page.data.description} />
	{/if}
</svelte:head>

<section class="container mx-auto px-4">
	{#if data.user}
		<p>Logged in as {data.user.name}</p>
	{/if}
	<nav class="p-2 mb-2 flex justify-between items-center bg-gray-200 rounded">
		<div>
			<a href="/">Home</a>
			<a href="/products">Products</a>
			{#if !data.user}
				<a href="/login">Login</a>
			{/if}
		</div>

		{#if data.user}
			<button class="bg-blue-400" on:click={() => logout()}>Logout</button>
		{/if}
	</nav>

	<slot />
</section>
