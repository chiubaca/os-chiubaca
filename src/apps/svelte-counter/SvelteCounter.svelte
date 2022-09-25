<script>
  let count = 0;

  function incrementCount() {
    // event handler code goes here
    count += 1;
  }
</script>

<div>This a Svelte counter</div>
<button
  on:click={incrementCount}
  class="g-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>
