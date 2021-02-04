import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ text, path, getting }) {
    return (
        <Link to={path}><button onClick={getting}>{text}</button></Link>
    )
}