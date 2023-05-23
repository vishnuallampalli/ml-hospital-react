FROM ubuntu
RUN apt-get update
RUN apt install -y nodejs
RUN apt install -y npm
RUN apt-get install -y git
RUN git clone https://github.com/wahtej/ml-hospital-react.git
WORKDIR ./ml-hospital-react/reacthospital
RUN npm install
EXPOSE 3000
CMD ["npm", "start"] 
