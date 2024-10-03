import { Formik, ErrorMessage } from "formik";
import React from "react";
import "./App.css";
import * as Yup from "yup";
const App = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required please enter"),
    lastName: Yup.string().required("Last Name is required"),
    middleName: Yup.string().required("Middle Name is required"),
    birthDate: Yup.string().required("Enter your Birth Date"),
    gender: Yup.string().required("Enter your Gender there"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobileNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
      .required("Mobile Number is required"),
    cnic: Yup.string().required("Enter your cnic here"),

    course: Yup.string().required("Enter your course details here"),
  });

  const formatCNIC =(value) =>{
    const cleanedValue=value.replace(/\D/g, "")
  
  let formattedCNIC = cleanedValue;

  if(cleanedValue.length > 5 && cleanedValue.length <= 12){
  formattedCNIC=`${cleanedValue.slice(0, 5)}-${cleanedValue.slice( 5)}`
 
  }
  else if (cleanedValue.length > 12) {
    formattedCNIC=`${cleanedValue.slice(0, 5)}-${cleanedValue.slice(5,12

    )}-${cleanedValue.slice(12)}`

  }
  return formattedCNIC
}



  return (
    <Formik
      initialValues={{
        firstName: "",

        lastName: "",
        middleName: "",
        birthDate: "",
        calendar: "",
        city: "",
        address: "",
        email: "",
        mobileNumber: "",
        phoneNumber: "",
        course: "",
        companyName: "",
        workNumber: "",
        gender: "",
        comments: "",
        
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Submmitted", values);
      }}
    >
      {({ handleSubmit, values, handleChange ,setFieldValue}) => (
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="form">
              <label className="label">Student Name</label>
              <input
                name="firstName"
                placeholder="Enter your name"
                value={values.firstName}
                type="text"
                onChange={handleChange}
                className="input"
              />
              <ErrorMessage name="firstName" component="div" />

              <label className="label">Middle Name</label>
              <input
                name="middleName"
                placeholder="Enter your Middle Name"
                value={values.middleName}
                type="text"
                onChange={handleChange}
                className="input"
              />
              <ErrorMessage name="middleName" component="div" />
              <label className="label">Last Name</label>
              <input
                name="lastName"
                placeholder="Enter your Last Name"
                value={values.lastName}
                type="text"
                onChange={handleChange}
                className="input"
              />
              <label className="label">CNIC Number </label>
              <input
                name="cnic"
                value={values.cnic}
                placeholder="36302-XXXXXX-X"
                type="text"
                // maxLength={15}
                // onChange={(e)=>{
                //   const formattedCNIC=formatCNIC(e.target.value)
                //   setFieldValue('cnic',formattedCNIC)
                // }}
                maxLength={15}
                onChange={(e) => {
                  const formattedCNIC = formatCNIC(e.target.value);
                  setFieldValue("cnic", formattedCNIC);
                }}

                
                className="input"
              />
              <ErrorMessage name="cnic" component="div" />

              <label className="label">Birth Date </label>
              <input
                name="birthDate"
                placeholder=""
                value={values.birthDate}
                type="text"
                onChange={handleChange}
                className="input"
              />
              <ErrorMessage name="birthDate" component="div" />
              <label className="label">Gender</label>
              <select
                name="gender"
                placeholder="Enter your Gender"
                value={values.gender}
                type="text"
                onChange={handleChange}
                className="input"
              >
                <option value="">Please Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <ErrorMessage name="gender" component="div" />
              <label className="label">Address</label>
              <input
                name="address"
                placeholder="Enter your Address"
                value={values.address}
                type="text"
                onChange={handleChange}
                className="input"
              />
              <ErrorMessage name="address" />
              <label className="label">Email</label>
              <input
                name="email"
                placeholder="Enter you Email Address"
                value={values.email}
                type="text"
                onChange={handleChange}
                className="input"
              />
              <ErrorMessage name="email" />

              <label className="label">Mobile Number</label>

              <input
                name="mobileNumber"
                placeholder="Enter your Mobile Number here"
                value={values.mobileNumber}
                type="number"
                onChange={handleChange}
                className="input"
              />
              <ErrorMessage name="mobileNumber" />

              <label className="label">Phone Number</label>
              <input
                name="phoneNumber"
                placeholder="Enter your Phone Number"
                value={values.phoneNumber}
                type="text"
                onChange={handleChange}
                className="input"
              />
              <ErrorMessage name="phoneNumber" />

              <label className="label">Work Number</label>
              <input
                name="workNumber"
                placeholder="Enter your Work Number here"
                value={values.workNumber}
                type="text"
                onChange={handleChange}
                className="input"
              />
              <ErrorMessage name="workNumber" />

              <label className="label">Company</label>
              <input
                name="company"
                placeholder="Enter your Company here"
                value={values.company}
                type="text"
                onChange={handleChange}
                className="input"
              />
              <ErrorMessage name="companyNumber" />

              <label className="label">Course</label>
              <input
                name="course"
                placeholder="Enter your Course here"
                value={values.course}
                type="text"
                onChange={handleChange}
                className="input"
              />
              <ErrorMessage name="course" />
              <br />
              <label className="label">Additional Comments</label>
              <textarea
                name="comments"
                placeholder="Enter your Additional Comments here"
                value={values.comments}
                type="text"
                onChange={handleChange}
              />
              <ErrorMessage name="comments" />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </div>{" "}
        </form>
      )}
    </Formik>
  );
};

export default App;





// import { Formik, ErrorMessage } from "formik";
// import React, { useState } from "react";
// import "./App.css";
// import * as Yup from "yup";

// const App = () => {
//   const [showDialog, setShowDialog] = useState(false); // State to manage dialog visibility
//   const [submittedData, setSubmittedData] = useState(null); // State to store submitted data

//   const validationSchema = Yup.object().shape({
//     firstName: Yup.string().required("First Name is required please enter"),
//     lastName: Yup.string().required("Last Name is required"),
//     middleName: Yup.string().required("Middle Name is required"),
//     birthDate: Yup.string().required("Enter your Birth Date"),
//     gender: Yup.string().required("Enter your Gender there"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     mobileNumber: Yup.string()
//       .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
//       .required("Mobile Number is required"),
//     cnic: Yup.string().required("Enter your cnic here"),
//     course: Yup.string().required("Enter your course details here"),
//   });

//   const formatCNIC = (value) => {
//     const cleanedValue = value.replace(/\D/g, "");
//     let formattedCNIC = cleanedValue;

//     if (cleanedValue.length > 5 && cleanedValue.length <= 12) {
//       formattedCNIC = `${cleanedValue.slice(0, 5)}-${cleanedValue.slice(5)}`;
//     } else if (cleanedValue.length > 12) {
//       formattedCNIC = `${cleanedValue.slice(0, 5)}-${cleanedValue.slice(
//         5,
//         12
//       )}-${cleanedValue.slice(12)}`;
//     }
//     return formattedCNIC;
//   };

//   return (
//     <Formik
//       initialValues={{
//         firstName: "",
//         lastName: "",
//         middleName: "",
//         birthDate: "",
//         calendar: "",
//         city: "",
//         address: "",
//         email: "",
//         mobileNumber: "",
//         phoneNumber: "",
//         course: "",
//         companyName: "",
//         workNumber: "",
//         gender: "",
//         comments: "",
//       }}
//       validationSchema={validationSchema}
//       onSubmit={(values, { resetForm }) => {
//         setSubmittedData(values); // Store the form data
//         setShowDialog(true); // Show the dialog
//          // Reset the form fields
//          console.log("Done",values);
//          resetForm();
//       }}
//     >
//       {({ handleSubmit, values, handleChange, setFieldValue }) => (
//         <form onSubmit={handleSubmit}>
//           <div className="container">
//             <div className="form">
//               <label className="label">Student Name</label>
//               <input
//                 name="firstName"
//                 placeholder="Enter your name"
//                 value={values.firstName}
//                 type="text"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <ErrorMessage name="firstName" component="div" />

//               <label className="label">Middle Name</label>
//               <input
//                 name="middleName"
//                 placeholder="Enter your Middle Name"
//                 value={values.middleName}
//                 type="text"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <ErrorMessage name="middleName" component="div" />

//               <label className="label">Last Name</label>
//               <input
//                 name="lastName"
//                 placeholder="Enter your Last Name"
//                 value={values.lastName}
//                 type="text"
//                 onChange={handleChange}
//                 className="input"
//               />

//               <label className="label">CNIC Number</label>
//               <input
//                 name="cnic"
//                 value={values.cnic}
//                 placeholder="36302-XXXXXXX-X"
//                 type="text"
//                 maxLength={15}
//                 onChange={(e) => {
//                   const formattedCNIC = formatCNIC(e.target.value);
//                   setFieldValue("cnic", formattedCNIC);
//                 }}
//                 className="input"
//               />
//               <ErrorMessage name="cnic" component="div" />

//               <label className="label">Birth Date</label>
//               <input
//                 name="birthDate"
//                 placeholder=""
//                 value={values.birthDate}
//                 type="text"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <ErrorMessage name="birthDate" component="div" />

//               <label className="label">Gender</label>
//               <select
//                 name="gender"
//                 value={values.gender}
//                 onChange={handleChange}
//                 className="input"
//               >
//                 <option value="">Please Select</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//               <ErrorMessage name="gender" component="div" />

//               <label className="label">Email</label>
//               <input
//                 name="email"
//                 placeholder="Enter your Email Address"
//                 value={values.email}
//                 type="text"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <ErrorMessage name="email" component="div" />

//               <label className="label">Mobile Number</label>
//               <input
//                 name="mobileNumber"
//                 placeholder="Enter your Mobile Number here"
//                 value={values.mobileNumber}
//                 type="number"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <ErrorMessage name="mobileNumber" component="div" />

//               <label className="label">Course</label>
//               <input
//                 name="course"
//                 placeholder="Enter your Course"
//                 value={values.course}
//                 type="text"
//                 onChange={handleChange}
//                 className="input"
//               />
//               <ErrorMessage name="course" component="div" />

//               <button type="submit" className="btn">
//                 Submit
//               </button>
//             </div>
//           </div>

//           {showDialog && submittedData && (
//             <div className="dialog">
//               <h3>Submitted Data</h3>
//               <p>First Name: {submittedData.firstName}</p>
//               <p>Last Name: {submittedData.lastName}</p>
//               <p>CNIC: {submittedData.cnic}</p>
//               <p>Email: {submittedData.email}</p>
//               <p>Mobile Number: {submittedData.mobileNumber}</p>
//               <p>Course: {submittedData.course}</p>
//               <button onClick={() => setShowDialog(false)}>Close</button>
//             </div>
//           )}
//         </form>
//       )}
//     </Formik>
//   );
// };

// export default App;


