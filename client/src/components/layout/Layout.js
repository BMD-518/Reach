import React from "react";
import { connect } from 'react-redux';

function Layout (props) {

        return(
            <div>

            { props.user._id !== props.sender._id ?
              <li className="d-flex mb-4 pb-3">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar" className="avatar rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1" />
                    <div className="chat-body pull-left white p-3 ml-2 z-depth-1">
                        <div className="header">
                        <strong className="primary-font">{props.sender.name}</strong>
                        <small className="pull-right text-muted"><i className="far fa-clock" /> 12 mins ago</small>
                        </div>
                        <hr className="w-100" />
                        <p className="mb-0">
                        {props.message}
                        </p>
                    </div>
                </li>
                :
                <li className="d-flex justify-content-end mb-4 pb-3">
                    <div className="chat-body pull-left white p-3 ml-2 z-depth-1">
                        <div className="header">
                        <strong className="primary-font">{props.sender.name}</strong>
                        <small className="pull-right text-muted"><i className="far fa-clock" /> 12 mins ago</small>
                        </div>
                        <hr className="w-100" />
                        <p className="mb-0">
                        {props.message}
                        </p>
                    </div>
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar" className="avatar rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1" />
                </li>}

            </div>
        )
}

const mapStateToProps = state => {
    return {
      user: state.auth.user
    };
  };

export default connect(mapStateToProps) (Layout);