module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "jsx-a11y", "json", "prettier", "react-hooks"],
    rules: {
        "react/prop-types": "off",
        "react-hooks/exhaustive-deps": "off",
        "no-var": "error",
        "brace-style": "error",
        "prefer-template": "error",
        "no-unused-vars": "warn",
        "radix": "error",
        "space-before-blocks": "error",
        "import/prefer-default-export": "off",
    },
};
