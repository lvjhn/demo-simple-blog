FROM node:20.14.0

ENV NAME=demo-simple-blog

# create working directory
RUN mkdir /home/${NAME}.frontend 
WORKDIR /home/${NAME}.frontend

# set up entry point 
RUN mkdir ./utils/
RUN touch ./utils/start.sh
ENTRYPOINT ["bash", "utils/start.sh"]
