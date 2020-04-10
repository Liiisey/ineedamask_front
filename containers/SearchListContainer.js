import {connect} from 'react-redux';
import {fetchPharmacies} from '../actions/search';
import SearchList from '../components/SearchList';

const mapStateToProps = state => {
    return {
        pharmacies: state.pharmacy.pharmacies,
        loading: state.pharmacy.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPharmacies: () => dispatch(fetchPharmacies()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);