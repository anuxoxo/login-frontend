import React from 'react'
import { Link } from "react-router-dom";
import image from "../assets/img.png"
function Home() {
    return (
        <header>
            <div className="pizza">
                <img src={image} alt="" />
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