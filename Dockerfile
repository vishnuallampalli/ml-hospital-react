FROM ubuntu
MAINTAINER vamsi
RUN apt-get update
RUN apt install -y nodejs
RUN apt install -y npm
RUN apt-get install -y git
RUN git clone https://github.com/vamsisiddireddy/fargate.git
WORKDIR ./fargate/Motivityhospital/ml-hospital-react
RUN npm install
EXPOSE 3000
CMD ["npm", "start"] 
