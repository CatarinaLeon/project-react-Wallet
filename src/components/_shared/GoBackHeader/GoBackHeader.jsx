import React from 'react'
import PropTypes from 'prop-types'
import s from './GoBackHeader.module.scss'


function GoBackHeader({title,handleGoBack}) {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
            <button className={s.button} onClick={(e)=>handleGoBack()}>go back</button> 
            <h1 className={s.title}>{title}</h1>
            </div>
        </header>
    )
}
GoBackHeader.propTypes = {
    title: PropTypes.string,
}
export default GoBackHeader
