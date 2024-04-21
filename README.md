# @hankliu/icons-react

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url] [![build status][github-actions-image]][github-actions-url] [![Codecov][codecov-image]][codecov-url] [![bundle size][bundlephobia-image]][bundlephobia-url] [![dumi][dumi-image]][dumi-url]

[npm-image]: http://img.shields.io/npm/v/@hankliu/icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@hankliu/icons
[travis-image]: https://img.shields.io/travis/hankliu62/icons-react/master?style=flat-square
[github-actions-image]: https://github.com/hankliu62/icons-react/workflows/CI/badge.svg
[github-actions-url]: https://github.com/hankliu62/icons-react/actions
[codecov-image]: https://img.shields.io/codecov/c/github/hankliu62/icons-react/master.svg?style=flat-square
[codecov-url]: https://app.codecov.io/gh/hankliu62/icons-react
[download-image]: https://img.shields.io/npm/dm/@hankliu/icons.svg?style=flat-square
[download-url]: https://npmjs.org/package/@hankliu/icons
[bundlephobia-url]: https://bundlephobia.com/package/@hankliu/icons
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/@hankliu/icons
[dumi-url]: https://github.com/umijs/dumi
[dumi-image]: https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square

🥭 HankLiu UI 的语义化的图标库，基于 Ant Design Icons 图标库，在此基础上新增了许多自定义的 SVG 图标，便于丰富图标库，便于业务开发。

## 安装

```bash
npm install @hankliu/icons --save
```

or

```bash
yarn add @hankliu/icons
```

or

```bash
pnpm install @hankliu/icons
```

## 使用

当启用 `tree-shaking` 时，您可以直接导入或从 `@hankliu/icons` 进行解构。

```ts
import SmileOutlined from '@hankliu/icons/lib/SmileOutlined';
import { SmileOutlined } from '@hankliu/icons';

import SmileFilled from '@hankliu/icons/lib/SmileFilled';
import SmileTwoTone from '@hankliu/icons/lib/SmileTwoTone';
import { SmileFilled, SmileTwoTone } from '@hankliu/icons';
```

### 组件接口参数

```ts
interface HankLiuIconProps {
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
}
```

### 特别说明

如果当前组件中，某些 `Icon` 看起来像被裁剪了一样，效果如下所示：

![图片](https://github.com/hankliu62/icons-react/assets/8088864/d2cb76c4-06c8-4485-a4b5-8e8264cdfa09)

可以提交Issue说明，或者可以使用以下方法进行修复:

``` css
.hlui-icon-icon-orange svg path {
  transform-origin: center;
  transform: scale(0.8);
}
```

> PS: 可以提交Issue不一定修复，看心情，就是这么任性，推荐使用上面方法。

## 案例

`npm start` 然后打开 http://localhost:8000/examples/

线上案例: https://hankliu62.github.io/icons-react

## 单元测试

```
npm test
```

## 覆盖率

```
npm run coverage
```

## License

@hankliu/icons is released under the MIT license.

