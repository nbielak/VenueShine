import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import SessionForm from './session_form'
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';



const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "login",
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)