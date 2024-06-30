<script>
    export let cat;
</script>

<div class="bg-white rounded-lg overflow-hidden shadow-lg">
    <a href="${cat.bigImg}" target="_blank">
        <img
            src="https://colbysprague.github.io/CatDashboard/assets/fatsdomino.jpeg"
            alt="${cat.name}"
            class="w-full h-64 object-cover"
        />
    </a>
    <div class="p-4">
        <div class="flex justify-between">
            <h3 class="text-lg font-semibold text-gray-800">CAT NAME</h3>
            <h3 class="text-lg font-semibold text-gray-800">🚀</h3>
        </div>
        <p class="text-gray-600 mt-2">Weight: 100g</p>
        <p class="text-gray-600 mt-2">
            Gain/Loss: <span style="color: ${cat.gain >= 0 ? 'green' : 'red'}"
                >100</span
            >
        </p>
        <p class="text-gray-600 mt-2">Cat Desc</p>
    </div>
</div>
