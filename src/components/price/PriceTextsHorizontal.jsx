import "./PriceTextsHorizontal.css";
import PriceText from "./PriceText";

const PriceTextsHorizontal = ({ scriptPrice, performPrice }) => {
  return (
    <div className="price-texts-horizontal">
      <PriceText type="script" value={scriptPrice}></PriceText>
      <PriceText type="perform" value={performPrice}></PriceText>
    </div>
  );
};

export default PriceTextsHorizontal;
