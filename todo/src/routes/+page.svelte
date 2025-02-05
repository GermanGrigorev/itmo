<script lang="ts">
  import type { ITodo, TodoId } from "./model";
  import Todo from "./todo.svelte";

  const PAGINATION_WINDOW = 5;

  let list = $state<ITodo[]>([
    { text: "Test1", id: "0" },
    { text: "Test2", id: "1" },
    { text: "Test3", id: "02" },
    { text: "Test", id: "20" },
    { text: "Test", id: "30" },
    { text: "Test5", id: "40" },
    { text: "Test6", id: "50" },
    { text: "Test7", id: "60" },
    { text: "Test8", id: "70" },
    { text: "Test", id: "80" },
    { text: "Test111", id: "90" },
  ]);

  let paginationIdx = $state(0);
  let canJumpPrev = $derived(paginationIdx > 0);
  let canJumpNext = $derived(
    list.length > (paginationIdx + 1) * PAGINATION_WINDOW
  );
  const handleJumpPrev = () => paginationIdx--;
  const handleJumpNext = () => paginationIdx++;

  let listPatch = $derived(
    list.slice(
      paginationIdx * PAGINATION_WINDOW,
      (paginationIdx + 1) * PAGINATION_WINDOW
    )
  );

  let input = $state("");

  const handleAddTodo = () => {
    list.push({ text: input, id: Number(new Date()) + "" });
  };

  const handleDelete = (id: TodoId) => () => {
    list = list.filter((todo) => todo.id !== id);
  };
</script>

<div class="container p-10">
  <form class="mb-5" onsubmit={handleAddTodo}>
    <input required bind:value={input} type="text" placeholder="New todo" />
    <button type="submit">Add</button>
  </form>

  {#each listPatch as todo (todo.id)}
    <div class="mb-2">
      <Todo {todo} onDelete={handleDelete(todo.id)} />
    </div>
  {/each}

  <div class="flex flex-row gap-5">
    {#if canJumpPrev}
      <button onclick={handleJumpPrev}>Prev</button>
    {/if}
    <div>{paginationIdx}</div>
    {#if canJumpNext}
      <button onclick={handleJumpNext}>Next</button>
    {/if}
  </div>
</div>
