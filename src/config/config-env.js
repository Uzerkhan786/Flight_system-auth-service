

require('dotenv').config();
const PORT=process.env.PORT;
const SALT=process.env.SALT
module.exports={
    PORT,
    SALT
}