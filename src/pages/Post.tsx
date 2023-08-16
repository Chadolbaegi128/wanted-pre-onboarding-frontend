import React, { useState } from 'react';

const Post = () => {
    return (
        <>
            <li>
                <label>
                    <input type="checkbox" data-testid="new-todo-input"/>
                    <span>TODO 1</span>
                </label>
            </li>
            <button data-testid="new-todo-add-button">추가</button>
            <button data-testid="modify-button">수정</button>
            <button data-testid="delete-button">삭제</button>
        </>
    )
};

export default Post;