/*
//              Webpack (Boilerplate)

/*
    Passo 1: Inicializar o npm
        Terminal: npm init -y

    Passo 2: Instalando dependencias:
        Terminal: npm install --save-dev @babel/preset-env @babel/core @babel/cli babel-loader webpack webpack-cli regenerator-runtime core-js@2
        Cria Arquivo: .gitignore com node_modules escrito dentro

    Passo 3: Cria Pasta do codigo fonte
        Cria pasta: nomeia de "src"
        Cria Arquivo: dentro da pasta cria arq index.js

    Passo 4: Cria Pasta Public
        Cria pasta: nomeia de "public"
            Cria pasta: dentro de public, cria a pasta "assets"
                Cria Pasta: dentro de assets, cria a pasta "js"

    Passo 5: Criando Arquivo de configuração do webpack
        Cria arquivo: webpack.config.js
        Codigo: 
                const path = require('path');

                module.exports = {
                    mode: 'development',
                    entry: './src/main.js',
                    output: {
                    path: path.resolve(__dirname, 'public', 'assets', 'js'),
                    filename: 'bundle.js',
                    },
                    module: {
                        rules: [{
                            exclude: /node_modules/,
                            test: /\.js$/,
                            use: {
                                loader: 'babel-loader',
                                options: {
                                    presets: ['@babel/env']
                                }
                            }
                        }, {
                            test: /\.css$/,
                            use: ['style-loader', 'css-loader']
                        }]
                    },
                    devtool: 'source-map'
                }
        
    Passo 6: Correção core-js
        Em "package.json", na chave "devDependencies", apaga as chaves "core-js" e "regenerator-runtime" do objeto
        Apaga pasta: apaga a pasta "node_modules"
        Terminal: npm install core-js regenerator-runtime


    Passo 7: Testar webpack
        Em "package.json", na chave "scripts", adicionar uma chave ao objeto com o nome "carregaWebpack" com valor "webpack -w"
        Terminal: npm rum carregaWebpack

    Passo 8: Criar index.html
        Cria arquivo: dentro de public, cria o arquivo "index.html"
        Dentro de index.html, carrega o bundle.js com <script src="./assets/js/bundle.js></script>"
 
    Passo 9: Adicionar CSS
        Terminal: npm install style-loader css-loader
 
*/



//  Pronto, agora o bundle vai ser gerado sempre que algo for mudado no index.js e o index.html vai carregar esse bundle