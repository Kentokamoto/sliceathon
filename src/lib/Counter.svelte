<script>
  const judgementDate = new Date("2025-06-14T16:00:00.000-07:00").getTime(); //PDT
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let x = setInterval(() => {
    const currDateTime = new Date().getTime();
    const diff = judgementDate - currDateTime;
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((diff % (1000 * 60)) / 1000);
  }, 1000);
</script>

<div>
  <div
    class="bg-red-sauce text-yellow-cheese flex flex-row place-content-center py-2"
  >
    <div class="px-2 text-center sm:px-10">
      <h1>{days}</h1>
      <h1>Days</h1>
    </div>
    <div class="px-2 text-center sm:px-10">
      <h1>{hours}</h1>
      <h1>Hours</h1>
    </div>
    <div class="px-2 text-center sm:px-10">
      <h1>{minutes}</h1>
      <h1>Minutes</h1>
    </div>
    <div class="px-2 text-center sm:px-10">
      <h1>{seconds}</h1>
      <h1>Seconds</h1>
    </div>
  </div>
</div>
