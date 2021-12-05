import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";

const mapStatetoProps = (state) => {
    return {
        cars: state.cars,
        user: state.user
    }
}

export default connect(mapStatetoProps)(Dashboard);