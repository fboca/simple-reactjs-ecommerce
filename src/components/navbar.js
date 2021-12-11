import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="uk-navbar-container" uk-navbar>

            <div class="uk-navbar-left">

                <ul class="uk-navbar-nav">
                    <Link class="uk-navbar-item uk-logo uk-brand" to='/'>
                        fCOM
                    </Link>
                    <li class="uk-active">
                        <Link class="nav-link-h" to="/">Home</Link>
                    </li>
                    <li>
                        <Link class="nav-link-h" to="/catalog">Catalog</Link>
                    </li>
                    <li>
                        <Link class="nav-link-h" to="/cart">Shopping Cart</Link>
                    </li>
                </ul>

            </div>

        </nav>
    )
}

export default Navbar;