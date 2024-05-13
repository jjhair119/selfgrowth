import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        const location = window.location;
        const params = new URLSearchParams(location.search);
        let kakaoCode = params.get("code");

        let data = {
            "grant_type": "authorization_code",
            "client_id": "9c0435350e0714d02ef07e6bccb168ab",
            code: kakaoCode,
        };

        let response = await axios.post<AuthResponse>("https://kauth.kakao.com/oauth/token", data, {
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        });

        let ret = await axios.get<AuthResponse>(`http://52.78.248.199:8080/users/sign_up?accessToken=${response.data.access_token}`);
        console.log(ret);
        console.log(ret.data.result.accessToken);
        let { isSuccess, result } = ret.data;
        let { isNew } = result;
        console.log(ret)
        if (isSuccess) {
            if (isNew) {
                localStorage.setItem('accesstoken', ret.data.result.accessToken);
                localStorage.setItem('userId', ret.data.result.userId.toString());
                navigate("/nickname");
            }
            localStorage.setItem('accesstoken', ret.data.result.accessToken);
            localStorage.setItem('userId', ret.data.result.userId.toString());
            navigate("/mainpage");
        } else {
            console.log("Login Failed");
        }
    }

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
