import { Component } from "react"

import './monster-card.styles.css'

const MonsterCard = ({id, name, email}) => (
    <div className="card-container">
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`} ></img>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
)

export default MonsterCard