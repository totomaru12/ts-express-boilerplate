# ts-express-boilerplate

boilerplate for express + ejs + typescript + mysql

## prerequisites

```terminal
$ node -v
v14.17.3

$ yarn -v
1.22.10

$ docker -v
Docker version 20.10.7, build f0df350

$ docker-compose -v
docker-compose version 1.29.2, build 5becea4c

$ mysql --version
mysql  Ver 14.14 Distrib 5.7.32, for osx10.16 (x86_64) using  EditLine wrapper
```

## editor requirements

- vscode
- vscode extension: [ESLint](https://github.com/Microsoft/vscode-eslint)
- vscode extension: [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## setup

### server setup

```terminal
yarn
```

### MySQL setup

```terminal
// move to folder includes docker-compose.yaml
cd mysql
docker-compose up -d

// make sure "State" is "Up" in the below command result
$ docker-compose ps -a
      Name             Command        State        Ports
--------------------------------------------------------------
ts_express_mysql   docker-            Up      0.0.0.0:13306->3
                   entrypoint.sh              306/tcp,:::13306
                   mysql ...                  ->3306/tcp,
                                              33060/tcp

// make sure login succeed from server
docker exec -it ts_express_mysql bash
mysql -u root -p
Enter password:
mysql> exit;
exit

// make sure login succeed from host
mysql --host 127.0.0.1 --port 13306 -u root -p

// if you want to stop MySQL, input below command
docker-compose stop

// if you want to start MySQL, input below command
docker-compose start

// if you want to remove MySQL environment, input the below command
docker-compose down
```

## run script

```terminal
yarn dev
```

## test / watch

```terminal
yarn test
yarn test --watch
```

## lint / fix

```terminal
yarn lint
yarn fix
```

## debug

- Press F5 Key
- or VSCode Mene Run --> Start Debugging
