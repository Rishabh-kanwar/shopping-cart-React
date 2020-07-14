import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar'
import * as firebase from 'firebase';


class App extends React.Component{
    constructor(){
      super();
      this.state={
        products:[] ,
        loading : true  
      } 

      this.db=firebase.firestore();
  }

  handleIncreaseQuantity=(product)=>{
      console.log('hello lets increase',product);
      const {products}=this.state;
      const index= products.indexOf(product);

      // products[index].qty+=1;

      // this.setState({
      //   products:products
      // })

      const docRef=this.db.collection('products').doc(products[index].id)
      
      docRef.update({
        qty:products[index].qty+1
      })
      .then(()=>{
        console.log('updated successfuly')
      })
      .catch((error)=>{
        console.log('error: ',error);
      })
      
  }



  componentDidMount(){
    //  firebase
    //  .firestore()
    //  .collection('products')
    //  .get()
    //  .then((snapshot)=>  {
    //    console.log(snapshot);

    //    snapshot.docs.map((doc)=>{
    //      console.log(doc.data());
    //    })

    //   const products=snapshot.docs.map((doc) =>{
    //     const data=doc.data();
    //     data['id']=doc.id;
    //     return data;
    //   })
      
    //   this.setState({
    //     products:products,
    //     loading:false
    //   })

    //  })


     this.db
     .collection('products')
     .onSnapshot((snapshot)=>  {
       console.log(snapshot);

       snapshot.docs.map((doc)=>{
         console.log(doc.data());
       })

      const products=snapshot.docs.map((doc) =>{
        const data=doc.data();
        data['id']=doc.id;
        return data;
      })
      
      this.setState({
        products:products,
        loading:false
      })

     })
 

   }

  handleDecreaseQuantity=(product)=>{
      console.log('minus clicked',product)

      const{products}=this.state;
      const index=products.indexOf(product);
        
      // if(products[index].qty===0)
      //         {
      //             return;
      //         }
      // products[index].qty -=1;

      // this.setState({
      //     products:products
      // })
      
       const docRef=this.db.collection('products').doc(products[index].id);
       if(products[index].qty ===0)
       {
         return;
       } 

       docRef.update({
         qty:products[index].qty-1
       }).then(()=>{
         console.log('updated successfuly')
       }).catch((error)=>{
         console.log('error: ',error);
       })
  }    


  handleDeleteProduct=(id)=>{

    const {products}=this.state;
    // const items=products.filter((item)=> item.id!==id);
  
    // this.setState({
    //   products:items
    // })
      
   const docRef=this.db.collection('products').doc(id);

   docRef.delete()
   .then(()=>{
     console.log('Deleted succesfuly');
   }).catch((error)=>{
     console.log('error',error);
   })
   
   }


  getCartCount=()=>{
    const {products}=this.state;
    let count=0;

    products.forEach((product)=>{
      count+=product.qty;
    }
    )
    return count;
  }
   
  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }
   
   addProduct=()=>{
     this.db
     .collection('products')
     .add({
       img:'',
       price:900,
       qty:5,
       title: 'washing machine'
     })
     .then((docRef)=>{
          console.log('Products has been added',docRef);
     })
     .catch((error)=>{
       console.log('error: ',error);
     })
   }






  render(){
    const {products,loading}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <h1 style={{textAlign:"center"}}>Cart</h1>
       <button onClick={this.addProduct} style={{margin:20,fonSize:20,textAlign:"center"}}>Add a product</button>
      <Cart className="cart" 
       products={products} 
       onIncreaseQuantity={this.handleIncreaseQuantity} 
       onDecreaseQuantity={this.handleDecreaseQuantity}
       onDeleteQuantity={this.handleDeleteProduct}
      > </Cart>
      { loading && <h1>loading Products ....</h1>}
       <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>

  );
  }
}

export default App;