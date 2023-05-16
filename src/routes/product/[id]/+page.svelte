<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: product = data.product;
</script>

<div class="flex flex-col items-center border rounded py-4">
	<img src={product?.thumbnail} alt={product?.title} />
	<h1 class="my-2 text-xl font-bold">{product?.title}</h1>
	<p>{product?.description}</p>

	{#await data.nested.comments}
		Loading...
	{:then data}
		{#each data.comments as comment (comment.id)}
			<p>{comment.body}</p>
		{/each}
	{/await}
</div>
