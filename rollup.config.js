import typescript from "@rollup/plugin-typescript";


export default [
    {
        input: "src/main.ts",
        output: {
            dir: "public/lib",
            format: "esm"
        },
        plugins: [
            typescript({
                tsconfig: "./tsconfig.json"
            })
        ]
    }
]