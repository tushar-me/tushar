import { ref } from 'vue';

let html2pdf: any;
const loading = ref(false);
  
if (process.client) {
  html2pdf = (await import('html2pdf.js')).default;
}

export const usePdfStore = () => {
  const downloadPDF = async () => {
    loading.value = true;
    if (!process.client) return;

    const element = document.getElementById('cv-section');
    const options = {
      margin: 0,
      filename: 'Tushar-Imran-CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    await html2pdf().set(options).from(element).save();
    loading.value = false;
  };

  return {
    loading,
    downloadPDF
  };
};
