import {useState, useEffect} from 'react';

/*
* 리액트 미디어쿼리 훅
*
* @Param(String) - query : `(max-width: 768px)`과 같은 형태로 전달할 것.
* @return(boolean) - matches : query로 전달 받은 값을 현재 클라이언트와 비교한다.
* */
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const handler = (e) => setMatches(e.matches);

        setMatches(mediaQuery.matches);
        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, [query]);

    return matches;
};

export default useMediaQuery;
