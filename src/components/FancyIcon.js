import React from 'react';

/**
 * Renders a fancy icon :)
 * @param {string} iconClass 
 */
export const FancyIcon = (props) => {
  console.log(props.iconClass)
  return (
    <div>
      <i class={`fa fa-accusoft`}>wtf mate</i>
    </div>
  )
}
