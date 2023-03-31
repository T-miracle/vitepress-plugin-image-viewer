# README_zh

# vitepress-plugin-image-viewer

![](demo.gif)

> 一款基于 viewerjs 的 vitepress 图片查看器插件

## 安装

```shell
// npm 
npm i vitepress-plugin-image-viewer
// yarn
yarn add vitepress-plugin-image-viewer
```

## 使用

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useRoute } from 'vitepress';

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // 注册全局组件，如果你不想使用也可以不添加
        ctx.app.component('vImageViewer', vImageViewer);
        // ...
    },
    setup() {
        // 获取路由
        const { frontmatter } = useData();
        const route = useRoute();
        // 使用
        imageViewer(route);
    }
};
```

`imageViewer()` 接收三个参数：

- route

  路由（这是必需的）

- el

  CSS选择器（默认`.vp-doc img`，可以为空，这不是必需的）

- option

  配置选项（详细配置请看[viewerjs option](https://github.com/fengyuanchen/viewerjs#toolbar)，已有默认配置，这不是必需的）

## 扩展

`vImageViewer` 组件能编译成一个按钮，点击这个按钮能弹出图片，使用方式如下：

```vue
<vImageViewer src="图片地址" alt="描述内容" :inline="false"/>
```

`inline` 属性设置为 `true`，那么它会变成一个行内元素，他不是必需的，默认为 `false`
