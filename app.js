// import React, { Component } from 'react';


class App extends React.Component {
    state = {
        supply: suppliesList,
        item: "",
        price: "",
        quantity: "",
    }

    handleChange = (event) => {

        this.setState(
            { [event.target.id]: event.target.value }

        )
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            item: this.state.item,
            price: this.state.price,
            quantity: this.state.quantity,
        }
        this.setState ({
            supply: [newItem, ...this.state.supply], 
            item: "", 
            price: "",
            quantity: "",
        })
    }


    render() {
        return (
            <div>
                <div class="supplies">
                    <div id="new-item">
                        <form>
                            <button onClick={this.handleSubmit}> Add

                            </button>
                            <label htmlFor="item"> Item </label>
                            <input onChange={this.handleChange} value={this.state.item} type="text" id="item"></input>
                            <label htmlFor="price"> Price </label>
                            <input onChange={this.handleChange} value={this.state.price} type="text" id="price"></input>
                            <label htmlFor="quantity"> Quantity </label>
                            <input onChange={this.handleChange} value={this.state.quantity} type="text" id="quantity"></input>

                        </form>
                    </div>
                    {
                        this.state.supply.map((product) => (
                            <div>
                                <h1>{product.item}</h1>
                                <h2>{product.price}</h2>
                                <h3>{product.quantity}</h3>
                            </div>
                        )
                        )}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#container"))
