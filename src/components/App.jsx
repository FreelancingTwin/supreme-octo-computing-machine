import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ExcelExportButton from "./ExcelExportButton";
import WordExportButton from "./WordExportButton";
import PdfExportButton from "./PdfExportButton";

import '../styles/App.css'

import Form from "./Form";
export default function App() {
  const formFilled = useSelector(state => {
    // console.log('FORMSTATUS:', state.formStatus);
    return state.formStatus;
  });
  // const [formFilled, setFormFilled] = useState(false);
  const userData = useSelector(state => state.form.userData);
  // useEffect(()=>{
  //   setFormFilled(true);
  // }, [userData])
  // const dispatch = useDispatch();
  return (
    <div className="container">
      {/* <h1>Hello {name && name}</h1> */}
      <p> This site takes in form data and injects it into excel sheets and pdf Documents. </p>
      <p>As soon as you click save (blue button), You can download the needed files.</p>
      <Form />
      {formFilled && (
        <div>
          <ExcelExportButton />
          {/* <WordExportButton/> */}
          <PdfExportButton />
        </div>
      )}

        {/* <h4>Notes:</h4> */}
     
      {/* <p>Alongside, </p> */}

    </div>
  );
}
