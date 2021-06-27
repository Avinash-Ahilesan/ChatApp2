curl -X POST localhost:3000/register -H 'Content-Type: application/json' -d \
  '{"email":"avinash.ahilesan00@gmail.com","password":"!Secret12","passwordConfirmation":"!Secret12"}'

curl localhost:3000/currentuser --cookie 'sid=s%3Ay45TpE5Zni63_S909mDhi1e7sMAJhbT4.wPQSIuFouDhQWJAg9VBdmvjFUeFAoRt7P8CLrJU6yss'

curl -v -X POST localhost:3000/logout --cookie 'sid=s%3Ay45TpE5Zni63_S909mDhi1e7sMAJhbT4.wPQSIuFouDhQWJAg9VBdmvjFUeFAoRt7P8CLrJU6yss'

curl -v -X POST localhost:3000/login -H 'Content-Type: application/json' -d \
  '{"email":"avinash.ahilesan00@gmail.com","password":"!Secret12"}'

docker exec -it auth_db_1 mongo -u admin -p secret auth