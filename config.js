System.config({
    //  use typescript for compilation
    transpiler: "typescript",
    // typescript compiler options
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    // map tells the System loader where to look for things
    map: {
        app: "./src",
        "@angular": "https://npmcdn.com/@angular", // sufficient if we didn"t pin the version
        "rxjs": "https://npmcdn.com/rxjs@5.0.0-beta.6",
        "ts": "https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js",
        "typescript": "https://npmcdn.com/typescript@1.9.0-dev.20160409/lib/typescript.js"
    },
    //packages defines our app package
    packages: {
        app: {
            main: "./main.ts",
            defaultExtension: "ts"
        },
        "@angular/core": {
            main: "bundles/core.umd.js",
            defaultExtension: "js"
        },
        "@angular/compiler": {
            main: "bundles/compiler.umd.js",
            defaultExtension: "js"
        },
        "@angular/common": {
            main: "bundles/common.umd.js",
            defaultExtension: "js"
        },
        "@angular/platform-browser-dynamic": {
            main: "bundles/platform-browser-dynamic.umd.js",
            defaultExtension: "js"
        },
        "@angular/platform-browser": {
            main: "bundles/platform-browser.umd.js",
            defaultExtension: "js"
        },
        rxjs: {
            defaultExtension: "js"
        }
    }
})
