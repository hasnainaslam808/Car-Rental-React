import React from 'react'
import Heart from 'react-animated-heart'
import { useState } from 'react'
import { Hearts } from './Stylle'


const Like = () => {

const [isClick, setClick] = useState(false);

    return (
        <>
            <Hearts>
                
                <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
                
            </Hearts>
        </>
    )
}

export default Like
