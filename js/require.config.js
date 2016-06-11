require.config({
    urlArgs: "4.1.0",
    baseUrl: "/js",
    paths: {
        d3: "libs/d3.min",
        nvd3: "libs/nv.d3"
    },
    shim: {
        nvd3: ["d3"]
    }
})