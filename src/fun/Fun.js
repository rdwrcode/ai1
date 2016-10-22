import React from 'react';
import cn from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

const Fun = () => (
  <div>
    <PrimaryBtn>Touch Me</PrimaryBtn>
    <DangerBtn>Don't Touch Me</DangerBtn>
  </div>
)

const Btn = ({primary, danger, className, ...props}) => {
  return (
    <button 
      type="button"
      className={cn(
        "btn",
        primary && "btn-primary",
        danger && "btn-danger",
        className
      )}
      {...props}
    />
  )
}

const PrimaryBtn = (props) => (
  <Btn
    primary
    {...props}
  />
)

const DangerBtn = (props) => (
  <Btn
    danger
    {...props}
  />
)

export default Fun;
