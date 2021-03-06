import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../loadingGif/Loader';
import { getProfilesById } from '../../actions/Profile';
import { Link } from 'react-router-dom';
import PostItem from '../../components/posts/PostItem';
import PostForm from '../../components/posts/PostForm';
import Alert from '../Alert';
import Footer from '../../components/footer/Footer';
import { getPostsByProfile } from '../../actions/Post';

const Profile = ({
  getProfilesById,
  getPostsByProfile,
  profile: { profile, loading },
  auth,
  match,
  post: { posts }
}) => {
  useEffect(() => {
    getProfilesById(match.params.id);
    getPostsByProfile(match.params.id, match.params.id);
  }, [getProfilesById, getPostsByProfile, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className='row' id='profilesHeader'>
            <Link
              to='/profiles'
              className='btn rounded-pill aqua-gradient mx-4'
            >
              <i className='black-text fas fa-arrow-left fa-3x'></i>
            </Link>
            <h1 className='prim mt-3'>{profile.user.name}</h1>
          </div>
          <div className='aqua-gradient' id='borderBottom'></div>

          <Alert />
          <div className='container my-5 py-5 px-5' id='profileContainer'>
            <div className='row'>
              <div className='card mediumBGcolor col-md-5'>
                <div className='row'>
                  <div className='col-6 '>
                    <img
                      src={`/uploads/${profile.user.avatar}`}
                      alt=''
                      className='img-thumbnail ml-2 my-2 aqua-gradient rounded-circle'
                    />
                  </div>
                  <div className='col-6 pt-5 pl-5 align-bottom'>
                    <div className='row details'>
                      <h2 className='prim'>Age: </h2>
                      <h3 className='sec mt-1'>{profile.age}</h3>
                    </div>
                    <div className='row details'>
                      <h2 className='prim'>Location: </h2>
                      <h3 className='sec mt-1'>{profile.current_city}</h3>
                    </div>
                    <div className='row details'>
                      <h2 className='prim'>Gender: </h2>
                      <h3 className='sec mt-1'>{profile.gender}</h3>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <h2 className='prim'>About: </h2>
                    <h3 className='sec mt-1'>{profile.about_me}</h3>
                  </div>
                </div>
                <div className='row'>
                  <div className='card col-12 lightBGcolor'>
                    <div className='card mt-2 aqua-gradient'>
                      <h4 className='black-text mx-auto'>Following:</h4>
                    </div>

                    <div className='row'>
                      <img
                        className='avatar img-thumbnail aqua-gradient my-1 mx-1 rounded-circle'
                        src='https://media-exp1.licdn.com/dms/image/C4E03AQEm6SoHwOSurQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=XtLiaupqVL2MM7CZ-3fHzQ2lWtVaXLp2UFiRd0HT_5k'
                        alt=''
                      />
                      <h2 className=' my-auto ml-4 prim'>Stan</h2>
                    </div>
                    <div className='row'>
                      <img
                        className='avatar img-thumbnail aqua-gradient my-1 mx-1 rounded-circle'
                        src='https://media-exp1.licdn.com/dms/image/C4E03AQGj6P2HocGkqQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=HMUSLmPFgo9lDBTIArVDsAIRJMJZKw60RwY3182sgkU'
                        alt=''
                      />
                      <h2 className=' my-auto ml-4 prim'>Leif</h2>
                    </div>
                    <div className='row'>
                      <img
                        className='avatar img-thumbnail aqua-gradient my-1 mx-1 rounded-circle'
                        src='https://media-exp1.licdn.com/dms/image/C4E03AQGLUJ-1WkIQ-A/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=nc06xGf3QhxumXIbTPlNIBRSDSR1qxyBr7VfZyGM9wM'
                        alt=''
                      />
                      <h2 className=' my-auto ml-4 prim'>Adam</h2>
                    </div>
                  </div>
                  <div className='card col-12 lightBGcolor'>
                    <div className='card mt-2 aqua-gradient'>
                      <h4 className='black-text mx-auto'>Followers:</h4>
                    </div>

                    <div className='row'>
                      <img
                        className='avatar img-thumbnail aqua-gradient my-1 mx-1 rounded-circle'
                        src='https://media-exp1.licdn.com/dms/image/C4E03AQEm6SoHwOSurQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=XtLiaupqVL2MM7CZ-3fHzQ2lWtVaXLp2UFiRd0HT_5k'
                        alt=''
                      />
                      <h2 className=' my-auto ml-4 prim'>Stan</h2>
                    </div>
                    <div className='row'>
                      <img
                        className='avatar img-thumbnail aqua-gradient my-1 mx-1 rounded-circle'
                        src='https://media-exp1.licdn.com/dms/image/C4E03AQGj6P2HocGkqQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=HMUSLmPFgo9lDBTIArVDsAIRJMJZKw60RwY3182sgkU'
                        alt=''
                      />
                      <h2 className=' my-auto ml-4 prim'>Leif</h2>
                    </div>
                    <div className='row'>
                      <img
                        className='avatar img-thumbnail aqua-gradient my-1 mx-1 rounded-circle'
                        src='https://media-exp1.licdn.com/dms/image/C4E03AQGLUJ-1WkIQ-A/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=nc06xGf3QhxumXIbTPlNIBRSDSR1qxyBr7VfZyGM9wM'
                        alt=''
                      />
                      <h2 className=' my-auto ml-4 prim'>Adam</h2>
                    </div>
                  </div>
                  {auth.isAuthenticated &&
                    auth.loading === false &&
                    auth.user._id === profile.user._id && (
                      <Link
                        to='/edit-profile'
                        className='btn rounded mx-auto dusty-grass-gradient mx-4'
                      >
                        <i class='black-text fa-3x fas fa-user-edit'></i>
                      </Link>
                    )}
                </div>
              </div>
              <div className='col-md-7'>
                <div className='card mediumBGcolor col-12'>
                  <div className='d-flex justify-content-center mb-0 pt-2'>
                    <h2 className='prim'>{profile.user.name}'s Posts</h2>
                  </div>
                  <PostForm />
                  <div className='posts'>
                    {posts.map(post => (
                      <PostItem key={post._id} post={post} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
      <Footer />
    </Fragment>
  );
};

Profile.propTypes = {
  getPostsByProfile: PropTypes.func.isRequired,
  getProfilesById: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  post: state.post
});

export default connect(mapStateToProps, { getProfilesById, getPostsByProfile })(
  Profile
);
