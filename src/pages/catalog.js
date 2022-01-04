import React from 'react'
import { Link } from 'react-router-dom'
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore";

class Catalog extends React.Component {
    state = {
        products: [],
        isLoading: true,
    }

    componentDidMount() {
        var db = getFirestore();
        const querySnapshot = getDocs(collection(db, "products"));
        querySnapshot.then((collectionSnapshoot) => {
            var productsState = []
            collectionSnapshoot.docs.map((product) => {
                productsState.push(product.data())
            })
            this.setState({ products: productsState, isLoading: false })
        })
    }

    addToCart(title) {
        var local = localStorage.getItem('cart');
        if (local != null && local != undefined) {
            //console.log(localStorage.getItem('cart'))
            local = local.push(title);
        }
        local = [title];
        localStorage.setItem('cart', JSON.stringify(local));
    }

    render() {
        console.log(this.state)
        return (
            <div className="container" style={{ marginTop: 20 }}>
                <div class="container" style={{marginTop: 10}}>
                <h3 style={{padding: 25}}>All products</h3>
                    <div class="row row-cols-3">
                        {this.state.products.map((product) => (
                            <div class="col">
                                <div class="uk-card uk-card-default grid-card">
                                    <div class="uk-card-media-top">
                                        <img style={{width: '100%', height: 200, objectFit: 'cover' }} src={product.images[0]} alt="" />
                                    </div>
                                    <div class="uk-card-body">
                                        <h5 class="uk-card-title">{product.title}</h5>
                                    </div>
                                    <button onClick={() => this.addToCart(product.title)} className="button-cart">Add to cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        )
    }
}

export default Catalog