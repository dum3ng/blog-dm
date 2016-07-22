#!/bin/sh

PATH="$1.js"
cd routes
touch $PATH
# # echo "var router = require('express').Router()" >>$PATH
# # echo " " >> $PATh
# # echo  "router.route('/')">>$PATH
# # echo "  .get((req,res)=>{ }) ">>$PATH
# # echo " " >> $PATh

# echo " module.exports = router" >> "$PATH"
cat > $PATH << EOL
first line
seconde line 
third line

EOL


