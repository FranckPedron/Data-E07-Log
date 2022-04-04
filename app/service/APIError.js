const { appendFile } = require('fs/promises');
const path = require("path");

class APIError extends Error{
    constructor(){
        super(); // super appelle le constructeur du parent
    }

    /**
     * Méthode pour logger les erreurs
     * @param {string} message d'erreur
     * @returns 
     */
    static log(message){
        return async (req,res,next)=>{
            // Gestion de l'affichage de l'erreur dans la console - instantanéité
            console.error(req.url,message,new Date());

            // Gestion des fichiers de log - historique
            const logPath = path.resolve(__dirname,`../../log/`);
            const fileName = new Date().toISOString().split('T')[0]+'.csv';
            const result = await appendFile(logPath+"/"+fileName, `${new Date()},${req.url},${message}`);

            // Gestion du retour utilisateur - communication
        }
    }
};

module.exports = APIError;