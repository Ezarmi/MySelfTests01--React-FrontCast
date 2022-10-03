import React, {useEffect, useRef} from "react";

function Main(props){

    const btnRef = useRef(null)
    useEffect(()=>{
        console.log('Main.js useEffect');
        btnRef.current.click()
        return()=>{
            console.log('Main.js cleanup')
        }
    }, [])

    const btn ={
        backgroundColor: '#7b1fa2',
        color: '#ffffff',
        font: 'inherit',
        border: 'none',
        outline:'none',
        borderRadius:'3px',
        padding:"0.6rem",
        margin:'0.6rem outo'
    }
    return(
        <div>
            <h2>Book Store</h2>
            <button ref={btnRef} style={btn} onClick={props.click}>
                Show/Hide Products
            </button>
    </div>
    )
    
}

export default Main;