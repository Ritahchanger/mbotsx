const router = require("express").Router();

const EmailController = require("../controllers/EmailController");

router.post('/',EmailController.sendEmail);




module.exports=router;