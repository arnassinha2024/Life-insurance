import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PDFGenerator = ({ elementId }) => {
  const generatePDF = () => {
    const input = document.getElementById(elementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('summary.pdf');
    });
  };

  return (
    <button onClick={generatePDF}>Generate PDF</button>
  );
};

export default PDFGenerator;