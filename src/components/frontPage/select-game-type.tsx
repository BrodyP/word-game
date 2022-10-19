import React, { useState } from 'react'
import { WordWraps } from '../word/wrap/word-wrap'
import { GameCard } from './game-card'
import { useActions } from '../../hook/useAction'
import './select-game-type.css'

export const SelectGame: React.FC = () => {
  const [isShowSelectGame, setIsShowSelectGame] = useState<boolean>(true)
  const [changeWord, setChangeWord] = useState(0)
  const { setNumberLetterBox } = useActions()

  const toggle = () => {
    setIsShowSelectGame(!isShowSelectGame)
  }
  return (
    <div>
      {isShowSelectGame && (
        <div className="container">
          <div className="wrapper">
            <GameCard
              header="3 Change 1"
              content="Rule : Change one letter for a new word"
              onClick={() => {
                setNumberLetterBox(3)
                setChangeWord(1)
                toggle()
              }}
            />
            <GameCard
              header="4 Change 2"
              content="Rule : Change one or two letter for a new word"
              onClick={() => {
                setNumberLetterBox(4)
                setChangeWord(2)
                toggle()
              }}
            />
          </div>
        </div>
      )}
      {!isShowSelectGame && <WordWraps numberChangeLetter={changeWord} />}
    </div>
  )
}
