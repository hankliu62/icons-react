#!/bin/sh
# 删除全局路径下，从 lib/icons 下拷贝的所有icons
ls | grep -v .prettierrc.js | grep -v .fatherrc.js | grep -v jest.config.js | grep -v eslint.config.js | grep -e '.d.ts' -e '.js$' | xargs rm
# keep one d.ts to make vscode auto import working with corrcet path
rm ./es/icons/*.d.ts || echo
