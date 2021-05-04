import {useState} from 'react'
export function Button ( props ) {
    const [click,setClick] =useState(props.start)
    const update = () => {
        setClick( click + 1)
    }
    return (
        <button claasName="button" onClick={update}>
            {"clicked" + click + "times"}
        </button>
    )
}
export default Button