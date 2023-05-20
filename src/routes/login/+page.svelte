<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import type { ActionData, Snapshot } from './$types';

	// let username: string = '';
	// let password: string = '';

	// export const snapshot: Snapshot<{ username: string; password: string }> = {
	// 	capture: () => {
	// 		return { username, password };
	// 	},
	// 	restore: (value) => {
	// 		username = value.username;
	// 		password = value.password;
	// 	}
	// };

	// const login = async () => {
	// 	const response = await fetch('/api/login', {
	// 		method: 'POST',
	// 		body: JSON.stringify({ username, password })
	// 	});
	// 	const resJSON = await response.json();
	// 	if (response.ok) {
	// 		// goto('/', { invalidateAll: true });
	// 		invalidateAll();
	// 	} else {
	// 		alert(resJSON.message);
	// 	}
	// };

	export let form: ActionData;
	$: console.log($page);
</script>

<form method="POST" action="?/login&redirectTo={$page.url.pathname}" use:enhance>
	<label for="username">Username</label><br />
	<input
		value={form?.username || ''}
		id="username"
		name="username"
		type="text"
		placeholder="Username"
	/>
	{#if form?.usernameMissing}
		<p style="color: red;">Username is required</p>
	{/if}
	<br />

	<label for="password">Password</label><br />
	<input id="password" name="password" type="password" placeholder="Password" />
	{#if form?.passwordMissing}
		<p style="color: red;">Password is required</p>
	{/if}
	<br /><br />

	<button type="submit">Login</button>
</form>
