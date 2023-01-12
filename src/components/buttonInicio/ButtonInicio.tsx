import React from "react"
import "./ButtonInicio.css"

function ButtonInicio(props: {txt: string, callback?: () => void, className?: string}) {
    return(
        <>
        {/**
         * @Desc - Botão inicial do sistema
         *  que tem a função de criar uma postagem
         * e/ou de ser direcionado para a página que lista todos os projetos
         */}
        <div onClick={props.callback} className={props.className}>
            {props.txt}
        </div>
        </>
    )
}

export { ButtonInicio }