"use client";

import KakaoLoginButton from "@/components/features/auth/KakaoLoginButton";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const userInfo = {
  id: "admin",
  password: "admin",
};

export default function LoginPage() {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberId, setRememberId] = useState(false);

  useEffect(() => {
    const savedId = localStorage.getItem("savedUserId");
    if (savedId) {
      setUserId(savedId);
      setRememberId(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (userId === userInfo.id && password === userInfo.password) {
      if (rememberId) {
        localStorage.setItem("savedUserId", userId);
      } else {
        localStorage.removeItem("savedUserId");
      }
      router.push("/movies");
    } else {
      alert("로그인 정보를 다시 확인해주세요");
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4">
      <div className="bg-[#1e1e1e] w-[560px] h-[720px] rounded-xl shadow-md py-40 text-white">
        <h1 className="text-2xl w-[560px] h-[47px] font-bold text-center mb-40">
          로그인
        </h1>
        <div className="text-center px-40 text-[rgb(165,165,165)] w-[560px]">
          <h2 className="text-center  w-[480px]  text-[18px] font-normal leading-[28px] text-[rgb(165,165,165)] mb-28">
            사이트 계정으로 로그인
          </h2>

          <form
            onSubmit={handleLogin}
            className=" text-[rgb(165,165,165)]  space-y-4 "
          >
            <ul className="text-[rgb(165,165,165)] w-[480px] h-[116px]">
              <li className="text-[rgb(165,165,165)] w-[480px]  h-[53px]  text-left mb-10">
                <label className="text-[rgb(165,165,165)] w-auto h-auto mb-10">
                  <input
                    type="text"
                    placeholder="이메일 주소 또는 아이디"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    title="아이디"
                    className="text-[15px] w-[480px] h-[53px]  bg-[#2a2a2a] px-20 rounded-md placeholder-gray-500 focus:outline-none"
                  />
                </label>
              </li>
              <li className="text-[rgb(165,165,165)] w-[480px]  h-[53px]  text-left">
                <label className="text-[rgb(165,165,165)] w-auto h-auto mb-10">
                  <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    title="비밀번호"
                    className="text-[15px] w-[480px] h-[53px]  bg-[#2a2a2a] px-20 rounded-md placeholder-gray-500 focus:outline-none"
                  />
                </label>
              </li>
            </ul>
            <ul className="flex justify-center space-x-4 text-sm text-gray-400 mt-14 mb-33 w-[480px]  h-[23px]">
              <li className="text-left mr-15">
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    checked={rememberId}
                    onChange={(e) => setRememberId(e.target.checked)}
                    className="accent-blue-500"
                  />
                  <span>아이디 저장</span>
                </label>
              </li>
              <li>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" className="accent-blue-500" />
                  <span>자동 로그인</span>
                </label>
              </li>
            </ul>
            <div className="btn-purple btn-purple-dark">
              <button
                type="submit"
                className="w-full bg-[#0066ff] hover:bg-blue-600 text-white py-3 rounded-full w-[480px] h-[60px] font-semibold mt-2"
              >
                로그인
              </button>
            </div>

            <div className="flex justify-center space-x-4 text-sm text-gray-400 mt-20 mb-50">
              <a href="#">아이디 찾기</a>
              <span>|</span>
              <a href="#">비밀번호 재설정</a>
              <span>|</span>
              <a href="#">회원가입</a>
            </div>
          </form>
        </div>
        <hr className="my-6 border-gray-600" />
        <div className="text-[rgb(165,165,165)] w-[480px] h-[53px]  px-40">
          <div className="text-center text-[18px] text-gray-400  w-[480px] h-[28px]">
            또는 다른 서비스 계정으로 로그인
          </div>

          <div className="flex justify-center gap-4 w-[364px] h-[60px] mb-40 mt-20 mx-58">
            <ul className="flex gap-50">
              <li className="w-[60px] h-[60px]">
                <KakaoLoginButton />
              </li>
            </ul>
          </div>
          <p className="text-xs text-gray-500 mt-4 leading-snug">
            * SNS계정으로 간편하게 가입하여 서비스를 이용하실 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
