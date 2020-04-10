import {connect} from 'react-redux';
import {addPharmacy} from '../actions/pharmacy';
import PharmacyForm from '../components/PharmacyForm';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        addPharmacy: pharmacy => dispatch(addPharmacy(pharmacy))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PharmacyForm);