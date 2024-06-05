import React, { useState, useEffect } from 'react';
import { request } from '../services/axios_helper.js';

const AuthContent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        request(
            "GET",
            "/messages",
            {}
        ).then((response) => {
            setData(response.data);
        });
    }, []);

    return (
        <div className="row justify-content-md-center">
            <div className="col-4">
                <div className="card">
                    <h5 className="card-title">Backend response</h5>
                    <p className="card-text">Content:</p>
                    <ul>
                        {data && data.map((line) => <li key={line}>{line}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AuthContent;
