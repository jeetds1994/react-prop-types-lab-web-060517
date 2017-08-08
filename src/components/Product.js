// Code Product Component Here

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';



class Product extends React.Component {
  render(){
    return(
    <div>
      Product
    </div>)
  }
}

Product.defaultProps = {
  hasWatermark: false
}

function range(start, end, step, offset) {

  var len = (Math.abs(end - start) + ((offset || 0) * 2)) / (step || 1) + 1;
  var direction = start < end ? 1 : -1;
  var startingPoint = start - (direction * (offset || 0));
  var stepSize = direction * (step || 1);

  return Array(len).fill(0).map(function(_, index) {
    return startingPoint + (stepSize * index);
  });

}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(range(80, 300)).isRequired
}

export default Product;
//
// In the components/Product.js file, create a Product React component.
// This component has the following props:
// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300
// Note: for the weight prop, we'll need custom logic. Remember that it's possible to write your own prop validator function!
