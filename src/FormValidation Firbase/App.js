import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // Import the Firestore database
import { Formik, ErrorMessage } from "formik";
import firebase from "firebase/compat/app";
const App = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addDoc(collection(db, "students"), {
        firstName: values.firstName,
        middleName: values.middleName,
        lastName: values.lastName,
        cnic: values.cnic,
        birthDate: values.birthDate,
        gender: values.gender,
        email: values.email,
        mobileNumber: values.mobileNumber,
        address: values.address,
        course: values.course,
        comments: values.comments,
      });
      console.log("Data saved to Firebase successfully!");
      resetForm(); // Clear the form after submission
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        middleName: "",
        lastName: "",
        cnic: "",
        birthDate: "",
        gender: "",
        email: "",
        mobileNumber: "",
        address: "",
        course: "",
        comments: "",
      }}
     
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, values, handleChange, setFieldValue }) => (
             <form onSubmit={handleSubmit}>
             //           <div className="container">
             //             <div className="form">
             //               <label className="label">Student Name</label>
             //               <input
                             name="firstName"
                             placeholder="Enter your name"
                             value={values.firstName}
                             type="text"
                             onChange={handleChange}
                             className="input"
                           />
                           <ErrorMessage name="firstName" component="div" />
             
             //               <label className="label">Middle Name</label>
             //               <input
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
             
             //               <label className="label">CNIC Number</label>
             //               <input
                             name="cnic"
                             value={values.cnic}
                             placeholder="36302-XXXXXXX-X"
                             type="text"
                             maxLength={15}
                            onChange={handleChange}
                             className="input"
                           />
                           <ErrorMessage name="cnic" component="div" />
             
                           <label className="label">Birth Date</label>
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
                             value={values.gender}
                             onChange={handleChange}
                             className="input"
                           >
                             <option value="">Please Select</option>
                             <option value="male">Male</option>
                             <option value="female">Female</option>
                             <option value="other">Other</option>
                           </select>
                           <ErrorMessage name="gender" component="div" />
             
             //               <label className="label">Email</label>
             //               <input
                             name="email"
                             placeholder="Enter your Email Address"
                             value={values.email}
                             type="text"
                             onChange={handleChange}
                             className="input"
                           />
                           <ErrorMessage name="email" component="div" />
             
                           <label className="label">Mobile Number</label>
                           <input
                             name="mobileNumber"
                             placeholder="Enter your Mobile Number here"
                             value={values.mobileNumber}
                             type="number"
                             onChange={handleChange}
                             className="input"
                           />
                           <ErrorMessage name="mobileNumber" component="div" />
             
                           <label className="label">Course</label>
                           <input
                             name="course"
                             placeholder="Enter your Course"
                             value={values.course}
                             type="text"
                             onChange={handleChange}
                             className="input"
                           />
                           <ErrorMessage name="course" component="div" />
             
                           <button type="submit" className="btn">
                             Submit
                           </button>
                         </div>
                       </div>
             
                     
                     </form>
      )}
    </Formik>
  );
};
export default App;







// Here is firebase code



// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDPb58mJxdPuzSnAxz8rdRk6G8EuQ8aSAc",
    authDomain: "authth-d875b.firebaseapp.com",
    projectId: "authth-d875b",
    storageBucket: "authth-d875b.appspot.com",
    messagingSenderId: "772353938834",
    appId: "1:772353938834:web:55beb260a6027084bf1d4b",
    measurementId: "G-FY0D4X25BT"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };




