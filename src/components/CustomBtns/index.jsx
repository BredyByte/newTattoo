import React from 'react';
import arrowStyles from './ArrowStyles.module.scss';
import PropTypes from 'prop-types';
import squareStyles from './SquareBtn.module.scss';

export const ArrowBtn = ({
  moving,
  onClickHandler,
  additionalStyles,
  text = '',
  isDisable,
  forTilt,
}) => {
  const btn = React.useRef(null);
  return (
    <span
      ref={btn}
      className={`${arrowStyles.root} ${forTilt ? arrowStyles.forTilt : ''} ${
        isDisable ? arrowStyles.disabled : ''
      }`}
      onClick={onClickHandler}
      onMouseMove={
        moving
          ? (e) => {
              const position = btn.current.getBoundingClientRect();
              const x = e.pageX - position.left - position.width / 2;
              const y = e.pageY - position.top - position.height / 2;
              btn.current.children[0].children[1].children[0].style.transform = `translate(${
                x * 0.3
              }px, ${y * 0.5}px)`;
            }
          : undefined
      }
      onMouseOut={
        moving
          ? () => {
              btn.current.children[0].children[1].children[0].style.transform =
                'translate(0px, 0px)';
            }
          : undefined
      }
      style={additionalStyles && additionalStyles}
    >
      <div className={arrowStyles.btnGeometry}>
        <div className={arrowStyles.arrow}></div>
        <div className={arrowStyles.circleContainer}>
          <div className={arrowStyles.circle}></div>
        </div>
      </div>
      <div className={arrowStyles.btnText}>{text}</div>
    </span>
  );
};

export const SquareBtn = ({ text, onClickHandler }) => {
  return (
    <button
      className={`${squareStyles.root} ${squareStyles.drawBorder}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

ArrowBtn.propTypes = {
  moving: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func,
  additionalStyles: PropTypes.object,
  text: PropTypes.string,
  isDisable: PropTypes.bool,
  forTilt: PropTypes.bool,
};

SquareBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
};
