import { Fragment } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import { ProductDescription } from './ProductDescription'

describe('(Component) ProductDescription', () => {
  it('should render component', () => {
    const wrapper = shallow(<ProductDescription />)

    expect(wrapper.equals(
      <Fragment>
        <i role='button' className='bi bi-info-circle text-primary bg-white position-absolute rounded-circle d-flex product-description-icon'></i>
        <div className='product-description position-absolute'>
          <ListGroup className='text-center'>
            <ListGroup.Item className='bg-secondary text-white'>Dimensions</ListGroup.Item>
            <ListGroup.Item>h-104 mm x w-193 mm</ListGroup.Item>
            <ListGroup.Item className='bg-secondary text-white'>Weight</ListGroup.Item>
            <ListGroup.Item>2220 g</ListGroup.Item>
          </ListGroup>
        </div>
      </Fragment>
    )).to.equal(true)
  })
})