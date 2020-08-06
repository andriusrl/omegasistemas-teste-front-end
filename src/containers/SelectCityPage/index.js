import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCodeIbge } from "../../actions/cityIbge"
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


class SelectCityPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inputSearch: "",
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getCodeIbge(this.state.inputSearch)
    }

    handleInputChange = (e) => {
        this.setState({
            inputSearch: e.target.value
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>Saiba o valor e a quantidade de pessoas que receberam o bolsa familisa nos ultimos 4 meses. Pesquise por uma cidade:</div>
                <input type="text" value={this.state.inputSearch} onChange={this.handleInputChange} />
                {/* <button type="submit">Pesquisar</button> */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    // endIcon={<Icon>send</Icon>}
                >
                    Pesquisar
                </Button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getCodeIbge: (city) => dispatch(getCodeIbge(city)),
})

export default connect(null, mapDispatchToProps)(SelectCityPage);


