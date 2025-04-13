module.exports = {
    default: {
        tags: process.env.npm_config_tags || "", // Ensure the correct way to access tags
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            'src/tests/features/*.feature',
        ],
        dryRun: false,
        require: [
            'src/**/**/*.ts',
            "src/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            'summary',
            'progress-bar',
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt",
        ],
        parallel: 1,
        retry: 5
    },
    rerun: {
        formatOptions: {
            snippetInterface: "async-await"
        },
        publishQuiet: true,
        dryRun: false,
        require: [
            'src/**/**/*.ts',
            "src/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel: 1,
        retry: 5
    },
};
