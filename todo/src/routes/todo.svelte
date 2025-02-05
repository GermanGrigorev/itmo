<script lang="ts">
  import type { ITodo } from "./model";

  let {
    todo,
    onDelete,
  }: {
    todo: ITodo;
    onDelete: () => void;
  } = $props();
</script>

<div
  class="px-5 rounded-lg border border-solid border-amber-600 py-3 text-xl w-full flex justify-between"
>
  <label class="cursor-pointer">
    <input type="checkbox" />
    {todo.text}
  </label>
  <button onclick={onDelete}>Delete</button>
</div>
