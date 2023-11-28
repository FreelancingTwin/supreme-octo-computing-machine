import React from "react";
import jsPDF from "jspdf";
import { useSelector } from "react-redux";

function extractImageFromDataUrl(dataUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = dataUrl;
  });
}
const PdfGenerator = () => {
  const formData = useSelector(state => state.form.userData);
  const imageUrl =
    "https://images.unsplash.com/photo-1701077136756-3b8439292118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D";
  const generatePdf = async () => {
    // Create a new jsPDF instance
    try {
      const doc = new jsPDF();

      // Add content to the PDF
      doc.text("Hello, this is a generated PDF!", 10, 10);
      doc.text(`User ${formData.name} is ${formData.age} years old`, 10, 20);
      // doc.text(`Their contact details: `, 10, 30);
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const dataUrl = URL.createObjectURL(blob);

      // Extract image from Data URL
      const fetchedImage = await extractImageFromDataUrl(dataUrl);

      // Once the image is fetched, add it to the PDF
      const imgWidth = 100; // Width of the image on the PDF
      const imgHeight =
        (imgWidth * fetchedImage.naturalHeight) / fetchedImage.naturalWidth; // Maintain aspect ratio

      // Add the fetched image to the PDF at coordinates (10, 30) with width 100 and calculated height
      doc.addImage(fetchedImage, "JPEG", 10, 35, imgWidth, imgHeight);

      doc.save(`${formData.name}-${formData.date}.pdf`);
    } catch (error) {
      console.log("Error fetching or adding image to PDF:", error);
    }

    // Save the PDF
  };

  return (
    <div>
      {/* <h1>PDF Generator</h1> */}
      <button onClick={generatePdf} style={{ backgroundColor: "#c31b00" }}>
        Generate PDF{" "}
        <img src={"https://img.icons8.com/?size=48&id=13593&format=png"} />
      </button>
    </div>
  );
};

export default PdfGenerator;
