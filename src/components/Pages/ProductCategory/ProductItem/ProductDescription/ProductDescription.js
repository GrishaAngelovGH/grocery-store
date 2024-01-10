import { Fragment } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import PropTypes from 'prop-types'

import './ProductDescription.css'

import translate from 'translate'

export const ProductDescription = ({ strings }) => (
  <Fragment>
    <i role='button' className='bi bi-info-circle text-primary bg-white position-absolute rounded-circle d-flex product-description-icon'></i>
    <div className='product-description position-absolute'>
      <ListGroup className='text-center'>
        <ListGroup.Item className='bg-secondary text-white'>{strings.dimensions}</ListGroup.Item>
        <ListGroup.Item>{strings.h}-104 {strings.mm} x {strings.w}-193 {strings.mm}</ListGroup.Item>
        <ListGroup.Item className='bg-secondary text-white'>{strings.weight}</ListGroup.Item>
        <ListGroup.Item>2220 {strings.g}</ListGroup.Item>
      </ListGroup>
    </div>
  </Fragment>
)

ProductDescription.propTypes = {
  strings: PropTypes.object.isRequired
}

ProductDescription.defaultProps = {
  strings: {
    dimensions: 'Dimensions',
    h: 'h',
    w: 'w',
    weight: 'Weight',
    g: 'g',
    mm: 'mm'
  }
}

export default translate('Pages.ProductCategory.ProductItem.ProductDescription')(ProductDescription)