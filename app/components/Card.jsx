import React from 'react'

export default props => {
  return (
    <div className={props.columns} >
      <div className='mdc-card'>
        <img src={props.imgUrl} style={props.imgStyle} />
        <section className='mdc-card__primary'>
          <h1 className='mdc-card__title mdc-card__title--large'>{props.name}</h1>
          <h2 className='mdc-card__subtitle'>{props.info}</h2>
        </section>
        <section className='mdc-card__supporting-text'>
          {props.description || 'Hello Word!'}
        </section>
        <section className='mdc-card__actions'>
          {props.action1 && <button
            className='mdc-button mdc-button--raised mdc-card__action'
            onClick={props.action1}>{props.action1text}</button>}
          {props.action2 && <button
            className='mdc-button mdc-button--raised mdc-card__action bg-danger'
            onClick={props.action2}>{props.action2text}</button>}
        </section>
      </div>
    </div>
  )
}
