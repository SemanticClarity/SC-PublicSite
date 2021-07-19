FROM node:lts-alpine

# Create app directory
WORKDIR /website

# Install app dependencies
RUN apk --no-cache add --virtual native-deps \
    g++ gcc libgcc libstdc++ linux-headers make python && \
    npm install --quiet node-gyp -g

# Bundle app source
COPY . .
RUN npm install
RUN npm run build

EXPOSE 8080
CMD [ "node", "service/index.js" ]