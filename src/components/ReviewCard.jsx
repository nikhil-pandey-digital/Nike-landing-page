import { star } from "../assets/icons";

const ReviewCard = (props) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img
        src={props.review.imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px] "
      />
      <p className="mt-16 max-w-sm text-center info-text">
        {props.review.feedback}
      </p>
      <div className="flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rating icon"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">{props.review.rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{props.review.customerName}</h3>
    </div>
  );
};

export default ReviewCard;
