import React from 'react'
import PropTypes from "prop-types";

const MainInfo = ({title,options,btnTitle,activePage,openActivePage}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>EUR</p>
            <button onClick={()=>openActivePage(activePage)} type="button">{btnTitle}</button>
            <ul>
                {options.map(({period,sum}) => (
                    <li key={period}>
                    <span>{period}</span>
                    <span>{sum}</span>
                </li>
                ))}
            </ul>
        </section>
    )
}
MainInfo.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      period: PropTypes.string.isRequired,
      sum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired
  ).isRequired,
  btnTitle: PropTypes.string.isRequired,
};
export default MainInfo
