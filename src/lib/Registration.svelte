<script lang="ts">
  import { onMount } from "svelte";

  let iframeId = "JotFormIFrame-250816626970059";
  let iframeSrc = "https://form.jotform.com/250816626970059";

  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.onload = () => {
      if (window && "jotformEmbedHandler" in window) {
        window.jotformEmbedHandler(
          `iframe[id='${iframeId}']`,
          "https://form.jotform.com/",
        );
      }
    };
    document.body.appendChild(script);
  });
</script>

<div class="m-4 flex flex-col place-content-center sm:flex-row">
  <section class="flex basis-full flex-col place-content-center p-4 sm:p-0">
    <h1 class="text-basil text-center text-2xl font-bold">Register Here</h1>
    <iframe
      id={iframeId}
      title="2025 Slice-A-Thon Registration"
      allowtransparency
      allow=""
      src={iframeSrc}
      frameborder="0"
      style="border:none;"
      scrolling="yes"
      width="100%"
      height="200px"
    >
    </iframe>
  </section>
</div>
