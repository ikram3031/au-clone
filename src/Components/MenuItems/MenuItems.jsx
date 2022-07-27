import React from "react";
import Dropdown from "../DropDown/DropDown";

export default function MenuItems({ items }) {
    return (
        <li className="menu-items">
            {items.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu">
                        {items.title}{" "}
                    </button>
                    <Dropdown submenus={items.submenu} />
                </>
            ) : (
                <a href="/#">{items.title}</a>
            )}
        </li>
    );
}
