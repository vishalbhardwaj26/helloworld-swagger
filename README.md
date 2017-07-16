# How to start Rest APIs with Swagger

## Jus to run rest APIs
* run 'node app'
* try browsing http://localhost:10010/hello?name=vishal
* try sending other rest calls using postman; Now how to get know about Rest APIs?, here Swagger comes in picture.

## to play with swagger
* install swagger globally "npm install swagger -g"
* create new swagger project "swagger project create proj-name"
* once you creates, start it in swagger mode (with mocking)
    * swagger project start -m
* once you start swagger server in mocking mode you dont need actual code to run services, You can still test your rest apis using swagger editor. To run swagger editor
    * swagger project edit
    * Now you can edit/add/test services definetion on editor yaml panel and check it out on ui panel.
* once you have set the defenetins, now you can put actual code in services; and checout actual behavior running swagger without mocking mode.
    * to put actual service code in book.js, i install npm package "crypto" to gernate unique id for any saved book
    * not using any actual db; but saving in memory for the time being
* this demo dosen not have swagger-UI to give client documentation; if you need to check same you can refer my another [git repo](https://github.com/vishalbhardwaj26/rest-express-nodejs).
* some time it is tough to find actual validation error in yaml while starting swagger server, and it throws gernal error "Swagger document(s) failed validation so the server cannot start" which is useless, but you can validate your yaml file with another command:
    * swagger validate api/swagger/swagger.yaml

