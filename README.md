## Boilerplate admin template with React, AntD, NestJS, Prisma, Sqlite

### Installation
```bash
git clone https://github.com/nahidacm/nest-react-antd-admin-boilerplate-template.git && cd nest-react-antd-admin-boilerplate-template
```
#### Backend instllation
```bash
cd backend
```
```bash
yarn install
```
```bash
cp .env-sample .env
```
```bash
yarn prisma db push
```
```bash
yarn start
// Or to run with PM2
chmod u+x run.sh
./run.sh
```
This should start the backend NestJS application in http://localhost:3013/

You may change the port number in `.env` file

#### Fronend installation
Move back to project root. then:
```bash
cd frontend
```
```bash
cp .env.sample .env
```
```bash
yarn install
```
```bash
yarn start
```
This should start the frontend in http://localhost:3000/