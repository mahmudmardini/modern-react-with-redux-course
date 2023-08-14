import {useState} from "react";


function useCounter (initialCount) {
    const [count, setCount] = useState(initialCount);

    function increment () {
        setCount(count+1);
    }


    return {
        count,
        increment
    }
}

export default useCounter;