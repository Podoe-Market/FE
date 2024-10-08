import { nextGreyArrow } from "../../../assets/image/auth/signUp";

import "./../../../styles/colors.css";
import "./../../../styles/text.css";
import "./../../../styles/utilities.css";

/** 현재는 비활성화 버튼으로 사용 */
const NextGreyButton = ({ onNext }) => {
  return (
    <div className="j-content-end c-default" id="next-button" onClick={onNext}>
      <p className="p-medium-medium c-grey">다음 단계</p>
      <img src={nextGreyArrow} alt="next" />
    </div>
  );
};

export default NextGreyButton;
