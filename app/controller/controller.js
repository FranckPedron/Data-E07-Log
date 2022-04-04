const controller = {
    get(req,res,next){
        const result = {

        };
        res.send(result);
    },

    post(req,res,next){
        const result = {

        };
        res.send(result);
    },

    ping(){
        res.send(true);
    }
};

module.exports = controller;