<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	import { EyeSolid } from 'flowbite-svelte-icons';

	let { text } = $props();

	let isVisible = $state<boolean>(false);
</script>

<Card class="flex flex-row justify-between gap-10">
	{#if isVisible}
		{text}
	{:else}
		<div class="h-6 w-full animate-pulse rounded-lg bg-slate-300"></div>
	{/if}
	<Button on:click={() => (isVisible = !isVisible)} class="h-6 w-6"><EyeSolid /></Button>
</Card>
