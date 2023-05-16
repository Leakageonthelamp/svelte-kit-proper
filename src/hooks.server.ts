import type { Handle, HandleFetch, HandleServerError } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const authUserHandle: Handle = async ({ event, resolve }) => {
	const { locals, cookies, url } = event;

	if (!url.pathname.startsWith('/api')) {
		const token = cookies.get('token');

		locals.user = token ? { name: 'John', id: 1 } : undefined;
	}

	const response = await resolve(event);

	return response;
};

export const handle = sequence(authUserHandle);

export const handleFetch: HandleFetch = async ({ request, event, fetch }) => {
	if (request.url.startsWith('https://dummyjson.com/')) {
		const cookie = event.request.headers.get('cookie');

		if (cookie) {
			request.headers.set('cookie', cookie);
		}
	}
	return fetch(request);
};

export const handleError: HandleServerError = async ({ error, event }) => {
	console.log('Message from server handleError');
	console.error(error, event);

	// Send to sentry or any logger service
	return {
		message: 'An unexpected error occurred',
		status: 500,
		code: 'UNEXPECTED_ERROR'
	};
};
