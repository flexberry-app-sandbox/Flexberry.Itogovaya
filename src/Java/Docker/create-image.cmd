docker build --no-cache -f SQL\Dockerfile.PostgreSql -t itogovaya-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t itogovaya-java/app ../../..
