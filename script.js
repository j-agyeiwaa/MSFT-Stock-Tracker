let lastPrice = null;

async function updateMarketCard() {
    const serverUrl = 'http://localhost:8080/api/stock?_cb=' + Date.now();

    try {
        const response = await fetch(serverUrl);
        if (!response.ok) throw new Error('Backend server connection missed');
        
        const data = await response.json();
        const priceElement = document.getElementById('stock-price');
        const arrowElement = document.getElementById('price-arrow');

        if (data && data.price && priceElement && arrowElement) {
            const currentPrice = Number(data.price);
            priceElement.textContent = currentPrice.toFixed(2);
            
            if (lastPrice === null) {
                arrowElement.textContent = ' ▶';
                arrowElement.style.color = '#8E8E93'; 
            } 

            else if (currentPrice > lastPrice) {
                arrowElement.textContent = ' ▲';
                arrowElement.style.color = '#34C759'; 
            } 
            
            else if (currentPrice < lastPrice) {
                arrowElement.textContent = ' ▼';
                arrowElement.style.color = '#FF3B30'; 
            } 
            
            else {
                arrowElement.textContent = ' ▶';
                arrowElement.style.color = '#8E8E93'; 
            }

            lastPrice = currentPrice;
        }
    } catch (error) {
        console.log("Connecting to live data stream...");
    }
}

function updateClock() {
    const now = new Date();
    const timeElement = document.getElementById('stock-time');
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    updateClock();
    updateMarketCard();
    setInterval(() => {
        updateClock();
        updateMarketCard();
    }, 1000);
});
