import React from "react"
import styled from "styled-components"

class SelectCityPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input: undefined,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("certo")
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div>Saiba o valor e a quantidade de pessoas que receberam o auxílio emergêncial. Pesquise por uma cidade:</div>
                <input type="text" />
                <button type="submit">Pesquisar</button>
            </form>
        )
    }
}
export default SelectCityPage;


