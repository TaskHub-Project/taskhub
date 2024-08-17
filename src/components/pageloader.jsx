
import { Bars } from "react-loader-spinner"

const PageLoader = () => {
    return (
        <div className="h-screen flex items-center justify-center">

            <Bars
                height="80"
                width="80"
                color="#FFFFFF"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

        </div>
    )
}

export default PageLoader