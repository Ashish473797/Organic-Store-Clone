import Button from "../button/Button"

function FreshCard({ title, description, image }) {
  return (
    <div 
      className="bg-white rounded-md shadow p-12 flex flex-col gap-5 relative pb-44" 
      style={{ 
        backgroundImage: `url(${image})`, 
        backgroundSize: '75%', 
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
      <div><Button icon="arrow-right">SHOP NOW</Button></div>
    </div>
  );
}

export default FreshCard;
