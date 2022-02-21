import React from 'react'
import { Link } from "react-router-dom";
function Home() {
    return (
        <header>
            <div className="pizza">
                <img src={"https://cdn-icons.flaticon.com/png/512/2497/premium/2497913.png?token=exp=1645466911~hmac=ec22f0425c164e75e4a075f5676d722d"} alt="" />
            </div>
            <div className="headings">
                <h2>Cheesy Pizzas Here</h2>
                <h3>By Anushka</h3>
                <Link to="/orders" className="btn">Order Now</Link>
            </div>

        </header>
    )
}

export default Home