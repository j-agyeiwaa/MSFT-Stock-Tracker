# Real-Time Microsoft Stock Tracker Card
A full stack web application that tracks and displays real-time market telemetry for Microsoft using a synchronized Python backend. 

# Features
- **Live Ticking Telemetry:** Frontend pulls real-time tracking data via continuous asynchronous loops.
- **Dynamic Trend Indicators:** Custom solid vector triangles that instantly shift direction and colour (Green for increment, red for decrement and gray for stable prices) based on tick-by-tick cross analysis
- **Time Zone Synchronized:** Seamlessly handles international market closing rules (automatically freezes during weekend or overnight structural closing windows).
- **Clean Responsive UI:** Minimalist glassmorphic dark-theme card interface optimized for developer portfolios.

## Tech Stack
- **Frontend:** HTML5, CSS3 and JavaScript (ES Modules / Fetch API)
- **Backend:** Python 3, Flask, Flask-CORS
- **API Feed:** `yfinance` (Yahoo Finance live data stream integration)

## Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd MSFT-Stock-Tracker
   ```

2. **Install Python network prerequisites:**
   ```bash
   pip install flask flask-cors yfinance
   ```

3. **Fire up the backend engine:**
   ```bash
   python server.py
   ```

4. **Launch the interface:**
   Open `index.html` using the VS Code **Live Server** extension to bypass browser local sandbox boundaries.
