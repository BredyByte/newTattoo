import React from 'react';
import './PreviewPageBtn.scss';

export const PreviewPageBtn = () => {
  const btn = React.useRef(null);
  const onClickHandler = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };
  return (
    <span
      ref={btn}
      className="btn"
      onClick={onClickHandler}
      onMouseMove={(e) => {
        const position = btn.current.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;
        btn.current.children[0].children[1].children[0].style.transform = `translate(${
          x * 0.3
        }px, ${y * 0.5}px)`;
      }}
      onMouseOut={() => {
        btn.current.children[0].children[1].children[0].style.transform =
          'translate(0px, 0px)';
      }}
    >
      <div className="other">
        <div className="arrow"></div>
        <div className="circleContainer">
          <div className="circle"></div>
        </div>
      </div>
      <div className="text">Enter</div>
    </span>
  );
};
