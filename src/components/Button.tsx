import React from "react";

type ButtonProp = {
    onClick: (e: React.MouseEvent) => void;
}
function Button({onClick}: ButtonProp) {
    return (
        <button onClick={onClick} className="love-button">
            Next Moment
        </button>
    );
}

export default Button;