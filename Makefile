install:
	npm install

lint:
	npx stylelint ./src/public/*.css
	npx htmlhint ./src/*.html

deploy:
	npx surge ./src/