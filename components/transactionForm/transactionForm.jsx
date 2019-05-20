import React, { useState, useEffect } from 'react'
import useForm from 'react-hook-form'
import { connect } from 'react-redux';
import { fetchPaymentModeRequest} from '../../store/paymentMode';
import { fetchTransectionRequest, postTransectionRequest } from '../../store/transection';
import { fetchUsersRequest } from '../../store/users';
import { Row, Col, Button } from 'reactstrap';
import './transactionForm.css'

const mapStateToProps = state => ({
  users: state.users.users,
  modes: state.paymentModes.modes,
});

const mapDispatchToProps = dispatch => ({
  postData: (transaction) => { dispatch(postTransectionRequest(transaction)) },
  fetchData: () => { dispatch(fetchUsersRequest()), dispatch(fetchPaymentModeRequest()), dispatch(fetchTransectionRequest()) },
});

const transectionForm = ({fetchData, postData, users, modes}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => { postData(data) };
  const [user, setUser] = useState(null);
  const [payMode, setPayMode] = useState(null);
  const dispatchActions = action => {
    useEffect( () => {
      action();
    }, [])
  }

  dispatchActions(fetchData);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col>
          <p>Select a user</p>
          <ul className="buttonSelection">
            {users.map(usr => {
              return (
                <li>
                  <input
                    type="radio"
                    id={usr._id}
                    name="user"
                    value={usr.userName}
                    onClick={() => setUser(usr.userName)}
                    checked={user === usr.userName}
                    ref={register({ required: true })}
                  />
                  <label for={usr._id}>{usr.userName}</label>
                </li>
              );
            })}
          </ul>
          <div style={{ color: 'red' }}>{errors.user && 'Please select a user.'}</div>
        </Col>
        <Col>
          <p>Select payment mode</p>
          {modes.map(mode => {
            return (
              <div>
                <input
                  type="radio"
                  id={mode._id}
                  name="mode"
                  value={mode.name}
                  onClick={() => setPayMode(mode.name)}
                  checked={payMode === mode.name}
                  ref={register({ required: true })}
                />
                <label for={mode._id}>{mode.name}</label>
              </div>
            );
          })}
          <div style={{ color: 'red' }}>{errors.mode && 'Please select a payment mode.'}</div>
        </Col>
        <Col>
          <input name="amount" ref={register({ required: true, pattern: /\d+/, validate: (value) => value <= 5000 && value > 0 })} />
          <div style={{ color: 'red' }}>{errors.amount && '***Maximum allowed amount is 5000INR.'}</div>
        </Col>
        <Col>
          <Button type="submit" color="primary">Transfer</Button>
        </Col>
      </Row>
    </form>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(transectionForm);