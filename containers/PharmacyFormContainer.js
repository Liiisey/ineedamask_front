import {connect} from 'react-redux';
import {pharmacyAdd} from '../actions/pharmacy';
import PharmacyForm from '../components/PharmacyForm';

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        pharmacyAdd: pharmacy => dispatch(pharmacyAdd(pharmacy))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PharmacyForm);