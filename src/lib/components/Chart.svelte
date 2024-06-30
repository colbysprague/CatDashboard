<script>
    import { Chart, registerables } from "chart.js";
    Chart.register(...registerables);

    import { onMount } from "svelte";

    let catData = [
        {
            name: "Fuzz Lightyear",
            weights: [250, 265, 278, 302],
            emoji: "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f680.png",
            color: "rgb(255, 99, 132)",
        },
        {
            name: "Fats Domino",
            weights: [250, 265, 278, 332],
            emoji: "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f3b2.png",
            color: "rgb(150, 150, 150)",
        },
        {
            name: "Darth Vader",
            weights: [250, 265, 278, 312],
            emoji: "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f608.png",
            color: "rgb(128, 0, 128)",
        },
        {
            name: "Godzilla",
            weights: [250, 265, 278, 350],
            emoji: "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f98d.png",
            color: "rgb(150, 150, 150)",
        },
    ];

    const onResizeFunction = (chart) => {
        console.log("resizing", chart.width);
    };

    function createImage(image, url) {
        image = image.cloneNode();

        image.height = 30;
        image.width = 30;
        image.src = url;

        return image;
    }

    let chartLabels = ["6,25", "6/26", "6/27", "6/28", "6/29"];
    let ctx;
    let chartCanvas;

    onMount(() => {
        ctx = chartCanvas.getContext("2d");
        var chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: chartLabels,
                datasets: catData.map((cat) => ({
                    label: cat.name,
                    backgroundColor: cat.color,
                    borderColor: cat.color,
                    data: cat.weights,
                    pointStyle: function (context) {
                        return context.dataIndex === cat.weights.length - 1
                            ? createImage(new Image(), cat.emoji)
                            : "circle";
                    },
                    tension: 0.4,
                })),
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        max: 385,
                    },
                },
            },
        });
    });

    let screenWidth = 100;
    $: console.log(screenWidth);
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="bg-white sm:p-6 md:p-6 shadow-lg rounded-lg my-4">
    <h2 class="text-lg font-semibold text-gray-800 mb-5">Kitten Weight</h2>
    <div>
        <canvas bind:this={chartCanvas} height="300" id="myChart"></canvas>
    </div>
</div>
