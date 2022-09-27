<script setup>
  import { ref, onMounted } from 'vue'
  
  // reactive state
  const count = ref(0)
  
  // functions that mutate state and trigger updates
  function increment() {
    count.value++
  }
  
  // lifecycle hooks
  onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
  })
  </script>
  
  <template>
    <button @click="increment"   class="g-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Clicked {{ count }} times</button>
  </template>
  