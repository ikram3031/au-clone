import React from "react";
import "./BlueTiles.scss";

export default function BlueTiles() {
    return (
        
        <section id="bluetiles">
            <div className="card">
                <div className="details">
                    <h1>My Asian</h1>
                    <p>Online Student Portal</p>
                </div>
            </div>

            <div className="card">
                <div className="details">
                    <h1>Programs</h1>
                    <p>AUB offers a wide range of Programs.</p>
                </div>
                <img src={require("Assets/Image/programs.png")} alt="" />
            </div>

            <div className="card">
                <div className="details">
                    <h1>Admission</h1>
                    <p>Apply Online</p>
                </div>
                <img src={require("Assets/Image/admission.png")} alt="" />
            </div>
        </section>
    );
}
