FROM node:22.4.1-bookworm
WORKDIR /workspace/note-app-with-react

# 先にpackage.jsonとpackage-lock.jsonをコピーする
COPY ./note-app-with-react/package*.json /workspace/note-app-with-react

# 依存関係をインストール
RUN npm install

# アプリケーションのコードをコピー
# COPY ./note-app-with-react /workspace/note-app-with-react