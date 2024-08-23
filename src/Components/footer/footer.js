import React from 'react';
import { useNavigate } from 'react-router-dom';






export default function Footer({}) {

    const navigate = useNavigate();

    const goBack = event => {
        event.preventDefault();
        navigate(-1);
    }

    const goForward = event => {
        event.preventDefault();
        navigate(1);
    }


    return (
        <div>
            <button type='button' onClick={goBack} >Back</button>
            <button type='button' onClick={goForward} >Forward</button>
        </div>
    )
}