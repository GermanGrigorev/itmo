<script lang="ts">
	import { Card } from 'flowbite-svelte';

	let { text } = $props();
</script>

<Card>
	{text}
</Card>
