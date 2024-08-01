module.exports =  {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:promise/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        sourceType: "module",
        tsconfigRootDir: __dirname,
    },
    plugins: [
        "@typescript-eslint",
        "prettier",
        "promise",
        "import",
        "@microsoft/power-apps"
    ],
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@microsoft/power-apps/avoid-2011-api": "error",
        "@microsoft/power-apps/avoid-browser-specific-api": "error",
        "@microsoft/power-apps/avoid-crm2011-service-odata": "error",
        "@microsoft/power-apps/avoid-crm2011-service-soap": "error",
        "@microsoft/power-apps/avoid-dom-form-event": "error",
        "@microsoft/power-apps/avoid-dom-form": "error",
        "@microsoft/power-apps/avoid-isactivitytype": "error",
        "@microsoft/power-apps/avoid-modals": "error",
        "@microsoft/power-apps/avoid-unpub-api": "error",
        "@microsoft/power-apps/avoid-ui-refreshribbon": "error",
        "@microsoft/power-apps/avoid-window-top": "error",
        "@microsoft/power-apps/do-not-make-parent-assumption": "error",
        "@microsoft/power-apps/use-async": "error",
        "@microsoft/power-apps/use-cached-webresource": "error",
        "@microsoft/power-apps/use-client-context": "error",
        "@microsoft/power-apps/use-getsecurityroleprivilegesinfo": "error",
        "@microsoft/power-apps/use-global-context": "error",
        "@microsoft/power-apps/use-grid-api": "error",
        "@microsoft/power-apps/use-navigation-api": "error",
        "@microsoft/power-apps/use-offline": "error",
        "@microsoft/power-apps/use-org-setting": "error",
        "@microsoft/power-apps/use-relative-uri": "error",
        "@microsoft/power-apps/use-utility-dialogs": "error",
    }
}
