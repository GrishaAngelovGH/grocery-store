import { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { ShoppingBag as ShoppingBagIcon, Delete } from 'components/Icons'
import ShoppingBagItems from './ShoppingBagItems'

import './MiniShoppingBag.scss'
import pluralsFormatter from 'components/formatters/pluralsFormatter'
import translate from 'translate'

export class MiniShoppingBag extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showTooltip: false
        }
    }

    handleToggle = showTooltip => {
        showTooltip && this.setState({ showTooltip })
    }

    handleCloseButtonClick = () => {
        this.setState({ showTooltip: false })
    }

    render() {
        const { strings, lang, items, removeItemFromShoppingCart } = this.props

        let itemsCount = 0

        items.forEach(v => {
            itemsCount += v.qty
        })

        if (!items.length) {
            return <ShoppingBagIcon count={itemsCount} />
        }

        return (
            <OverlayTrigger
                show={this.state.showTooltip}
                placement={'bottom'}
                delay={{ show: 250 }}
                onToggle={this.handleToggle}
                overlay={(
                    <Tooltip>
                        <div className='row justify-content-center'>
                            <div className='col-md-10'>
                                <span className='font-weight-bold text-dark mr-1'>{`${strings.bag}:`}</span>
                                <span className='font-weight-bold text-secondary'>
                                    {`(${pluralsFormatter(itemsCount, strings.itemLabel)})`}
                                </span>
                            </div>
                            <div className='col-md-1'>
                                <span className='text-dark' role={'button'}>
                                    <Delete width={20} height={20} onClick={this.handleCloseButtonClick} />
                                </span>
                            </div>
                        </div>

                        <ShoppingBagItems
                            items={items}
                            lang={lang}
                            removeItemFromShoppingCart={removeItemFromShoppingCart}
                        />

                        <div className='d-flex justify-content-around border-top p-2'>
                            <Link to='/shopping-bag'>
                                <button type='button' className='btn btn-outline-primary'>{strings.viewBag}</button>
                            </Link>

                            <Link to='/checkout'>
                                <button type='button' className='btn btn-outline-success'>{strings.checkoutBtn}</button>
                            </Link>
                        </div>
                    </Tooltip>
                )}
            >
                <div role={'button'}>
                    <ShoppingBagIcon count={itemsCount} />
                </div>
            </OverlayTrigger>
        )
    }
}

MiniShoppingBag.propTypes = {
    items: PropTypes.array.isRequired,
    strings: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired
}

MiniShoppingBag.defaultProps = {
    strings: {
        bag: 'Bag',
        viewBag: 'View Bag',
        checkoutBtn: 'Checkout',
        itemLabel: {
            value: 'item',
            plural: 's'
        }
    }
}

export default translate('Pages.PageComponents.HeaderSection.MiniShoppingBag')(MiniShoppingBag)