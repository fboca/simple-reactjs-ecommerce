import React from "react";
import { getFirestore } from "firebase/firestore"


class Home extends React.Component {
    state = {

    }

    componentDidMount() {
        var db = getFirestore();
    }

    render() {
        return (
            <div>
                <p>Home</p>
            </div>
        )
    }
}

export default Home;