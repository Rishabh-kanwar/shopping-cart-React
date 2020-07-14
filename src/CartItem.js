import React from 'react'

const CartItem =(props) =>{
   
   //we are using arrow functions because sir it automaticaly binds the value
//    increaseQuantity=()=>
//    {
//         //  console.log('test ',this.state);
//         //  this.setState({
//         //       qty: this.state.qty+1
//         //   })
//         this.setState((prevState)=>{
//               return {
//                   qty : prevState.qty +1
//               }
//         });
//    }
//    decreaseQuantity=()=>
//    {  
//       const {qty}=this.state;
//       if(qty===0)
//       {
//           return;
//       }

//          this.setState({
//               qty: this.state.qty-1
//           })
         
//    }


        const {img,price,title,qty}=props.product;
        const {onIncreaseQuantity,onDecreaseQuantity,product,onDeleteQuantity}=props

        return(
        
         <div className="cart-item">
             
             <div className="left-block">
            <img style={styles.image} src={img}/>
             </div>

            <div className="right-block">

               <div style={{fontSize:25}} >{title}</div>
               <div style={{color:'#777'}}>Rs {price}</div>
               <div style={{color:'#777'}}>Qty: {qty}</div>
 
               <div className="action-icons"></div>  
                  {/* buttons */}
                  <img
                   alt="increase" 
                   className="action-icons" 
                   src="https://image.flaticon.com/icons/svg/992/992651.svg"
                   onClick={()=>onIncreaseQuantity(product)}    
                   >
                 </img>                 
                   
                  <img 
                  alt="decrease" 
                  className="action-icons" 
                  src="https://image.flaticon.com/icons/svg/992/992683.svg"
                  onClick={()=>onDecreaseQuantity(product)}    
                  >
                  </img>

                  <img 
                  alt="delete" 
                  className="action-icons" 
                  src="https://image.flaticon.com/icons/svg/1345/1345823.svg"
                  onClick= {()=>onDeleteQuantity(product.id)}     
                  >
                  </img>

            </div>

        </div>

        )
    
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius: 4,
        background: '#ccc'
    }

}


export default CartItem;