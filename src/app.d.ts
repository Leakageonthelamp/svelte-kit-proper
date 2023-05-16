// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			status?: number;
			message: string;
			code?: string;
		}
		interface Locals {
			user?: {
				id: number;
				name: string;
			};
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
