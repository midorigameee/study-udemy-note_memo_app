FROM node:22.4.1-bookworm
WORKDIR /workspace/note-app-with-react

# 先にpackage.jsonとpackage-lock.jsonをコピーする
COPY ./note-app-with-react/package*.json /workspace/note-app-with-react

# 依存関係をインストール
RUN npm install

# bashのプロンプトの設定(https://zenn.dev/daifukuninja/articles/9e903808f4147d)
RUN apt-get update && apt-get install git vim curl -y && apt-get clean
RUN echo "source /usr/share/bash-completion/completions/git" >> ~/.bashrc

WORKDIR /usr/share/bash-completion/completions

RUN curl -O https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh
RUN curl -O https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash
RUN chmod a+x git*.*
RUN ls -l $PWD/git*.* | awk '{print "source "$9}' >> ~/.bashrc

RUN echo "GIT_PS1_SHOWDIRTYSTATE=true" >> ~/.bashrc
RUN echo "GIT_PS1_SHOWUNTRACKEDFILES=true" >> ~/.bashrc
RUN echo "GIT_PS1_SHOWUPSTREAM=auto" >> ~/.bashrc

RUN echo 'export PS1="\[\033[01;32m\]\u@\h\[\033[01;33m\] \w \[\033[01;31m\]\$(__git_ps1 \"(%s)\") \\n\[\033[01;34m\]\\$ \[\033[00m\]"' >> ~/.bashrc

RUN git config --global --add safe.directory /workspace