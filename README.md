# UED分享之Grunt打造前端自动化工作流

## 准备工作 

通过NPM全局安装[grunt-cli](https://github.com/gruntjs/grunt-cli)插件
```shell
npm install -g grunt-cli
```

切换到ued-share目录，安装项目依赖插件
```shell
npm install
```

## 演示内容

### demo01
[grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)、[grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)插件实现实时刷新页面

```shell
grunt demo01
```

### demo02
[grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)、[grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass)、[grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)打造CSS开发环境

```shell
grunt demo02
```

### demo03
[grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)插件实现JavaScript代码压缩，合并

### demo04
[grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith)自动合并精灵图

## 其它资源
- [Grunt中文网](http://www.gruntjs.net/)
- [Grunt常用插件](http://www.zhihu.com/question/21917526)
