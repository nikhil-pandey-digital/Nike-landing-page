const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleclick = () => {
    if (imgURL.bigShoe !== bigShoeImage) changeBigShoeImage(imgURL.bigShoe);
  };

  return (
    <div
      className={`
     border-2 rounded-xl ${
       imgURL.bigShoe === bigShoeImage
         ? "border-coral-red"
         : "border-transparent"
     }
    `}
      onClick={handleclick}
    >
      <div className="flex justify-center items-center bg-card bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        ></img>
      </div>
    </div>
  );
};

export default ShoeCard;
