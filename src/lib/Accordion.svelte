<script>
  let { title, content } = $props();
  let isOpen = $state(false);
  function onclick() {
    isOpen = !isOpen;
  }
</script>

<div>
  <button {onclick} class="flex w-full flex-row">
    <div class="flex-15 text-left">
      {title}
    </div>
    <div class="flex-1">{isOpen ? "-" : "+"}</div>
  </button>
  {#if isOpen}
    <div>
      {content}
    </div>
  {/if}
</div>
