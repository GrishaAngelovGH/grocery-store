import { Fragment } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import './ProductDescription.css'

const ProductDescription = () => (
  <Fragment>
    <i role='button' className='bi bi-info-circle text-primary bg-white position-absolute rounded-circle d-flex product-description-icon'></i>
    <div className='product-description position-absolute'>
      <ListGroup className='text-center'>
        <ListGroup.Item className='bg-secondary text-white'>Dimensions</ListGroup.Item>
        <ListGroup.Item>h-104mm x w-193mm</ListGroup.Item>
        <ListGroup.Item className='bg-secondary text-white'>Weight</ListGroup.Item>
        <ListGroup.Item>2220 g</ListGroup.Item>
      </ListGroup>
    </div>
  </Fragment>
)

export default ProductDescription 