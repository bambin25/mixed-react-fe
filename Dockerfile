# 서버 단계 (Nginx를 사용하여 빌드된 파일을 서빙)
FROM nginx:alpine
# npm run build 명령어로 빌드된 리액트 파일들
# /dist 폴더 전체를 Nginx 기본 웹 디렉토리로 복사
COPY /dist /usr/share/nginx/html
# Nginx가 사용하는 80번 포트 열기
EXPOSE 80
# Nginx 실행 명령
CMD ["nginx", "-g", "daemon off;"]
