import { defineConfig } from 'vite';

import vituum from 'vituum';
import nunjucks from '@vituum/vite-plugin-nunjucks';
import postcss from '@vituum/vite-plugin-postcss'

import svgSprite from '@bro-academy/vite-plugin-svg-sprite';
import imageOptimizer from '@bro-academy/vite-plugin-image-optimizer';

export default defineConfig({
    build: {
        assetsInlineLimit: 0,
    },
    plugins: [
        svgSprite(),
        vituum(),
        nunjucks(),
        postcss(),
        imageOptimizer(),
    ],
})