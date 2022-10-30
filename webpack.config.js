
const path = require('path');

module.exports={
    entry: './src/index.js',  
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dmitriyKuprienko.js',
      
      },
      mode: 'none',
      devServer: {
   open:"true",
        port: 9900,
      },
    
};
