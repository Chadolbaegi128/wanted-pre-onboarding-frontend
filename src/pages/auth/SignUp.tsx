import React, { ChangeEvent, useState, useCallback } from "react";
import { Container , Form, Input, InputWrapper, SignupTitle,
    InputTitle, Button } from "./signUp-styled";

const regEmail = /@/;
const regPW = /.{8,}/;

const SignUp = () => {    
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [emailMessage, setEmailMessage] = useState<string>("");
    const [passwordMessage, setPasswordMessage] = useState<string>("");

    const [isEmail, setIsEmail] = useState<boolean>(false);
    const [isPassword, setIsPassword] = useState<boolean>(false);

    const handleEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, email: e.target.value});
        if(!regEmail.test(e.target.value)){
            setEmailMessage("이메일 형식이 틀렸습니다! 다시 작성해주세요~")
            setIsEmail(false);
        } else{
            setEmailMessage("올바른 이메일 형식입니다!");
            setIsEmail(true);
        }
    },[form]);


    const handlePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, password: e.target.value});
        if(!regPW.test(e.target.value)){
            setPasswordMessage("패스워드 형식이 틀렸습니다! 다시 작성해주세요~");
            setIsPassword(false);
        } else{
            setPasswordMessage("올바른 패스워드 형식입니다!");
            setIsPassword(true);
        }
    },[form])

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
                        value={form.email}
                        onChange={handleEmail}
                        placeholder="example@email.com"                        
                    />
                    <InputTitle>패스워드</InputTitle>
                    <Input 
                        name="password"
                        type="password"
                        data-testid="password-input"
                        value={form.password}
                        onChange={handlePassword}
                        placeholder="●●●●●●●●"
                    />
                </InputWrapper>
                <Button type="submit"
                    data-testid="signup-button"
                    disabled={!(isEmail && isPassword)}>Sign Up</Button>
            </Form>
        </Container>        
    </>)
}

export default SignUp;