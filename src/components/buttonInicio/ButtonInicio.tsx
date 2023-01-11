import React from "react"
import "./ButtonInicio.css"

function ButtonInicio(props: {txt: string, callback: () => void}) {
    return(
        <div onClick={props.callback} className="btn-zoom">
            {props.txt}
        </div>
    )
}

export { ButtonInicio }