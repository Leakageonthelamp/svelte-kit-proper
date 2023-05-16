import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, depends }) => {
	// const products = (await import('$lib/mock/dummy-prod.json')).default;
	const response = await fetch('api/products');
	depends('app:productsServerLoad');
	if (response.ok) {
		return {
			products: response.json()
		};
	}

	const errorJSON = await response.json();

	throw error(response.status, errorJSON.message);
};
