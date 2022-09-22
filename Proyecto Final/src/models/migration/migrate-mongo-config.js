const config = {
    mongodb: {
        
        url: "mongodb://127.0.0.1:27017/coder-backend",

        databaseName: "coder-backend",

        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    },

    migrationsDir: "migrations",

    changelogCollectionName: "changelog",

    migrationFileExtension: ".js",

    useFileHash: false
};

module.exports = config;