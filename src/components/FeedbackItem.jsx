// import { FaTimes } from "react-icons/fa ";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete }) {
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState("This is an example of feedack item");
  // const handleClick = () => {
  //   setRating((prev) => {
  //     console.log(prev);
  //     return prev + 1;
  //   });
  // };
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick = {()=> handleDelete(item.id)} className="close">
        {/* <FaTimes color="purple" /> */}
        x
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}></button> */}
    </Card>
  );
}
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
