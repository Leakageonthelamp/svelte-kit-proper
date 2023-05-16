import { redirect, error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	// const products = (await import('$lib/mock/dummy-prod.json')).default;
	// const product = products.products.find((p) => p.id === +params.id);
	const productRes = await fetch(`https://dummyjson.com/products/${params.id}`);

	if (!productRes.ok) {
		throw error(productRes.status, {
			message: 'Product not found',
			code: 'NOT_FOUND'
		});
	}

	const product = await productRes.json();

	const comments = fetch('https://dummyjson.com/comments').then((res) => res.json());

	return {
		product,
		title: product.title,
		description: product.description,
		nested: {
			comments
		}
	};
};
