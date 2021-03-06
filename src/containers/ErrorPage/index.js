import React from "react"
import { connect } from "react-redux"
import { push } from 'connected-react-router';
import { routes } from '../Router';
import styled, {keyframes} from "styled-components"
import { getCodeIbge } from "../../actions/cityIbge"
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { setMenuStatus } from "../../actions/menu";

const animationLoading = keyframes`
    0% {
        width: 80%;
    }
    100% {
        width: 90%;
    };
`

const LoagingWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const LoadingImage = styled.img`
    animation: ${animationLoading} 2s 0s alternate infinite;
`

class ErrorPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        this.props.setMenuStatus(false)
    }

    componentWillUnmount(){
        this.props.setMenuStatus(true)
    }

    render() {
        return (
            <LoagingWrapper>
                <LoadingImage src={require("../../images/logo_bolsa_familia.svg")} />
                <Typography variant="h6" gutterBottom>
                    Ocorreu um erro. Tente novamente em alguns minutos...
                </Typography>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={this.props.setSelectCityPageRoute()}
                >
                    TENTAR NOVAMENTE
                </Button>
            </LoagingWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => ({
    setMenuStatus: (status) => dispatch(setMenuStatus(status)),
    setSelectCityPageRoute: () => dispatch(push(routes.root))
  })

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);


