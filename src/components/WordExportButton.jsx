import React from "react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { useSelector } from "react-redux";
import * as fs from "fs";

export default function GenerateWordDocument() {
  const formData = useSelector(state => state.form.userData);
  const generateDocument = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun(`Hello ${formData.name}`),
                new TextRun(`You are ${formData.age} years old`),
                new TextRun({
                  text: "Foo Bar",
                  bold: true
                }),
                new TextRun({
                  text: "\tGithub is the best",
                  bold: true
                })
              ]
            })
          ]
        }
      ]
    });

Packer.toBuffer(doc).then((buffer) => {
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `${formData.name}-${formData.date}.docx`;
  link.click();
  // saveAs(buffer, `${formData.name}-${formData.date}.docx`);
});
// ...const blob = new Blob([buffer], {


// Create a downl

    };
  

  return (
    <div>
      <button onClick={generateDocument}>Generate Word Document</button>
    </div>
  );
}
