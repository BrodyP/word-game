import './letter-box.css'
import React, { useEffect, useState } from 'react'
import { useActions } from '../../../hook/useAction'
import { useTypeSelector } from '../../../hook/useTypeSelector'

interface LetterBoxProps {
  id: string
}
export const LetterBox: React.FC<LetterBoxProps> = ({ id }) => {
  const letter = useTypeSelector(({ box }) => box.letters[id])
  const { updateBox } = useActions()

  return (
    <>
      <input
        className="input"
        value={letter.toLocaleUpperCase()}
        maxLength={1}
        onChange={(e) => {
          updateBox(id, e.target.value)
        }}
        onFocus={(event) => {
          event.target.select()
        }}
      />
    </>
  )
}
