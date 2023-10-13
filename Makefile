install:
	npm install

lint:
	npx stylelint ./src/styles/*.css 
	npx htmlhint ./src/index.html

lint-fix:
	npx stylelint ./src/styles/*.css --fix
	npx htmlhint ./src/index.html --fix

deploy:
	npx surge ./src/