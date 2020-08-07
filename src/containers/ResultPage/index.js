import React from "react"
import { connect } from "react-redux"
import { push } from 'connected-react-router';
import { routes } from '../Router';
import styled from "styled-components"
import { getCodeIbge } from "../../actions/cityIbge"
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const SelectCityPageWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class ResultPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }


    render() {
        const { classes } = this.props;
        console.log("Quase láaaa")
        console.log(this.props.voucherData)
        return (
            <SelectCityPageWrapper onSubmit={this.handleSubmit}>
                <Typography variant="h5" gutterBottom>
                    Relatório do bolsa familia
                </Typography>
                
            </SelectCityPageWrapper>
        )
    }
}

const mapStateToProps = state =>{
    return {
        voucherData: state.voucherData.voucherData
    }
}

export default connect(mapStateToProps, null)(ResultPage);


