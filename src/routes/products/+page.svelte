<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	$: products = data.products;
</script>

<h2 class="text-2xl font-bold">{data.title}</h2>

<button
	on:click={() => {
		// invalidate((url) => url.hostname === 'dummyjson.com');
		invalidate('app:productsServerLoad');
	}}
>
	Re-run load function
</button>

{#if products && products.length > 0}
	<div class="grid grid-cols-3 gap-4">
		{#each products as product (product.id)}
			<div>
				<img src={product.thumbnail} alt={product.title} />
				<h3 class="mt-2 text-xl font-bold">
					<a href="/product/{product.id}">{product.title}</a>
				</h3>
				<p>{product.description}</p>
			</div>
		{/each}
	</div>
{/if}
