import { Component } from "react";

import Links from "../links/links";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="app">
                <header>
                    <Links color="white" />
                </header>
                <main>
                    <section className="about-us"></section>
                    <section className="our-best"></section>
                </main>
                <footer></footer>
            </div>
        );
    }
}

export default App;