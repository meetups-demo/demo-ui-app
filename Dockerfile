# Use latest node version 10.x
FROM node:10.15.0-slim

# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app

# copy all file from current dir to /app in container
COPY . /app/

# create build

# RUN npm run build

# expose port 5000
EXPOSE 5000

# cmd to start service
CMD [ "npm", "run", "start" ]
# stage: 1
# FROM node:10.15.0-slim as react-build

# # Create app directory
# WORKDIR /app

# COPY . ./

# RUN yarn install
# EXPOSE 5000
# # RUN yarn build
# CMD ["yarn", "start"]

# # stage: 2 — the production environment
# FROM nginx:alpine
# COPY --from=react-build /app/build /usr/share/nginx/html

# # To provide a http authentication comment out the next two lines
# #COPY conf/default.conf /etc/nginx/conf.d/default.conf
# #COPY conf/authnginx/htpasswd /etc/nginx/authnginx/htpasswd
# EXPOSE 80 2222
# CMD ["nginx", "-g", "daemon off;"]

