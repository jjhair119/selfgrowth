import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';  // 추가: qs 라이브러리

// API 응답에 대한 인터페이스 정의
interface AuthResponse {
    access_token: string;
    result: {
        accessToken: string;
        userId: number;
        isNew: boolean;
    };
    isSuccess: boolean;
}

// 컴포넌트의 상태에 대한 인터페이스 정의
interface CodeState {
    access_token?: string;
}

function Auth(): JSX.Element {
    const navigate = useNavigate();
    const [code, setCode] = useState<CodeState>({});
    const signUp = async () => {
        try {
            // 바로 nickname 페이지로 이동
            navigate("/nickname");
        } catch (error) {
            console.error("Error during sign up:", error);
        }
    }
    
    // const signUp = async () => {
    //     try {
    //         const location = window.location;
    //         const params = new URLSearchParams(location.search);
    //         let kakaoCode = params.get("code");
    //         console.log(kakaoCode); //제대로 code를 분리해냄. post가 문제인듯
    //         let data = qs.stringify({
    //             grant_type: "authorization_code",
    //             client_id: "b33b03136b166b263f1cff4fbe79091b",
    //             client_secret: "mesbCww9maYmMDMKnR312Zp1j4ppytcj",  // 클라이언트 시크릿 추가
    //             code: kakaoCode,
    //             redirect_uri: "http://localhost:5173/auth/kakao/login"  // 필요한 경우 리디렉트 URI 추가
    //         });

    //         let response = await axios.post<AuthResponse>("https://kauth.kakao.com/oauth/token", data, {
    //             headers: {
    //                 "Content-type": "application/x-www-form-urlencoded"
    //             }
    //         });

    //         let ret = await axios.get<AuthResponse>(`https://port-0-rasingme-1ru12mlwbsd5mh.sel5.cloudtype.app/api/members?accessToken=${response.data.access_token}`);
    //         console.log(ret);
    //         console.log(ret.data.result.accessToken);
    //         let { isSuccess, result } = ret.data;
    //         let { isNew } = result;
    //         console.log(ret);
    //         if (isSuccess) {
    //             if (isNew) {
    //                 localStorage.setItem('accesstoken', ret.data.result.accessToken);
    //                 localStorage.setItem('userId', ret.data.result.userId.toString());
    //                 navigate("/setprofile"); //프로필 설정화면으로 이동
    //             } else {
    //                 localStorage.setItem('accesstoken', ret.data.result.accessToken);
    //                 localStorage.setItem('userId', ret.data.result.userId.toString());
    //                 navigate("/home"); //이미 회원가입했던 클라이언트라면 바로 홈화면으로 이동
    //             }
    //         } else {
    //             console.log("Login Failed"); //실패시
    //         }
    //     } catch (error) {
    //         console.error("Error during sign up:", error);
    //     }
    // }

    useEffect(() => {
        signUp();
    }, []);

    return (
        <div>
            <h1>AuthPage</h1>
            {JSON.stringify(code)}
        </div>
    );
}

export default Auth;
