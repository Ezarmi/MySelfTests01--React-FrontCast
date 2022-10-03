import React, {Component} from "react";
import Product from "../Product/Product";

class ProductList extends Component{
    shouldComponentUpdate(nextProps, nextState){
        console.log('productList.js shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('productList.js getSnapshotBeforeUpdate')
        return null;
    }
    componentDidUpdate(){
        console.log('productList.js componentDidUpdate')        
    }

    componentWillUnmount(){
        console.log('ProductList componentWillUnmount');
    }

    render(){
        console.log('ProductList')
        return this.props.products.map((item, index)=>{
            return <Product
            title={item.title}
            price={item.price}
            click={()=>this.props.click(index)}
            key={item.id}
            change={(event)=>this.props.change(event, item.id)}
            />
        })
    }
}

export default ProductList;