function StarRating({ number }) {
  const totalStars = 5;
  const fullStars = Math.floor(number);
  const hasHalfStar = number % 1 !== 0;

  const stars = Array.from({ length: totalStars }, (_, index) => {
    if (index < fullStars) {
      return <i key={index} className="fa-solid fa-star fa-sm text-yellow-500"></i>;
    } else if (index === fullStars && hasHalfStar) {
      return <i key={index} className="fa-solid fa-star-half-stroke fa-sm text-yellow-500"></i>;
    } else {
      return <i key={index} className="fa-regular fa-star fa-sm text-slate-600"></i>;
    }
  });

  return <div>{stars}</div>;
}

export default StarRating;