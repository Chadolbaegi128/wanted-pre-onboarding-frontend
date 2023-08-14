import React, { ChangeEvent, useState } from "react";
import { Container , Form, Input, InputWrapper, SignupTitle,
    InputTitle, Button } from "./signUp-styled";

const regEmail = /@/;
const regPW = /.{8,}/;

const SignUp = () => {    
    const [email, setEmail] = useState("");
    const [emailVaild, setEmailVaild] = useState(true);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [password, setPassword] = useState("");

    const checkEmailVaild = (email: string) => {
        return regEmail.test(email);
    }
    
    const handleEmail = (e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    return (
    <>
        <Container>
            <Form>
                <SignupTitle>회원가입</SignupTitle>
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
                <Button type="submit" data-testid="signup-button">Sign Up</Button>
            </Form>
        </Container>        
    </>)
}

export default SignUp;