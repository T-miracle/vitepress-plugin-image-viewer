import Viewer from 'viewerjs';
import type { Route } from 'vitepress';
/**
 * set imageViewer
 * 设置图片查看器
 * @param route 路由
 * @param el The string corresponding to the CSS selector, the default is ".vp-doc img".
 * <br/>CSS选择器对应的字符串，默认为 ".vp-doc img"
 * @param option viewerjs options
 * <br/>viewerjs 设置选项
 */
declare const imageViewer: (route: Route, el?: string, option?: Viewer.Options) => void;
export default imageViewer;
