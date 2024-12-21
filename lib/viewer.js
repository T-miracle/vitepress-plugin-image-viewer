import Viewer from 'viewerjs';
import { nextTick, onMounted, watch } from 'vue';
let viewer = null;
/**
 * 给图片添加预览功能
 */
const setViewer = (el = '.vp-doc', option) => {
    // 默认配置
    const defaultBaseOption = {
        navbar: false,
        title: false,
        toolbar: {
            zoomIn: 4,
            zoomOut: 4,
            prev: 4,
            next: 4,
            reset: 4,
            oneToOne: 4
        }
    };
    const container = document.querySelector(el);
    if (container) {
        viewer = new Viewer(container, {
            ...defaultBaseOption,
            ...option
        });
    }
};
/**
 * set imageViewer
 * 设置图片查看器
 * @param route 路由
 * @param el The string corresponding to the CSS selector, the default is ".vp-doc img".
 * <br/>CSS选择器对应的字符串，默认为 ".vp-doc img"
 * @param option viewerjs options
 * <br/>viewerjs 设置选项
 */
const imageViewer = (route, el, option) => {
    onMounted(() => {
        setViewer(el, option);
    });
    watch(() => route.path, () => nextTick(() => {
        viewer?.destroy();
        setViewer(el, option);
    }));
};
export default imageViewer;
