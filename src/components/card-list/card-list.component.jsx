import { Component } from "react"
import MonsterCard from "../monster-card/monster-card.component"

import './card-list.styles.css'

const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map(m => 
            <MonsterCard key={m.id} id={m.id} name={m.name} email={m.email}></MonsterCard>
        )}
    </div>
)

export default CardList