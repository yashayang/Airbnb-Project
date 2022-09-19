import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginForm.css';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;


// import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import './LoginForm.css';

// function LoginFormPage() {
//   const dispatch = useDispatch();
//   const sessionUser = useSelector(state => state.session.user);
//   const [credential, setCredential] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState([]);

//   if (sessionUser) return (
//     <Redirect to="/" />
//   );

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors([]);
//     return dispatch(sessionActions.login({ credential, password }))
//       .catch(async (res) => {
//         const data = await res.json();
//         if (data && data.errors) setErrors(data.errors);
//       });
//   }

//   const handleDemoUser = (e) => {
//     e.preventDefault();
//     setErrors([]);
//     return dispatch(
//         sessionActions.login({credential: 'Demo-lition', password: 'password'})
//     ).catch(async (res) => {
//         const data = await res.json();
//         if (data && data.errors) setErrors(data.errors);
//     });
// };

//   return (
//     <div id="loginContainer">
//     <form onSubmit={handleSubmit}>
//     <div id="loginTitle">Log in or sign up</div>
//       <div id="fieldContainer">
//       <div id="welcomeDiv">Welcome to AirBnB</div>
//       <ul>
//         {errors.map((error, idx) => <li key={idx}>{error}</li>)}
//       </ul>
//       <div className="inputContainer" id="emailContainer">
//       <label className="inputLabel">
//         Username or Email
//         <input
//           type="text"
//           value={credential}
//           onChange={(e) => setCredential(e.target.value)}
//           required
//           className="inputField"
//         />
//       </label>
//       </div>
//       <div className="inputContainer" id="passwordContainer">
//       <label className="inputLabel">
//         Password
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="inputField"
//         />
//       </label>
//       </div>
//       <div>
//       <button className="styledButton" type="submit">Log In</button>
//       <button className="styledButton" onClick={handleDemoUser}>Demo User</button>
//       </div>
//     </div>
//     </form>
//     </div>
//   );
// }

// export default LoginFormPage;
