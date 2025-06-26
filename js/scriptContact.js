const chooseCvLanguage = () => {
    const actualLanguage = localStorage.getItem('language');
    const basePath = window.location.pathname.includes('Portfolio-NorfeoneWorld') ? '/Portfolio-NorfeoneWorld' : '';
    const cvPath = actualLanguage === 'pl' ? `${basePath}/pliki/cv-pl.pdf` : `${basePath}/pliki/cv-en.pdf`;
    window.open(cvPath, '_blank');
};

const chooseDownloadLanguage = () => {
    const actualLanguageDownload = localStorage.getItem('language');
    const basePath = window.location.pathname.includes('Portfolio-NorfeoneWorld') ? '/Portfolio-NorfeoneWorld' : '';
    const downloadLink = actualLanguageDownload === 'pl' ? `${basePath}/pliki/cv-pl.pdf` : `${basePath}/pliki/cv-en.pdf`;

    const link = document.createElement('a');
    link.href = downloadLink;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

seeCv.addEventListener('click', chooseCvLanguage);
downloadCv.addEventListener('click', chooseDownloadLanguage);
