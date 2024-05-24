import { request, setAuthHeader } from '../helpers/axios_helper';

export default class AuthContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: null
        };
    }

    componentDidMount() {
        this.fetchMessages();
    }

    fetchMessages = () => {
        request("GET", "/messages", {})
            .then(response => {
                this.setState({ data: response.data, error: null });
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    // Unauthorized error, clear auth header
                    setAuthHeader(null);
                    this.setState({ error: "Unauthorized. Please log in again." });
                } else {
                    // Other errors
                    this.setState({ error: "An error occurred while fetching messages." });
                }
            });
    };

    render() {
        const { data, error } = this.state;

        return (
            <div className="row justify-content-md-center">
                <div className="col-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Backend response</h5>
                            {error ? (
                                <p className="card-text">{error}</p>
                            ) : (
                                <div>
                                    <p className="card-text">Content:</p>
                                    <ul>
                                        {data.map((line, index) => (
                                            <li key={index}>{line}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
