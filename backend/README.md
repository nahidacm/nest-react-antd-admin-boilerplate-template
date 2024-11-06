## Installation
This application must run as `root`
```bash
yarn install
npm install -g @nestjs/cli
cp .env-sample .env
yarn prisma db push
```

## Running the app
This application must run as `root`
```bash
# development
yarn start

# watch mode
yarn run start:dev

# production mode
yarn run start:prod

# With PM2
./run.sh
```

## Database GUI browser
```bash
yarn prisma studio
```