FROM nginx:alpine
LABEL maintainer = "nohsueh" 
ADD ./build /usr/share/nginx/html/
EXPOSE 80