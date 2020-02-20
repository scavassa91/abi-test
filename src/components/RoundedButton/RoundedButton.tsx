import React, { FunctionComponent } from 'react';

import './RoundedButton.scss';

interface RoudedButtonProps {
    className?: string,
    label: string,
    disabled?: boolean,
    onClick?: () => void
};

const RoundedButton: FunctionComponent<RoudedButtonProps> = ({ className, label, onClick, disabled }) => {
    return (
        <button
            type="button"
            className={`button roundBtn ${className}`}
            disabled={disabled}
            onClick={onClick}>{label}</button>
    );
};

RoundedButton.defaultProps = {
    className: '',
    disabled: false,
    onClick: () => {}
};

export default RoundedButton;