import React, { useState } from 'react';

const Post = () => {
    return (
        <>
            <li>
                <label>
                    <input type="checkbox" />
                    <span>TODO 1</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" />
                    <span>TODO 2</span>
                </label>
            </li>
        </>
    )
};

export default Post;