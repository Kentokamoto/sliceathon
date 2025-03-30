<script>
  import Accordion from "./Accordion.svelte";
</script>

<div class="flex w-full flex-col place-content-center sm:flex-row">
  <div class="flex basis-full flex-col">
    <h1 class="text-red-sauce text-xl font-bold sm:pl-2">FAQ</h1>
    <Accordion title={"who am i"} content={"a runner"} />
    <Accordion title={"who are you"} content={"a pleb"} />
  </div>
</div>
