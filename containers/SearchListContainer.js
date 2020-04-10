import {connect} from 'react-redux';
import {fetchPharmacies} from '../actions/search';
import SearchForm from '../components/SearchForm';

const mapStateToProps = state => {
    return {
        pharmacies: state.pharmacy.pharmacies
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadPharmacies: () => dispatch(fetchPharmacies()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);