//import React from 'react'
import Button from './Button';

const ViewAnalytics = () => {
    return (
        <div className="view-analytics-container flex w-full justify-center mt-5 mx-auto">
            <Button className="hidden lg:flex mx-10 w-1/3" href="https://ardhi.de/" white={false} >
                <span className="font-grotesk font-light text-sm tracking-tagline uppercase underline underline-offset-4"> View Analytics</span>
            </Button>
            <Button className="hidden lg:flex mx-10 w-1/3" href="https://ardhi.de/" white={false} >
                <span className="font-grotesk font-light text-sm tracking-tagline uppercase underline underline-offset-4"> Convert the View </span>
            </Button>

        </div>
    )
}

export default ViewAnalytics;