var express = require('express');
var router = express.Router();

var sData, nData = '';
var result = '';
const si = require('systeminformation');

async function netData() {
  try {
      const data = await si.networkInterfaces();
      nData = data;
      systemData();
  } catch (e) {
      //result = e;
      console.log(e)
  }
}
async function systemData() {
  try {
      const data = await si.system();
      sData = data;
  } catch (e) {
      //result = e;
      console.log(e)
  }
}
netData();
/* GET users listing. */
router.get('/', function(req, res, next) {
  result = {
    'networkInterfaces' : nData,
    'system' : sData
  };
  //console.log(result)
  res.send(nData);
});

module.exports = router;
