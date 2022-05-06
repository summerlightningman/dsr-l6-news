import {FC, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import Endpoint from "../../endpoint";

const NewsPage: FC = () => {
    const navigate = useNavigate();
    const [cookies] = useCookies(['token']);

    useEffect(() => {
        if (!cookies.token)
            navigate(Endpoint.SIGN_IN);
    }, [cookies.token, navigate]);

    return <div>
        NewsPage works!
    </div>
};

export default NewsPage;