import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCodeIbge } from "../../actions/city"

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
        this.props.getCodeIbge("Itapora")
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

const mapDispatchToProps = dispatch => ({
    getCodeIbge: (city) => dispatch(getCodeIbge(city)),
})

export default connect(null, mapDispatchToProps)(SelectCityPage);


