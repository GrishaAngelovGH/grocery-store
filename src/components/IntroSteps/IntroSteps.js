import { Component } from 'react'
import { Steps } from 'intro.js-react'

export const steps = [
    {
        intro: <div className='alert alert-success text-center'>Welcome to the G&S Grocery Store!</div>,
    },
    {
        intro: <div className='alert alert-success text-center'>Only the following menu items are available: <div className='alert alert-warning'><div><i className='bi bi-arrow-right-circle'></i> Food</div><div><i className='bi bi-arrow-right-circle'></i> Celebration Cakes</div><div><i className='bi bi-arrow-right-circle'></i> All Cakes</div></div></div>,
    },
    {
        intro: <div className='alert alert-success text-center'>You could access it directly from <a href='#/category/all-cakes' className='font-weight-bold bg-primary p-1 text-white rounded'>here</a> or explore it on your own.</div>,
    }
]

class IntroSteps extends Component {
    handleExit = () => { }

    render() {
        return (
            <Steps
                initialStep={0}
                enabled={true}
                steps={steps}
                options={{
                    dontShowAgain: true,
                    showProgress: true,
                    showBullets: false
                }}
                onExit={this.handleExit}
            />
        )
    }
}

export default IntroSteps