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
import Box from '@material-ui/core/Box';


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
        }
    }

    removeAccents( inputString ) {
        var string = inputString;
          var mapAccentsHex 	= {
              a : /[\xE0-\xE6]/g,
              e : /[\xE8-\xEB]/g,
              i : /[\xEC-\xEF]/g,
              o : /[\xF2-\xF6]/g,
              u : /[\xF9-\xFC]/g,
              c : /\xE7/g,
              n : /\xF1/g
          };
          for ( var caracter in mapAccentsHex ) {
              var regularExpression = mapAccentsHex[caracter];
              string = string.replace( regularExpression, caracter );
          }
          return string;
      }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.removeAccents(this.state.inputSearch))
        this.props.getCodeIbge(this.removeAccents(this.state.inputSearch))
    }

    handleInputChange = (e) => {
        this.setState({
            inputSearch: e.target.value
        })
    }

    
    render() {
        const { classes } = this.props;

        return (
            <SelectCityPageWrapper onSubmit={this.handleSubmit}>
                <Typography variant="h5" gutterBottom>
                    Relatório do bolsa familia
                </Typography>
                <Typography variant="h5" gutterBottom>
                    (Últimos 3 meses)
                </Typography>
                <Box m={2} />
                <TextField id="outlined-basic" label="Insira o nome de uma cidade" variant="outlined" value={this.state.inputSearch} onChange={this.handleInputChange} />
                <Box m={1} />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    // endIcon={<Icon>send</Icon>}
                >
                    PESQUISAR CIDADE
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


