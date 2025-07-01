const model = require("../models/model.js")

const isLogedin = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.origionalUrl = req.originalUrl;
        req.flash("error","you must be logged in to access this page");
        return res.redirect("/login");
    }
    next();
}
 
const origionalUrl = (req,res,next)=>{
    if(req.session.origionalUrl){
        res.locals.origionalUrl = req.session.origionalUrl;
    }
    next();
}

async function isOwner(req, res, next) {
    const { id } = req.params;
    await model.findById(id).then((result) => {
        if ( res.locals.currUser && !res.locals.currUser._id.equals(result.owner)) {
            req.flash("error", "You are not the owner of this listing");
            return res.redirect(`/listings/${id}`);
        }else{
            next();
        }
    });
}


module.exports = {isLogedin , origionalUrl , isOwner};