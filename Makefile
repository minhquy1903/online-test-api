bootstrap:
	yarn install
	make up
	echo "Setup environment sucessfully. Happy coding!!!"

up:
	docker-compose up -d --remove-orphans

down:
	docker-compose down

ps:
	docker-compose ps

db-migrate:
	yarn run migration:run

db-revert:
	yarn run migration:revert

fork-kill-dev:
	lsof -t -i tcp:3000 | xargs kill
