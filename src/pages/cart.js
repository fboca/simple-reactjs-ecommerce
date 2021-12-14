import React from "react";
import { getFirestore } from "firebase/firestore"


class Cart extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        window.onstorage = function(e) {
            this.setState({products: JSON.parse(localStorage.getItem('cart'))})
        }
    }

    render() {
        console.log(this.state)
                return (
            <div>
                <p>Shopping Cart</p>
            </div>
        )
    }
}

export default Cart;