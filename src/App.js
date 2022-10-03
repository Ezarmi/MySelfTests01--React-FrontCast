import React from "react";

import ProductList from "./components/ProductList/ProductList";
import Main from "./components/Main/Main";
import Wrapper from "./hoc/Wrapper";
import Container from "./hoc/Container";

import './App.css';

class App extends React.Component{
    constructor(props){
        super(props)
        console.log('App.js constructor')
    }
    state ={
        products: [
            { id: 1, title: 'Book 1', price: 99 },
            { id: 2, title: 'Book 2', price: 89 },
            { id: 3, title: 'Book 3', price: 79 }
        ],
        showProducts: false,
        showMain: true
    }

    componentDidMount(){
        console.log('App.js componnetDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('App.js shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(){
        console.log('App.js componentDidUpdate');
    }

    changeTitleHandler = (event,id)=>{
        const productIndex = this.state.products.findIndex((item)=>{
            return item.id===id; //returns true or false
        })

        const product = {
            ...this.state.products[productIndex]
        }
        product.title = event.target.value

        const products = [...this.state.products]
        products[productIndex]=product

        this.setState({products:products})
    }
    toggleProductHandler = ()=>{
        const show = this.state.showProducts
        this.setState({
            showProducts:!show
        })
    }

    deleteProductHandler =(productIndex)=>{
        const products = [...this.state.products]
        products.splice(productIndex,1)
        this.setState({ products:products})
    }
    render(){
        console.log('App.js render')
        let products01=null;
        if (this.state.showProducts){
            products01=(
                <div>
                    <ProductList
                        products={this.state.products}
                        click={this.deleteProductHandler}
                        change={this.changeTitleHandler}
                    />
                </div>
            )
        }

        return(
            <Container>
                <button onClick={()=>{this.setState({showMain: false})}}>Remove Main</button>
                {this.state.showMain ?
                    <Main
                        products={this.state.products}
                        click={this.toggleProductHandler}
                    /> : null
                }
                {products01}
            </Container>
        )
    }
}

// function App(props){
    //     const [productState, setProductState] = useState({
        //         products: [
//             { title: 'Book1', price: 99 },
//             { title: 'Book2', price: 89 },
//             { title: 'Book2', price: 79 }
//         ]        
//     })

//     function changePriceHandler(){
//         setProductState({
//             products: [
//                 { title: 'Book1', price: 59 },
//                 { title: 'Book2', price: 59 },
//                 { title: 'Book2', price: 59 }
//             ] 
//         })
//     }
//     return(
//         <div id="main" className="container">
//             <h2>React App</h2>
//             <Product
//             title={productState.products[0].title}
//             price={productState.products[0].price}
//             />
//             <Product
//             title={productState.products[1].title}
//             price={productState.products[1].price}
//             />
//             <Product
//             title={productState.products[2].title}
//             price={productState.products[2].price}
//             />
//             <button onClick={changePriceHandler}>Change Price</button>
//         </div>
//     )
// }


export default Wrapper(App, 'center');