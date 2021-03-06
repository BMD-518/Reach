import React, {Fragment} from "react";
import { connect } from 'react-redux';
import Moment from 'react-moment';
function Layout (props) {
        return(
            <Fragment>
            { (props.room === props.type) ?
                (props.user._id !== props.sender._id ?
              <li className="d-flex mb-4 pb-3">
                    {(!props.sender.avatar)?
                    <img src={"/uploads/default.png"} alt="avatar" className="avatar rounded-circle  mr-2 ml-lg-3 ml-0 z-depth-1" />
                    :
                    <img src={"/uploads/"+props.sender.avatar} alt="avatar" className="avatar rounded-circle  mr-2 ml-lg-3 ml-0 z-depth-1" />
                    }
                    <div className="chat-body pull-left lightBGcolor p-2 ml-2 w-75 z-depth-1">
                        <div className="header d-flex justify-content-between">
                        <strong className="primary-font prim">{props.sender.name}</strong>
                        <small className="pull-right text-muted"><i className="far fa-clock" /><Moment fromNow>{props.createdAt}</Moment></small>
                        </div>
                        <hr className="w-100 mt-1" />
                        <p className="mb-0 w-100 text-wrap sec">
                        {props.message}
                        </p>
                    </div>
                </li>
                :
                <li className="d-flex justify-content-end mb-4 pb-3">
                    <div className="chat-body pull-left lightBGcolor p-2 ml-2 w-75 z-depth-1">
                        <div className="header d-flex justify-content-between">
                        <small className="pull-right text-muted"><i className="far fa-clock" /><Moment fromNow>{props.createdAt}</Moment></small>
                        <strong className="primary-font prim">Me</strong>
                        </div>
                        <hr className="w-100 mt-1" />
                        <p className="mb-0 w-100 text-wrap sec">
                        {props.message}
                        </p>
                    </div>
                    {(!props.sender.avatar)?
                    <img src={"/uploads/default.png"} alt="avatar" className="avatar rounded-circle  mr-2 ml-lg-3 ml-0 z-depth-1" />
                    :
                    <img src={"/uploads/"+props.sender.avatar} alt="avatar" className="avatar rounded-circle  mr-2 ml-lg-3 ml-0 z-depth-1" />
                    }
                </li>)
            :
            null
            }

            </Fragment>
        )
}
const mapStateToProps = state => {
    return {
      user: state.auth.user,
      room: state.chats.room 
    };
  };
export default connect(mapStateToProps) (Layout);