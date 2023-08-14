import React, { useState } from "react";
import { Container , Form, Input, InputWrapper, SignupTitle,
    InputTitle, Button } from "./signin-styled";

const regEmail = /@/;
const regPW = /.{8,}/;

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
    <>
        <Container>
            <Form>
                <SignupTitle>로그인</SignupTitle>
                <InputWrapper>
                    <InputTitle>이메일</InputTitle>
                    <Input 
                        name="email"
                        type="email"
                        data-testid="email-input"
                        placeholder="example@email.com"
                        required
                    />
                    <InputTitle>패스워드</InputTitle>
                    <Input 
                        name="password"
                        type="password"
                        data-testid="password-input"
                        placeholder="●●●●●●●●"
                        required
                    />
                </InputWrapper>
                <Button type="submit" data-testid="signin-button">Sign In</Button>
            </Form>
        </Container>        
    </>
    )
};

export default SignIn;