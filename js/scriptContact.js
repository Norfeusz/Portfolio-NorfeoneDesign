
const chooseCvLanguage = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./pliki/cv-pl.pdf', '_blank')}else{
        window.open('./pliki/cv-en.pdf', '_blank')
    }
} 
const chooseDownloadLanguage = () => {
    const actualLanguageDownload = localStorage.getItem('language');
    let downloadLink;
    if (actualLanguageDownload === 'pl') {
        downloadLink = './pliki/cv-pl.pdf';
    } else {
        downloadLink = './pliki/cv-en.pdf';
    }

    // Create an anchor element
    const link = document.createElement('a');
    link.href = downloadLink;

    // Set the download attribute to specify the filename
    link.setAttribute('download', '');

    // Simulate a click event to trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

seeCv.addEventListener('click', chooseCvLanguage) 
downloadCv.addEventListener('click', chooseDownloadLanguage)