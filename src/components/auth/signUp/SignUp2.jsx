import { useEffect, useState } from "react";

import { Selector, PreviousButton, NextPurpleButton, NextGreyButton } from ".";
import PWCheckErrorMessages from "./ErrorMessages/PWCheckErrorMessages";
import PWErrorMessages from "./ErrorMessages/PWErrorMessages";
import Form from "../Form";
import { AuthPwInputField } from "../../inputField";

import {
  PW_ALPHABET_REGEX,
  PW_NUMBER_REGEX,
  PW_SPECIAL_REGEX,
  PW_LENGTH_REGEX,
} from "../../../constants/regex";

const SignUp2 = ({ onPrevious, onNext, userInfo, setUserInfo }) => {
  const [pw, setPw] = useState(userInfo.pw);
  const [pwChecker, setPwChecker] = useState({
    show: false,
    alphabet: false,
    number: false,
    special: false,
    length: false,
  });

  const [pwCheck, setPwCheck] = useState(userInfo.pwCheck);
  const [pwCheckChecker, setPwCheckChecker] = useState({
    show: false,
    equal: false,
  });

  useEffect(() => {
    /*
    const checker = {
      show: pw.length > 0,
      alphabet: PW_ALPHABET_REGEX.test(pw),
      number: PW_NUMBER_REGEX.test(pw),
      special: PW_SPECIAL_REGEX.test(pw),
      length: PW_LENGTH_REGEX.test(pw),
    };
    setPwChecker(checker);
    */

    setPwChecker((prevPwChecker) => ({
      // 기존 show가 true면 그대로 유지
      show: prevPwChecker.show || pw.length > 0,
      alphabet: PW_ALPHABET_REGEX.test(pw),
      number: PW_NUMBER_REGEX.test(pw),
      special: PW_SPECIAL_REGEX.test(pw),
      length: PW_LENGTH_REGEX.test(pw),
    }));
  }, [pw]);

  useEffect(() => {
    const checker = {
      show: pwCheck.length > 0,
      equal: pw === pwCheck,
    };

    setPwCheckChecker(checker);
  }, [pw, pwCheck]);

  return (
    <Form
      onSubmit={() => {
        if (
          pwChecker.alphabet &&
          pwChecker.number &&
          pwChecker.special &&
          pwChecker.length &&
          pwCheckChecker.equal
        ) {
          setUserInfo({ ...userInfo, pw: pw, pwCheck: pwCheck });
          onNext();
        }
      }}
    >
      <Selector index={2} />

      <AuthPwInputField
        placeholder="비밀번호를 입력해주세요."
        value={pw}
        onClick={() => {
          setPwChecker({ ...pwChecker, show: true });
        }}
        onChange={(event) => {
          setPw(event.target.value);
          if (pw.length > 0) {
            setPwChecker({ ...pwChecker, show: true });
          }
        }}
        errorMessageCustomFlag="true"
      />

      <PWErrorMessages pwChecker={pwChecker} />
      <div style={{ height: "1rem" }}></div>

      <AuthPwInputField
        placeholder="비밀번호를 다시 한 번 입력해주세요."
        value={pwCheck}
        onChange={(event) => {
          setPwCheck(event.target.value);
          if (pw.length > 0) {
            setPwCheckChecker({ ...pwCheckChecker, show: true });
          }
        }}
        errorMessageCustomFlag="true"
      />

      <PWCheckErrorMessages pwCheckChecker={pwCheckChecker} />

      <div className="j-content-between">
        <PreviousButton
          onPrevious={() => {
            setUserInfo({ ...userInfo, pw: pw, pwCheck: pwCheck });
            onPrevious();
          }}
        />
        {pwChecker.alphabet &&
        pwChecker.number &&
        pwChecker.special &&
        pwChecker.length &&
        pwCheckChecker.equal ? (
          <NextPurpleButton
            onNext={() => {
              setUserInfo({ ...userInfo, pw: pw, pwCheck: pwCheck });
              onNext();
            }}
          />
        ) : (
          <NextGreyButton />
        )}
        {/* 엔터키 입력을 위한 보이지 않는 버튼 */}
        <button type="submit" style={{ display: "none" }}></button>
      </div>
    </Form>
  );
};

export default SignUp2;
