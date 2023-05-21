import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Toys Paradise`;
    }, [title])
};

export default useTitle;