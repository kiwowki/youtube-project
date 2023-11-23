import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollTo = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollTo;