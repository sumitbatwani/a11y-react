import * as React from 'react';
import './Card.css';

export interface IAppProps {
    children: React.ReactElement;
    width: string;
    height: string;
}

export function Card(props: IAppProps) {
    const { children, width, height } = props;
    return (
        <div className='Card' style={{ width, height }}>
            {children}
        </div>
    );
}
