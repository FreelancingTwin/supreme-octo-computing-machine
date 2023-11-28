import ExcelJS from "exceljs";
import React from 'react'
import { useSelector } from "react-redux";

export default function ExcelExportButton() {
  const formData = useSelector(state => state.form.userData);
  console.log("FORMDATA",formData)
  const generateExcel = () => {
    // Modify this section based on the structure of your formData object
    const formDataToArray = Object.values(formData);

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Sheet 1");

    // Add headers
    sheet.addRow(["Email", "Name", "Age", "Matter", "Phone"]);

    // Add data
    sheet.addRow(formDataToArray);
    // Add more rows...

    // Generate the Excel file
    workbook.xlsx.writeBuffer().then(buffer => {
      // Create a Blob from the buffer
      const blob = new Blob([buffer], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });

      // Create a download link
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      const today = new Date().toLocaleDateString().replace(/\//g,'-')
      const fileName = `${formData.name}-${formData.date || today}`;
      console.log("FILENAME:", fileName)
      link.download = `${fileName}.xlsx`;
      link.click();
      // saveAs(buffer, fileName)
    });
  };

  return (
    <div>
      <button onClick={generateExcel} style={{backgroundColor:"#006129"}}>Export to Excel  
      <img src={'https://img.icons8.com/?size=48&id=117561&format=png'}/>
      </button>
    </div>
  );
}
