build:
	docker-compose up build

code-pull:
	git pull origin master

update: code-pull build

up:
	docker-compose up -d app

down:
	docker-compose down

start:
	docker-compose start app

stop:
	docker-compose stop app

restart:
	docker-compose restart app

logs:
	docker-compose logs -f app

shell:
	docker exec -ti app01 bash

deploy:
	ssh kaiserapp "make -C /home/appmin/kaiser-mkt update"
