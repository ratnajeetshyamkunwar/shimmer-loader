import React from 'react'
import clsx from 'clsx';
import './loader.css';

const Loader = ({ width, height, style = {}, className, ...rest }) => {
  return (
    <div
      className={clsx('animate', className)}
      style={{
        width: width,
        height: height,
        ...style
      }} />
  )
}

const LoaderWrapper = ({ children, animate = false }) => {
  const modifiedChildren = React.Children.map(children,
    (child, i) => {
      if (animate) return <Loader {...child.props} />
      return React.cloneElement(child);
    });
  return modifiedChildren;
}

export { Loader, LoaderWrapper };