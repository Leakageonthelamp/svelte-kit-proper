import type { HandleClientError } from '@sveltejs/kit';

export const handleError: HandleClientError = async ({ error, event }) => {
	console.log('Message from client handleError');
	console.error(error, event);

	// Send to sentry or any logger service
	return {
		message: 'An unexpected error occurred',
		status: 500,
		code: 'UNEXPECTED_ERROR'
	};
};
