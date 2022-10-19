import React from 'react'
import './game-card.css'
interface GameCardProps {
  header: string
  content: string
  onClick: () => void
}
export const GameCard: React.FC<GameCardProps> = ({
  header,
  content,
  onClick,
}) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-header">{header}</div>
      <div className="card-content">{content}</div>
    </div>
  )
}
