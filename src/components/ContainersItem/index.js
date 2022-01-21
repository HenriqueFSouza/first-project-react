import React from "react"
import { ContainersItens as Container } from './style'

function ContainersItens({ children, isBlur }) {

    return (
        <Container isBlur={isBlur}>{children}</Container>
    )
}

export default ContainersItens