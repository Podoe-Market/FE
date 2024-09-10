import { useState } from "react";

import AuthInputField from "./AuthInputField";

import invisible from "../../../assets/image/auth/invisible.svg";
import visible from "../../../assets/image/auth/visible.svg";

const AuthPwInputField = ({
  title,
  placeholder,
  value,
  onChange,
  // 추가 요소
  onClick,
  errorMessage,
  showErrorMsg,
  isValid,
  validMessage,

  // 커스텀 에러 메시지: AuthInputField를 사용한 component에서 error 메시지 정의
  errorMessageCustomFlag = false,
}) => {
  const [toggleVisibility, setToggleInvisible] = useState(true);

  return (
    <AuthInputField
      title={title}
      type={toggleVisibility ? "password" : "text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
      rightElement={
        <img
          src={toggleVisibility ? invisible : visible}
          alt="visibility toggle"
          onClick={() => {
            setToggleInvisible(!toggleVisibility);
          }}
          style={!toggleVisibility ? { transform: "translate(0.1rem, 0)" } : {}}
        />
      }
      errorMessage={errorMessage}
      validMessage={validMessage}
      isValid={isValid}
      showErrorMsg={showErrorMsg}
      errorMessageCustomFlag={errorMessageCustomFlag}
    />
  );
};

export default AuthPwInputField;
