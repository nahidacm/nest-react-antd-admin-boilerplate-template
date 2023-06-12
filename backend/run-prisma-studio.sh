pm2 delete nhm-api-prisma-studio
pm2 start "yarn prisma studio -p 3014" --name nhm-api-prisma-studio