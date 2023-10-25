var pool = require('../database');

module.exports.addConversation = async function(req, res) {
   try{
          pool.query(
            `INSERT INTO conversation(query_id , executive_msg , employee_msg) VALUES (?,?,?);`,[req.body.query_id,req.body.executive_msg,req.body.employee_msg],
            (err, result) => {
              if (err) {
                throw err;
              }
              
              return res.status(200).send({
                msg: 'conversation added successfully'
                });
            }
          );
      
   }catch(err){ 
       res.send({responseCode : 500 , err : err.message});
   }
  }
