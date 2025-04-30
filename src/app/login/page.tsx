//로그인 페이지

export default function LoginPage() {
  return (
    <div style={{ margin: "80px auto", textAlign: "center" }}>
      <h1>로그인</h1>
      <div className="join-box">
        <h2>OSSCA 계정으로 로그인하기</h2>
        <form>
          <fieldset>
            <ul className="input">
              <li>
                <input placeholder="이메일 주소 또는 아이디"></input>
              </li>
              <li>
                <input placeholder="비밀번호"></input>
              </li>
            </ul>
            <ul className="checkbox">
              <li>
                <input id="id-save" type="checkbox" />
                <label htmlFor="id-save">아이디 저장</label>
              </li>
              <li>
                <input id="login-auto" type="checkbox" />
                <label htmlFor="login-auto">자동 로그인</label>
              </li>
            </ul>
            <button>로그인</button>
          </fieldset>
        </form>
      </div>
      <div className="sns-box">소셜로그인 영역</div>
    </div>
  );
}
