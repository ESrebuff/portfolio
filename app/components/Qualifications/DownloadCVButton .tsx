const DownloadCVButton = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/esteban_rebuffe_mareau_cv.pdf'; // Chemin correct vers le PDF
        link.download = 'Esteban_Rebuffe_Mareau_CV.pdf'; // Nom du fichier lors du téléchargement
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleDownload}
            className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-primary to-secondary hover:bg-slate-800 text-foreground mt-3">
            <span className="block bg-background hover:bg-slate-200 rounded-full px-5 py-2">Télécharger mon CV</span>
        </button>
    );
};

export default DownloadCVButton;
