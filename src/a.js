import React from 'react';
import { Formik,ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    birthDate: Yup.string().required('Birth Date is required'),
    gender: Yup.string().required('Gender is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobileNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
      .required('Mobile Number is required'),
    course: Yup.string().required('Course selection is required'),
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        middleName: '',
        lastName: '',
        birthDate: '',
        gender: '',
        address: '',
        email: '',
        mobileNumber: '',
        phoneNumber: '',
        workNumber: '',
        company: '',
        course: '',
        comments: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form Data Submitted:', values);
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <h1>Registration Form</h1>

          {/* Student Name */}
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
              <ErrorMessage name="firstName" component="div" />
          </div>

          <div>
            <label>Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={values.middleName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}
          </div>

          {/* Birth Date */}
          <div>
            <label>Birth Date</label>
            <input
              type="date"
              name="birthDate"
              value={values.birthDate}
              onChange={handleChange}
            />
            {touched.birthDate && errors.birthDate && <div>{errors.birthDate}</div>}
          </div>

          {/* Gender */}
          <div>
            <label>Gender</label>
            <select
              name="gender"
              value={values.gender}
              onChange={handleChange}
            >
              <option value="">Please Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {touched.gender && errors.gender && <div>{errors.gender}</div>}
          </div>

          {/* Address */}
          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
            />
          </div>

          {/* Student Email */}
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {touched.email && errors.email && <div>{errors.email}</div>}
          </div>

          {/* Mobile Number */}
          <div>
            <label>Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={values.mobileNumber}
              onChange={handleChange}
            />
            {touched.mobileNumber && errors.mobileNumber && <div>{errors.mobileNumber}</div>}
          </div>

          {/* Phone Number */}
          <div>
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
            />
          </div>

          {/* Work Number */}
          <div>
            <label>Work Number</label>
            <input
              type="text"
              name="workNumber"
              value={values.workNumber}
              onChange={handleChange}
            />
          </div>

          {/* Company */}
          <div>
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={values.company}
              onChange={handleChange}
            />
          </div>

          {/* Course */}
          <div>
            <label>Course</label>
            <select
              name="course"
              value={values.course}
              onChange={handleChange}
            >
              <option value="">Please Select</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
            </select>
            {touched.course && errors.course && <div>{errors.course}</div>}
          </div>

          {/* Additional Comments */}
          <div>
            <label>Additional Comments</label>
            <textarea
              name="comments"
              value={values.comments}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default RegistrationForm;






const formatCNIC = (value) => {
  // Remove any non-digit characters except dashes
  const cleanedValue = value.replace(/\D/g, "");

  let formattedCNIC = cleanedValue;

  // Insert first dash after 5 digits and second dash after 12 digits
  if (cleanedValue.length > 5 && cleanedValue.length <= 12) {
    formattedCNIC = `${cleanedValue.slice(0, 5)}-${cleanedValue.slice(5)}`;
  } else if (cleanedValue.length > 12) {
    formattedCNIC = `${cleanedValue.slice(0, 5)}-${cleanedValue.slice(
      5,
      12
    )}-${cleanedValue.slice(12)}`;
  }

  return formattedCNIC;
};

// maxLength={15}
//                 onChange={(e) => {
//                   const formattedCNIC = formatCNIC(e.target.value);
//                   setFieldValue("cnic", formattedCNIC);
//                 }}


