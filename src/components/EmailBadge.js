import React, { useState, useEffect } from "react";

const EmailBadge = ({email, deleteEmail}) => {
    const [isValidEmail, setIsValidEmail] = useState();

    useEffect(()=> {
        setIsValidEmail(validateEmail(email))
    }, [])

    const validateEmail = (email) => {
        return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
    }

    return (
        <div className={`email-badge ${ !isValidEmail ? 'error-badge' : ''}`}>
            {email}
            { !isValidEmail ? <span className="warning-icon" onClick={()=>deleteEmail(email)}>!</span> : <span className="close-icon" onClick={()=>deleteEmail(email)}>X</span> }
        </div>
    );
}

export default EmailBadge;
