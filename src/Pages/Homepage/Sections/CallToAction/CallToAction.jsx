import React from "react";
import "./CallToAction.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export default function CallToAction() {
    return (
        <section id="call-to-action">
            <ul>
                <li>
                    <FontAwesomeIcon icon={faPhone} className="custom" />
                    01678 66 44 17-19
                </li>
                <li>
                    <FontAwesomeIcon icon={faEnvelope} className="custom" />
                    info@aub.edu.bd
                </li>
            </ul>
            <div>
                <li>
                    <FontAwesomeIcon icon={faLock} className="custom" />
                    Login
                </li>
                <button>Apply Now</button>
            </div>
        </section>
    );
}
