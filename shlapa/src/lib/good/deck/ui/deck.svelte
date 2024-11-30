<script lang="ts">
	import { Cta } from '$lib/component/cta';
	import { Signified, type ISignified } from '$lib/entity/signified';
	import { deckStore } from '$lib/feature/store-deck';
	import { onMount } from 'svelte';

	let inputValue = $state<string>('');
	let arr = $state<ISignified[]>([]);

	onMount(async () => {
		const db = await import('$lib/shared/indexedDb');
		const res = await db.dbActions.getAllSigns();
		arr = res;
		console.log(res);
	});

	const handleSubmit = async () => {
		const db = await import('$lib/shared/indexedDb');
		const game = await db.dbActions.createGame({ date: new Date() });
		if (game) {
			const signified = await db.dbActions.createSignified({
				text: inputValue,
				gameKey: game?.key
			});
		}

		$deckStore = [...$deckStore, { text: inputValue }];
	};
</script>

<div class="p-3">
	{#each arr as card}
		<div class="mb-2">
			<Signified text={card.text} />
		</div>
	{/each}

	<form onsubmit={handleSubmit}>
		<input bind:value={inputValue} class=" bg-slate-200" type="text" />
		<Cta type="submit">Add</Cta>
	</form>
</div>
