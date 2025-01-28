<script lang="ts">
  import Title from "./lib/Title.svelte";
  import Details from "./lib/Details.svelte";
  import Counter from "./lib/Counter.svelte";
  import "./app.css";
</script>

<main class="bg-crust w-full place-content-center">
  <div class="w-full place-content-center">
    <Title />
    <Counter />
    <Details />
  </div>
</main>
