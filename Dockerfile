FROM node:16

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

ENV HOST = d64om0vktkhm.ap-southeast-2.psdb.cloud \
    PASSWORD = pscale_pw_BHSrfG0REbEmUd9CB2cVv8rlEz2TQipqoIiaSv0zLlI \
    USER = 7ivbk4bv3184 \
    DB = wildcash

EXPOSE 8080

CMD [ "yarn", "start" ]