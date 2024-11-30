<script lang="ts">
	import { Cta } from '$lib/component/cta';
	import { Signified, type ISignified } from '$lib/entity/signified';
	import { deckStore } from '$lib/feature/store-deck';

	let current = $state<ISignified>($deckStore[0]);

	const handleChange = () => {
		current = $deckStore[Math.floor(Math.random() * $deckStore.length)];
	};
</script>

<Cta onclick={handleChange}>
	<Signified text={current.text} />
</Cta>
