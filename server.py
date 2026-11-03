import time
import random
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

BASE_PRICE = 532.21
CURRENT_PRICE = BASE_PRICE

@app.route('/api/stock')
def get_stock():
    global CURRENT_PRICE
    
    price_movement = random.uniform(-0.22, 0.22)
    CURRENT_PRICE += price_movement
    
    if CURRENT_PRICE > (BASE_PRICE + 8.00) or CURRENT_PRICE < (BASE_PRICE - 8.00):
        CURRENT_PRICE = BASE_PRICE

    print(f"📡 Real-time After-Hours Tick Dispatched | Current MSFT Valuation: ${CURRENT_PRICE:.2f}")

    return jsonify({
        "name": "Microsoft Corp.",
        "sym": "$MSFT",
        "price": round(CURRENT_PRICE, 2)
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)