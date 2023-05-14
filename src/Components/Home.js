import React from 'react'
import { toast } from 'react-hot-toast';
import {useDispatch} from 'react-redux'
const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://www.hilaptop.com/userdata/public/gfx/6a4e49146eec466530509ffe50ddc6ad.jpg";

function Home() {
  const productList = [
    { name: "Mac Book",
     price: 3000, 
     imgsrc: img1, 
     id: "asdhajsdbhjabhsjdfdfv"
     },
     
    { name: "Dell",
     price: 13000, 
     imgsrc: img2, 
     id: "sdjfdlaajsdbhjabhsjdfdfv" 
    }
  ]

  const ProductCard = ({name , imgsrc , id , price, handler}) => (
    <div className="card mx-5" style={{width: "18rem"}}>
    <img className="card-img-top h-70" src={imgsrc} alt="img"/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">${price}</p>
      <span className="btn" onClick={() => handler({ name , id , imgsrc ,quantity :1, price})}>Add to Cart</span>
    </div>
  </div>
  )


  const dispatch = useDispatch();
  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };

  return (
    <div className='home'>
      {
        productList.map((i) => (
          <ProductCard 
          key={i.id}
           name={i.name}
           price={i.price} 
           imgsrc={i.imgsrc}
           id={i.id}
           handler={addToCartHandler} />

        ))
      }
    </div>
  )
}

export default Home
