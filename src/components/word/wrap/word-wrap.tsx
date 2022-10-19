import './word-wrap.css'
import React, { Fragment, useEffect, useState } from 'react'
import { LetterBox } from '../letter/letter-box'
import { Modal } from '../../modal/result-modal'
import { useTypeSelector } from '../../../hook/useTypeSelector'
import { useActions } from '../../../hook/useAction'

interface WordWrapsProps {
  numberChangeLetter: number
}

export const WordWraps: React.FC<WordWrapsProps> = ({ numberChangeLetter }) => {
  const { submit } = useActions()
  const [boxList, setBoxList] = useState<JSX.Element[]>()
  const { box, validate } = useTypeSelector(({ box, validate }) => {
    return { box, validate }
  })

  useEffect(() => {
    const letterBoxes = box.order.map((id) => (
      <Fragment key={id}>
        <LetterBox id={id} />
      </Fragment>
    ))
    setBoxList(letterBoxes)
  }, [box.letters])

  const onClick = () => {
    submit(box.history, box.order, box.letters, numberChangeLetter)
  }

  return (
    <div>
      {!validate.isShowModal && (
        <div className="wordwrap-container">
          <div className="container last-word">
            <h1 className="title is-1">
              {box.history[box.history.length - 1]}
            </h1>
          </div>
          <div className="container">{boxList}</div>
          <div className="container">
            <button
              className="button is-primary"
              type="submit"
              onClick={onClick}
            >
              SUBMIT
            </button>
          </div>
        </div>
      )}
      {validate.isShowModal && (
        <div className="show-modal">
          <Modal isShown={true} modalContent={validate.message || ''} />
        </div>
      )}
    </div>
  )
}
