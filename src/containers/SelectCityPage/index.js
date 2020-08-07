import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCodeIbge } from "../../actions/cityIbge"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';

const SelectCityPageWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class SelectCityPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inputSearch: "",
            value: ""
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

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
      };

    render() {
        const { classes } = this.props;

        return (
            <SelectCityPageWrapper onSubmit={this.handleSubmit}>
                <Typography variant="h5" gutterBottom>
                    Relatório do bolsa familia
                </Typography>
                <TextField id="outlined-basic" label="Insira o nome de uma cidade" variant="outlined" value={this.state.inputSearch} onChange={this.handleInputChange} />
                <Typography variant="h5" gutterBottom>
                    De quantos meses pra cá?
                </Typography>
                <RadioGroup row aria-label="gender" name="gender1" value={this.state.value} onChange={this.handleChange} >
                    <FormControlLabel value="1" control={<Radio />} label="1 mês" labelPlacement="top" />
                    <FormControlLabel value="2" control={<Radio />} label="2 meses" labelPlacement="top" />
                    <FormControlLabel value="3" control={<Radio />} label="3 meses" labelPlacement="top" />
                </RadioGroup>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    // endIcon={<Icon>send</Icon>}
                >
                    Pesquisar
                </Button>
                <FormHelperText>as requisições ao servidor do governo são limitadas</FormHelperText>
            </SelectCityPageWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getCodeIbge: (city) => dispatch(getCodeIbge(city)),
})

export default connect(null, mapDispatchToProps)(SelectCityPage);


