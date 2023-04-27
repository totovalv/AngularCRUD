# choose base image to build off of
FROM node:16.16
# set the current working directory for all commands
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# ADD docker-entrypoint.sh /usr/local/bin/
# copy these over first and run 'npm install' so the node_modules will be cached
# until the package.json / lock changes
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
RUN apt-get update && apt-get install -y xdg-utils
RUN npm install -g @angular/cli
RUN npm install


COPY . .
EXPOSE 4200

CMD ng serve -o --host 0.0.0.0 --open=false

