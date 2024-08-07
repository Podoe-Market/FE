import { useState } from "react";
import "./FindBar.css";

import FindID from "./FindID";
import FindPW from "./FindPW";

import MainNav from "../MainNav";
import Box from "../../components/auth/Box";

const Find = () => {
  const TAB_NAME = ["아이디 찾기", "비밀번호 찾기"];
  const [currentTab, setCurrentTab] = useState(TAB_NAME[0]);

  return (
    <div>
      <MainNav />
      <Box id="box">
        <div className="container">
          <div className="tab-nav">
            <h4
              className={`tab-name ${TAB_NAME[0] === currentTab ? "current" : ""}`}
              onClick={() => setCurrentTab(TAB_NAME[0])}
            >
              {TAB_NAME[0]}
            </h4>

            <h4
              className={`tab-name ${TAB_NAME[1] === currentTab ? "current" : ""}`}
              onClick={() => setCurrentTab(TAB_NAME[1])}
            >
              {TAB_NAME[1]}
            </h4>
          </div>

          {currentTab === TAB_NAME[0] && <FindID />}
          {currentTab === TAB_NAME[1] && <FindPW />}
        </div>
      </Box>
    </div>
  );
};

export default Find;
