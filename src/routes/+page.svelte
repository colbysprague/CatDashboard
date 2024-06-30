<script>
    import Header from "$lib/components/Header.svelte";
    import AgeCounter from "$lib/components/AgeCounter.svelte";
    import Cat from "$lib/components/Cat.svelte";
    import Chart from "../lib/components/Chart.svelte";

    const arr = [1, 2, 3, 4];
</script>

<div class="container mx-auto p-2 md:p-4 mb-16 mt-10">
    <div class="mt-10">
        <Header />
        <AgeCounter />
        <Chart />
        <div
            id="cat-container"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4"
        >
            {#each arr as cat}
                <Cat {cat} />
            {/each}
        </div>
    </div>
</div>
