TextRepository
==============

##USING Virtual Text Repository

    1. git clone https://github.com/jun85664396/TextRepository.git
    
    2. npm install
    
    3. Edit config 
      {
      	"redis":{
	     	"host":"localhost",
	    	"port":"6379",
	    	"pass":"YOUR PASSWORD",
	   	    "repository":"YOUR USING REDIS HASH KEY"
	       }
      }
    3. node app.js !

#require

+ node
+ redis-server

#use
+ express
+ ejs
+ redis
+ body-parser
