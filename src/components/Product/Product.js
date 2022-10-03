import React, {Component} from "react";

import Wrapper from "../../hoc/Wrapper";

import './Product.css'
import Container from "../../hoc/Container";

class Product extends Component{

    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    render(){
        console.log('Product')
        return(
            <React.Fragment>
                <p key="1" onClick={this.props.click}>Product Name: {this.props.title}</p>
                <p key="2" >Product Price: {this.props.price}</p>
                <p key="3" >{this.props.children}</p>
                <input
                ref={this.inputRef}
                type="text"
                onChange={this.props.change}
                value={this.props.title}
                key="4" 
                />
            </React.Fragment>
        )
    }
}

export default Wrapper(Product, 'product');