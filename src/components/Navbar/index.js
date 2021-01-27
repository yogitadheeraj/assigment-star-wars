import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Timer from "../../timer"

function Navbar() {
    return (
        <Menu inverted pointing>
            <Link to="/starwars">
                <Menu.Item name="planets" active />
            </Link>
            <Timer />
            <Link to="/logout" style={{ marginLeft: 'auto' }}>
                <Menu.Item name="Logout" />
            </Link>
        </Menu>
    )
}

export default Navbar;