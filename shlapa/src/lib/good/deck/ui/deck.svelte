<script lang="ts">
	import { Cta } from '$lib/component/cta';
	import { Signified, type ISignified } from '$lib/entity/signified';
	import { deckStore } from '$lib/feature/store-deck';
	import { GradientButton, Input, Label } from 'flowbite-svelte';
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
	<form class="mb-5 flex items-end gap-5" onsubmit={handleSubmit}>
		<Label class=""
			>Add word
			<Input required bind:value={inputValue} class=" bg-slate-200" type="text" />
		</Label>
		<GradientButton color="pinkToOrange" type="submit">Add</GradientButton>
	</form>
	{#each arr as card}
		<div class="mb-2">
			<Signified text={card.text} />
		</div>
	{/each}
</div>
