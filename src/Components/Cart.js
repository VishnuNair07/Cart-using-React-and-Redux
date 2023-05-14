import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {useDispatch, useSelector} from 'react-redux'


// const img1 =
// "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
// const img2 =
// "https://www.hilaptop.com/userdata/public/gfx/6a4e49146eec466530509ffe50ddc6ad.jpg";
function Cart() {

  const {cartItems , subTotal , tax , shipping , total} = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const increment = (id) => {
dispatch({
  type : "addToCart",
  payload : {id}
})
dispatch({type : "calculatePrice"})

  }
  const decrement = (id) => {
    dispatch({
      type : "decrement",
      payload : id
    })

    dispatch({type : "calculatePrice"})
  }
  const deleteHandler = (id) => {
    dispatch({
      type : "deleteFromCart",
      payload : id
    })
    dispatch({type : "calculatePrice"})

  }


  const CartItem = ({imgsrc , name , price , qty , decrement , increment , deleteHandler , id}) => (
    <div className="cartItem">
        <img src={imgsrc} alt="img" />
        <article>
            <h3>{name}</h3>
            <h3>${price}</h3>
        </article>
  
        <div className='buttn'>
            <button onClick={() => decrement(id)}> - </button>
            <p>{qty}</p>
            <button onClick={() => increment(id)}> + </button>
        </div> 

        <AiFillDelete className="icon" onClick={() => deleteHandler()}/>
 
    </div>
  )
  

  return (
    <div className='cart1'>
      <main>
      {
        cartItems.length > 0 ? (
          cartItems.map(i => (
            <CartItem
            imgsrc ={i.imgsrc}
             name ={i.name}
             price ={i.price}
             qty ={i.quantity}
             id ={i.id}
             key={i.id}
             decrement={decrement}
             increment={increment}
             deleteHandler={deleteHandler}
             />
          )
          )
        ) : <h1>No Items in cart</h1>
      }
      </main>

      <aside>
        <h2>SubTotal : ${subTotal}</h2>
        <h2>Shipping : ${shipping}</h2>
        <h2>Tax : ${tax}</h2>
        <h2>Total : ${total}</h2>
      </aside>
    </div>

  )
}

export default Cart
