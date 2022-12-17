import * as React from 'react';

interface IRadioProps {
    id: string,
    label: string,
    value: any,
    name: string,
}

export const Radio: React.FunctionComponent<IRadioProps> = ({
    id,
    label,
    value,
    name,
}) => {
    return (
        <>
            <input type="radio" name={name} id={id} value={value} />
            <label htmlFor={id}>{label}</label>
        </>
    )
};
