import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product/Product';

function Main() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1 className='text-center'>Welcome to React Laravel Project</h1>   
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <div className="card-body">I'm an example component!</div>
                        <hr />
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
