import { useNavigate } from "react-router-dom"
import StarRating from "../star-rating/StarRating"

function ProductCard({name="", image="", rating=0, price=0, onSale=false, categories=""}) {

  const navigate = useNavigate()

  function handleOnClick(){
    navigate(`/shop/products/${name.split(' ').join('-')}`)
  }

  return (
    <div className="flex flex-col items-center gap-1 relative cursor-pointer" onClick={handleOnClick}>
        <img src={image} alt="product" />
        <p className="text-sm text-slate-600">{categories}</p>
        <h2 className="text-lg">{name}</h2>
        <StarRating number={rating}/>
        <p>${price.toFixed(2)}</p>
        { onSale && <span className="absolute text-sm bg-[#8BC34A] h-10 w-10 rounded-full flex items-center justify-center -top-2 -right-2 text-gray-800">Sale!</span>}
    </div>
  )
}

export default ProductCard