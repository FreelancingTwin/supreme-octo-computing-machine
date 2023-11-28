import React from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from 'react-redux';
import { fillForm } from '../features/formikSlice'; // Import fillForm action creator
import { toggleFormStatusAsFilled } from '../features/formStatusSlice'
export default function Email() {
  const formData = useSelector(state => state.form.userData); // Accessing the userData slice
  // console.log(formData.form.userData)
  const formFilled = useSelector(state => {
    // console.log('FORMSTATUS:', state.formStatus);
  })
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      // ...formData
    },
    onSubmit: values => {
      dispatch(fillForm(values));
      dispatch(toggleFormStatusAsFilled());
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="John@John.com"
      />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder="Full name"
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        name="age"
        id="age"
        min="1"
        max="150"
        onChange={formik.handleChange}
        value={formik.values.age ? formik.values.age : 18}
      />

      <label>Matter</label>
      <textarea
        type='text'
        name="matter"
        id="matter"
        placeholder="enter the matter here in detail"
        onChange={formik.handleChange}
        value={formik.values.matter}
      />

      <label>Phone number</label>
      <input type="tel" name="phone" id="phone" placeholder="phone number"
      value={formik.values.phone}
      onChange={formik.handleChange}/>
      <button type="submit">Save</button>
    </form>
  );
}
