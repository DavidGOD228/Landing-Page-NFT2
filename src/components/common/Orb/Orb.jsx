import React, {useEffect, useRef} from 'react';

import classes from './style.module.scss';

export const Orb = () => {

  const orbRef = useRef()

  useEffect(() => {
    const rect = orbRef.current.getBoundingClientRect(),
      rectBox = orbRef.current.parentNode.getBoundingClientRect(),
      xMax = rectBox.width + rectBox.x - rect.width,
      yMax = rectBox.height + rectBox.y - rect.height,
      maxSpeed = 1;

    let x = rect.x,
      y = rect.y,
      xDelta,
      yDelta;

    setSpeed();
    window.requestAnimationFrame(move);

    function move() {
      x = x + xDelta;
      y = y + yDelta;
      if (x < rectBox.x || x > xMax) {
        xDelta = -xDelta;
        x = x < rectBox.x ? rectBox.x : xMax;
      }
      if (y < rectBox.y || y > yMax) {
        yDelta = -yDelta;
        y = y < rectBox.y ? rectBox.y : yMax;
      }

      orbRef.current.style.left = x + "px";
      orbRef.current.style.top = y + "px";
      window.requestAnimationFrame(move);
    };

    function setSpeed() {
      xDelta = rand(-maxSpeed, maxSpeed);
      yDelta = rand(-maxSpeed, maxSpeed);
    }

    function rand(min, max) {
      return Math.random() * (max - min + 1) + min;
    }
  }, [])

  return (
    <div ref={orbRef} className={classes.orb}/>
  );
};
