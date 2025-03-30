<script>
  import Accordion from "./Accordion.svelte";

  const mailtoLink = `<a href="mailto:seattlesliceathon@gmail.com" class="text-red-sauce hover:text-red-700 underline">seattlesliceathon@gmail.com</a>`;
  const gpxLink = `<a href="./public/Seattle-Slice-a-Thon-2025.gpx" class="text-red-sauce hover:text-red-700 underline">Slice-A-Thon route</a>`;

  const faqs = [
    {
      title: "Should I treat this as a race?",
      description:
        "As long as you run the distance and eat the pizza, there is no wrong way to do the Slice-A-Thon. If you’re feeling motivated by a challenge, aim for your half marathon PR and you may win a pizza themed prize. Otherwise just relax and experience the dual joy of a couple of slices while running with some friends",
    },
    {
      title: "Is there a minimum time?",
      description: "We’ll be around for 3 hours after the start of the race",
    },
    {
      title: "What do I need to pay for?",
      description:
        "You'll need to pay for the slice of pizza at each checkpoint. Each slice averages out to about $4.50.",
    },
    {
      title: "How do I prove I bought pizza?",
      description:
        "After you pay for your pizza at each checkpoint, take a selfie of you eating your slice with the store sign in the background",
    },
    {
      title: "Will there be signs on the course?",
      description: `No. We recommend downloading the route onto your phone or watch to avoid getting lost. We will also have several runners at different speeds familiar with the route who can help guide the way. You can download the route here: ${gpxLink}`,
    },
    {
      title: "Will there be any aid stations?",
      description:
        "No, we encourage people to bring their own water and will mark locations along the route where people can use restrooms or find refreshments",
    },
    {
      title: "Is this race supporting any charities? ",
      description:
        "After the race, we will give participants the chance to vote for “Slice of the Night” by donating to a charity associated with your favorite pizza stop. Giving is optional but encouraged",
    },
    {
      title: "I don’t think I can make the race anymore, what should I do?",
      description: `No problem, please just send us an email at ${mailtoLink} to let us know you won't be joining so we can adjust our pizza orders accordingly!`,
    },
    {
      title: "I have different question!",
      description: `Email it to us at ${mailtoLink}`,
    },
  ];
</script>

<div class="flex w-full flex-col place-content-center sm:flex-row">
  <div class="flex basis-full flex-col">
    <h1 class="text-red-sauce text-xl font-bold sm:pl-2">FAQ</h1>
    {#each faqs as faq}
      <Accordion title={faq.title} content={faq.description} />
    {/each}
  </div>
</div>
