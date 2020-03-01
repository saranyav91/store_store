import React, {useRef} from "react";
import { useHistory } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { LOGIN } from "../../utils/actions";
import API from "../../utils/API";

function Login() {
    const [state, dispatch] = useStoreContext();
    const emailRef = useRef();
    const passRef = useRef();

    const history = useHistory();
    const handleClick = () => {
        API.login({ email: emailRef.current.value, password: passRef.current.value })
            .then(user => {
                
                history.push("/");
                dispatch({
                    type: LOGIN,
                    _id: user.data._id
                })
            });
    }
    return (

        <div className="container my-5 bg-light p-5">
            <h2 className="text-center">Login</h2>
            <form className=" mt-4 col-6">
                <div className="form-group">
                    <label>Username</label>
                    <input ref={emailRef} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                    
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input ref={passRef} type="password" className="form-control" placeholder="Password" />
                </div>


                <button type="button" className="btn btn-dark btn-lg" data-toggle="modal" data-target=".bd-example-modal-sm">Submit</button>

                <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">Logging in</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Home to products
                            </div>
                            <div className="modal-footer">

                                <button type="button" className="btn btn-dark" data-dismiss="modal" onClick={handleClick}>Close</button>
                            </div>

                        </div>
                    </div>
                </div>


            </form>
        </div>
    );
}

export default Login;