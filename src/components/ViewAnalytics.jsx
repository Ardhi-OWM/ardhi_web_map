//import React from 'react'
import Button from './Button';

const ViewAnalytics = () => {
    return (
        <div className="view-analytics-container flex mt-10">
            <Button className="hidden lg:flex mx-10" href="https://ardhi.de/" white={false} >
                View Analytics
            </Button>
            <Button className="hidden lg:flex mx-10" href="https://ardhi.de/" white={false} >
                Convert the View
            </Button>

        </div>
    )
}

export default ViewAnalytics;