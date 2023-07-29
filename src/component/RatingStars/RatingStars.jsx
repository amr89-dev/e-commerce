//eslint-disable-next-line
const RatingStars = ({ rating }) => {
  const rate = Math.ceil(rating);
  const estrellas = "★".repeat(rate).split("");

  return <div className=" text-orange-400">{estrellas}</div>;
};

export default RatingStars;
