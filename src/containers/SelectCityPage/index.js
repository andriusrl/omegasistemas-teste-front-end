import React from "react"
import styled from "styled-components"

class SelectCityPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input: undefined,
        }
    }

    render() {
        
        return (
            <div>
                <div>Saiba o valor e a quantidade de pessoas que receberam o auxílio emergêncial. Pesquise por uma cidade:</div>
                <input type="text" />
            </div>
        )
    }
}


