const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
const Copyplugin = require('copy-webpack-plugin')

//import
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  // js파일이여야 함.
  entry: './js/main.js',
  // 결과물(번들)을 반환하는 설정
  output: {
    //path:path.resolve(__dirname,'dist'),
    //filename : 'main.js',
    clean: true
  },
  // .css 끝나는 모든 파일 정규실 방법
  // 해석한 코드 html 에 적용 스타일 로더부턱 작생해야됨
  // 'css-loader' css 해석용


  // 모듈 처리 방식을 설정
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          // 순서 중요!
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 제외할 경로
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html',
    }),
    new Copyplugin({
      patterns: [{
        from: 'static'
      }]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}