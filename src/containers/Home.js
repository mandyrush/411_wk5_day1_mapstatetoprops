import { connect } from "react-redux";
import Home from '../components/Home';

const mapStatetoProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStatetoProps)(Home);