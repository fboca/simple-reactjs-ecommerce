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
        if(local!=null&&local!=undefined) {
            //console.log(localStorage.getItem('cart'))
            local = local.push(title);
        }
        local = [title];
        localStorage.setItem('cart', JSON.stringify(local));
    }

    render() {
        console.log(this.state)
        return (
            <div className="uk-container" style={{ marginTop: 20 }}>
                <h3>All products</h3>
                <div class="uk-child-width-1-4@m grid-container" uk-grid>
                    {this.state.products.map((product) => (
                        <div>
                            <div class="uk-card uk-card-default grid-card">
                                <div class="uk-card-media-top">
                                    <img src={product.images[1]} alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">{product.title}</h3>
                                    <p>{product.description}</p>
                                </div>
                                <button onClick={() => this.addToCart(product.title)} className="button-cart">Add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Catalog