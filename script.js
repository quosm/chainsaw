const URL = 'https://sultry-seamier-adalynn.ngrok-free.dev';

async function fetchData() {
    try {
        const requests = Array.from({ length: 3 }, (_, i) => 
            fetch(`${URL}/${i}`, {
                method: 'GET',
                headers: {
                    "ngrok-skip-browser-warning": "69420"
                }
            }).then(async (response) => {
                if (!response.ok) throw new Error('Network error');
                const data = await response.text();
                return { i, data };
            })
        );

        const results = await Promise.all(requests);

        results.forEach(({ i, data }) => {
            document.getElementById(`price-${i}`).textContent = data;
        });
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

document.addEventListener('DOMContentLoaded', fetchData);