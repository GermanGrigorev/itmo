import { writable } from 'svelte/store';
import type { TDeck } from '../model/deck.model';

export const deckStore = writable<TDeck>([
	{
		text: 'cat'
	},
	{ text: 'dog' }
]);

export const deckStoreArr = [
	{
		text: 'cat'
	},
	{ text: 'dog' }
];
