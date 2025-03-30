<script lang="ts">
  import Title from "./lib/Title.svelte";
  import Details from "./lib/Details.svelte";
  import Registration from "./lib/Registration.svelte";
  import FAQ from "./lib/FAQ.svelte";
  import Counter from "./lib/Counter.svelte";
  import "./app.css";
</script>

<main class="bg-crust w-full place-content-center">
  <div class="w-full place-content-center">
    <Title />
    <Counter />
    <div class="flex justify-center">
      <div class="item-center flex w-5xl flex-col">
        <Details />
        <FAQ />
        <Registration />
      </div>
    </div>
  </div>
</main>
