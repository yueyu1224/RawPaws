import React, { useState } from 'react';
import './styles/RawFoodCalculator.css';

function RawFoodCalculator() {
    const [petWeight, setPetWeight] = useState('');
    const [foodAmount, setFoodAmount] = useState('');

    const calculateFoodAmount = () => {
        const amount = petWeight * 0.025; // 2.5% of pet's body weight
        setFoodAmount(amount.toFixed(2));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateFoodAmount();
    };

    return (
        <div className="raw-food-calculator">
            <h2>Raw Food Calculator</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Enter your pet's weight in kg"
                    value={petWeight}
                    onChange={(e) => setPetWeight(e.target.value)}
                    required
                />
                <button type="submit">Calculate</button>
            </form>
            {foodAmount && (
                <p>Your pet should eat approximately {foodAmount} kg of raw food daily.</p>
            )}
        </div>
    );
}

export default RawFoodCalculator;
