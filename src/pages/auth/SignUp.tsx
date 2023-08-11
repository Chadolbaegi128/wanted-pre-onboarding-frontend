import React, { useState } from 'react';
import { Container , Form, Input, InputWrapper, SignupTitle,
    InputTitle, Button } from './signUp-styled';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
    <>
        <Container>
            <Form>
                <SignupTitle>회원가입</SignupTitle>
                <InputWrapper>
                    <InputTitle>이메일</InputTitle>
                    <Input 
                        name='email'
                        type='email'
                        id='email'
                        placeholder='example@email.com'
                        required
                    />
                    <InputTitle>패스워드</InputTitle>
                    <Input 
                        name='password'
                        type='password'
                        id='password'
                        placeholder='●●●●●●●●'
                        required
                    />
                </InputWrapper>
                <Button type='submit'>회원가입</Button>
            </Form>
        </Container>        
    </>)
}

export default SignUp;