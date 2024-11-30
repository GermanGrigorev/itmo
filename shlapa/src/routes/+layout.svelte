<script lang="ts">
	import { Alert, DarkMode } from 'flowbite-svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class=" min-h-screen bg-amber-50 text-amber-950 dark:bg-amber-950 dark:text-amber-50">
	<DarkMode />
	{@render children()}
</div>
