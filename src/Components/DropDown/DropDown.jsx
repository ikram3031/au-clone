import React from "react";

import MenuItems from "../MenuItems/MenuItems";

export default function DropDown({ submenus }) {
    return (
        <ul className="dropdown">
            {submenus.map((submenu, index) => (
                <li key={index} className="menu-items">
                    <a href="/#">{submenu.title}</a>
                </li>
            ))}
        </ul>
    );
}
