import React from 'react'
import './Header.css'

const componente = props => (
    <header className="header d-none d-sm-flex flex-colum">
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className=" lead text-muted">{props.subtitle}</p>
    </header>
);

export default componente;