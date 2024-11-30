<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-my-opposite text-my-primary">
	{@render children()}
</div>
