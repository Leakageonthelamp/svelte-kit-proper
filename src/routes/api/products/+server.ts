import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';

export const GET: RequestHandler = async ({ fetch, locals }) => {
	const response = await fetch(`${env.API_MOCK_URL}/products`);
	// const products = (await import('$lib/mock/dummy-prod.json')).default;
	if (response.ok) {
		const resJSON = await response.json();
		return json(resJSON, { status: 200 });
	}

	throw error(response.status, response.statusText);
};

export const POST: RequestHandler = async ({ request }) => {
	const product = await request.json();

	console.log(product);
	return json(product, { status: 201 });
};
