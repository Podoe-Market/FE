import Main from "@/pages/main";
import ProfileEdit from "@/pages/mypage/profile-edit";
import Liked from "@/pages/mypage/liked";
import Management from "@/pages/mypage/management";
import Purchase from "@/pages/mypage/purchase";
import QnA from "@/pages/mypage/qna";
import QnAMore from "@/pages/mypage/qna-more";
import Review from "@/pages/mypage/review";
import { Route, Routes } from "react-router-dom";
import Login from "@/pages/auth/login";
import SignIn from "@/pages/auth/signin";
import Publicity from "@/pages/mypage/publicity";
import Find from "@/pages/auth/find";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      {/* 로그인 / 회원가입 */}
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/find" element={<Find />} />

      {/* 마이페이지 */}
      <Route path="/mypage/liked" element={<Liked />} />
      <Route path="/mypage/purchase" element={<Purchase />} />
      <Route path="/mypage/purchase/:id" element={<Review />} />
      <Route path="/mypage/management" element={<Management />} />
      <Route path="/mypage/qna" element={<QnA />} />
      <Route path="/mypage/qna/faq" element={<QnAMore subject="FAQ" />} />
      <Route
        path="/mypage/qna/mine"
        element={<QnAMore subject="내가 등록한 질문" />}
      />
      <Route path="/mypage/publicity" element={<Publicity />} />
      <Route path="/mypage/profile-edit" element={<ProfileEdit />} />
    </Routes>
  );
};

export default Router;
