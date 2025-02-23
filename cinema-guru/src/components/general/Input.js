import React from "react";
import "../general/general.css";

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
    const handleInput = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={`input-container ${className}`}>
            {label && <label>{label}</label>}
            <div className="input-wrapper">
                {icon && <span className="icon">{icon}</span>}
                <input 
                    type={type} 
                    value={value} 
                    onChange={handleInput} 
                    {...inputAttributes} 
                />
            </div>
        </div>
    );
};

export default Input;
