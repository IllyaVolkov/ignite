/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {
        "classwork/build/bundle1": "./classwork/jsx/main1.jsx",
        "classwork/build/bundle2": "./classwork/jsx/main2.jsx",
        "classwork/build/bundle3": "./classwork/jsx/main3.jsx",
        "homework/build/bundle1": "./homework/jsx/main1.jsx",
        "homework/build/bundle2": "./homework/jsx/main2.jsx",
    },

    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                {
                    presets: ['react']
                }
            }
        ]
    }
};