import {useRouteError} from "react-router-dom";
import {AxiosError} from "axios";


export const Error = () => {
    const error = useRouteError() as AxiosError;


    return (
        <div>
            {error.message}
        </div>
    );
};

