import { json, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ cookies }) => {
	cookies.delete('token', { path: '/' });

	return json({ success: true, message: 'Logged out' });
};
