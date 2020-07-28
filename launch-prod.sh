docker-compose down && docker-compose kill && docker-compose rm
docker rmi url-shortener_api:latest
docker rmi url-shortener_client:latest

rm client/build -R
rm nginx/build -R
cd client
GENERATE_SOURCEMAP=false npm run build
cp build ../nginx -R
cd ..

docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
