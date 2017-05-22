/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {
        "classwork/task1/build/bundle1": "./classwork/task1/src/main.jsx",
        "classwork/task2/build/bundle2": "./classwork/task2/src/main.jsx",
        "classwork/task3/build/bundle3": "./classwork/task3/src/main.jsx",
        "homework/task1/build/bundle1": "./homework/task1/src/main.jsx",
        "homework/task2/build/bundle2": "./homework/task2/src/main.jsx",
        "homework/task3/build/bundle3": "./homework/task3/src/main.jsx"
    },

    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json-loader' },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                {
                    presets: ['es2015', 'react'], 
					plugins: ['transform-object-rest-spread']
                }
            }
        ]
    }
};