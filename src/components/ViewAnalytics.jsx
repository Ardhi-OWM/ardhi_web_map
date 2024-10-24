//import React from 'react'
import Button from './Button';
import { Replace, View } from 'lucide-react';

const ViewAnalytics = () => {
    return (
        <div className="view-analytics-container flex w-full justify-center mt-5 mx-auto">
            {/* <Button className="hidden lg:flex mx-5 w-1/3" href="https://ardhi.de/" white={false} >
                <span className="font-grotesk font-light text-sm tracking-tagline uppercase underline underline-offset-4"> View Analytics</span>
            </Button> */}
            <Button className="hidden lg:flex mx-8 w-1/3 items-center" href="https://ardhi.de/" white={false}>
                <div className="flex items-center w-full">
                    <View   className="mr-3" />
                    <span className="font-grotesk font-light text-sm tracking-tagline uppercase underline underline-offset-4 ml-1">
                        View Analytics
                    </span>
                </div>
            </Button>
            <Button className="hidden lg:flex mx-8 w-1/3 items-center" href="https://ardhi.de/" white={false}>
                <div className="flex items-center w-full">
                    <Replace className="mr-3" />
                    <span className="font-grotesk font-light text-sm tracking-tagline uppercase underline underline-offset-4 ml-1">
                        Convert the View ...
                    </span>
                </div>
            </Button>

        </div>
    )
}

export default ViewAnalytics;