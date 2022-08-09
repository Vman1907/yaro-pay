import Lottie from "react-lottie"
import * as animationData from '../assets/99318-hms-loading.json'

import '../styles/Loading.css'

const Loading = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid'
        }
    };

    return (
        <>
            <div className="loading">
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400} />
            </div>
        </>
    )
}

export default Loading