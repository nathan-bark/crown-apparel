import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocfromUserAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      console.log(user);

      await createUserDocfromUserAuth(user,  { displayName } );
      resetFormFields()
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("A user with that email already exists!");
      } else {
        console.log("user error", error);
      }
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleFormChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
        label='Email'
          type="email"
          required
          onChange={handleFormChange}
          name="email"
          value={email}
        />

        
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleFormChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleFormChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
