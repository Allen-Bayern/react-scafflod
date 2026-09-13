module.exports = {
    root: true,
    // stylelint-config-prettier-scss 必须放在最后：
    // 关闭 standard/standard-scss 中与 Prettier 冲突的格式化类规则（如空行、@else 大括号换行等），
    // 格式化统一由下面的 prettier/prettier 规则执行。
    extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
    plugins: ['stylelint-prettier'],
    rules: {
        'prettier/prettier': true,
    },
};
