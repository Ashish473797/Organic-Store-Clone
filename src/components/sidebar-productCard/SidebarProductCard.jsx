import { useNavigate } from "react-router-dom"

function SidebarProductCard({id=null, name="", image="", price=0, onSale=false}) {

  const navigate = useNavigate()

  function handleOnClick(){
    navigate(`/shop/products/${name.split(' ').join('-')}`, {state: {productId: id}})
  }

  return (
    <div className="flex flex-col gap-1 py-4 relative cursor-pointer "onClick={handleOnClick} >
        <img src={image} alt="product" />
        <h2 className="text-lg mt-4 text-[#8BC34A]">{name}</h2>
        <p className="text-gray-500">${price.toFixed(2)}</p>
        {onSale && <span className="absolute text-sm bg-white border border-gray-400 h-10 w-10 rounded-full flex items-center justify-center top-0 -right-2 text-gray-500">Sale!</span>}
    </div>
  )
}

export default SidebarProductCard