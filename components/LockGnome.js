import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    locked: state.gnome_locked
  }
}

const LockGnome = ({locked}) => {

  return (
      <div >
        {locked? 'Gnome Locked' : ''}
      </div>
    );
}

export default connect(mapStateToProps)(LockGnome);