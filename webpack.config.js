const path = require('path');

module.exports = {
	mode: "production",
    entry: './src/index.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'dist')
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]

            },
            {
                test : /\.(png|svg|jpg|gif)$/,
                use : [
                    'file-loader',
                    {
                        loader : 'image-webpack-loader',
                        options : {
                            bypassOnDebug : true,
                            disable : true,
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test : /\.xml$/,
                use : [
                    'xml-loader'
                ]
            }
        ]
    }
}