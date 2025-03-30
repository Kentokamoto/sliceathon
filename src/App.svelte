<script lang="ts">
  import Title from "./lib/Title.svelte";
  import Details from "./lib/Details.svelte";
  import Registration from "./lib/Registration.svelte";
  import FAQ from "./lib/FAQ.svelte";
  import Counter from "./lib/Counter.svelte";
  import "./app.css";
  import Story from "./lib/Story.svelte";
</script>

<main class="bg-crust w-full place-content-center">
  <div class="w-full place-content-center">
    <Title />
    <Counter />
    <div class="flex justify-center">
      <div class="item-center mx-10 w-4xl flex-col">
        <Story />
        <Details />
        <FAQ />
        <Registration />
      </div>
    </div>
  </div>
</main>
