
function ServiceCard({title, description, icon}) {
  return (
    <div className="bg-[#303030] py-8 px-6 rounded-sm text-white flex gap-4">
        <div>
            <i className={`fa-solid fa-${icon} fa-lg mt-4 text-[#8BC34A]`}/>
        </div>
        <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ServiceCard