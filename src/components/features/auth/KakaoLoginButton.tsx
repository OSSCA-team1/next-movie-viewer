"use client";

import { signIn } from "next-auth/react";

export default function KakaoLoginButton() {
  return (
    <button
      onClick={() => {
        signIn("kakao");
      }}
      role="button"
      data-snstype="kakao"
      data-usereturnurl="true"
      className="flex items-center"
    >
      <i className="sns-logo w-[60px] h-[60px]">
        <img
          width={60}
          height={60}
          src="/images/btn_kakao.svg"
          alt="kakao-logo"
        />
      </i>
      <span className="sr-only">카카오로 로그인</span>
    </button>
  );
}
