import React, { useState, useEffect, useRef } from "react";
import EmailBadge from "./EmailBadge"
import sampleEmails from "../data/emails";

const EmailInput = () => {
    const [email, setEmail] = useState('');
    const [savedEmails, setSavedEmails] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const textInput = useRef(null);

    const onInputChange = event => {
        setEmail(event.target.value);
    };

    useEffect(()=> {
        if(email !== '') {
            const filteredEmails = sampleEmails.filter(
                (emailAddress) => emailAddress.toLowerCase().indexOf(email.toLowerCase()) > -1
            );
            setSuggestions(filteredEmails)
        }
        else {
            setSuggestions([])
        }
    }, [email]);


    const onKeyDown = evt => {
        if (["Enter", "Tab", ","].includes(evt.key)) {
            evt.preventDefault();
            addEmailToSavedEmails(email);


        } else if (evt.key === "Backspace" && email === '') {
            setSavedEmails(savedEmails.slice(0,-1));
        }
    };

    const addEmailToSavedEmails = (email) => {
        setSavedEmails([...savedEmails, email]);
        setEmail('');
    };

    const deleteEmail = (email) => {
        setSavedEmails(savedEmails.filter(e => e !== email))
    };

    const renderEmailBadges = savedEmails.map(email => {
        return (
            <EmailBadge
                key={email}
                deleteEmail={deleteEmail}
                email={email}
            />
        );
    });

    const renderDropdownList = suggestions.map(suggestedEmail => {
        return (
            <div className="dropdown-list-item" key={suggestedEmail} onClick={()=>addEmailToSavedEmails(suggestedEmail)}>
                {suggestedEmail}
            </div>
        );
    });

    const focusOnInput = () => {
        textInput.current.focus()
    }

    return (
        <div className="app-container">
            <div className="email-input-container">
                { renderEmailBadges }
                <div className="input-and-dropdown-container" onClick={()=>focusOnInput}>
                    <input
                        className="email-text-input"
                        type="text"
                        placeholder={`${savedEmails.length ===0 ? "Enter recipients..." : ''}`}
                        value={email}
                        onChange={onInputChange}
                        onKeyDown={onKeyDown}
                        ref={textInput}
                    />
                    <div className="dropdown-list">
                        {renderDropdownList}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailInput;
