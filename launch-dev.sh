docker-compose down && docker-compose kill && docker-compose rm
docker rmi url-shortener_api:latest
docker rmi url-shortener_client:latest

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
