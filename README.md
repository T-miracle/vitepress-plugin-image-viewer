# README

EN | [中文文档](README_zh.md)

# vitepress-plugin-image-viewer

![](./demo.webp)

> A vitepress image viewer plugin based on viewerjs

## Install

```shell
// npm 
npm i vitepress-plugin-image-viewer
// yarn
yarn add vitepress-plugin-image-viewer
```

## Usage

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
        // Register global components, if you don't want to use it, you don't need to add it
        ctx.app.component('vImageViewer', vImageViewer);
        // ...
    },
    setup() {
        // Get route
        const route = useRoute();
        // Using
        imageViewer(route);
    }
};
```

`imageViewer()` takes three parameters：

- route

    route (this is required)

- el
  
    CSS selector (Default `.vp-doc img`, can be empty, this is not required)

- option

    Configuration options 
    (For detailed configuration, please refer to [viewerjs option](https://github.com/fengyuanchen/viewerjs#toolbar), there is already a default configuration, which is not required)

## Component

`vImageViewer` component can be compiled into a button, click this button to pop up the picture, use as follows:

```vue
<vImageViewer src="/image/demo.png" alt="this is a demo image" :inline="false"/> 
// `inline` is set to `true`, it will become an inline element, it is not required, default `false`
```
