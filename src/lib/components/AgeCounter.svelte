<script>
    const kittenBirthday = new Date(2024, 5, 8); // June 8, 2024

    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let days = 0;

    function updateAge() {
        const now = new Date();
        let ageInSeconds = Math.floor((now - kittenBirthday) / 1000);

        seconds = ageInSeconds % 60;
        minutes = Math.floor((ageInSeconds / 60) % 60);
        hours = Math.floor((ageInSeconds / (60 * 60)) % 24);
        days = Math.floor((ageInSeconds / (60 * 60 * 24)) % 30.44);

        // document.getElementById("secs").textContent = `${seconds}`;
        // document.getElementById("mins").textContent = `${minutes}`;
        // document.getElementById("hours").textContent = `${hours}`;
        // document.getElementById("days").textContent = `${days}`;
    }

    updateAge();
    setInterval(updateAge, 1000);
</script>

<div
    class="bg-white rounded-lg overflow-hidden shadow-lg shadow-md mb-4 p-4 flex justify-center flex-col"
>
    <h2 class="text-lg">We are this old</h2>
    <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
        <div class="flex flex-col">
            <span class="countdown font-mono text-5xl">
                <span id="days" style="">{days}</span>
            </span>
            days
        </div>
        <div class="flex flex-col">
            <span class="countdown font-mono text-5xl">
                <span id="hours" style="">{hours}</span>
            </span>
            hours
        </div>
        <div class="flex flex-col">
            <span class="countdown font-mono text-5xl">
                <span id="mins" style="">{minutes}</span>
            </span>
            min
        </div>
        <div class="flex flex-col">
            <span class="countdown font-mono text-5xl">
                <span id="secs" style="">{seconds}</span>
            </span>
            sec
        </div>
    </div>
</div>
