import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

/*eslint-disable no-console*/

process.env.NODE_ENV = 'production';

console.log(chalk.green('Generating minified bundle for production...'));

webpack(webpackConfig).run((err,stats)=>{
  if(err) {
    console.log(chalk.red(err));
    return 1;
  }

//Start --> Code to show any error or warning while generating bundle(optional)
const jsonStats = stats.toJson();

if(jsonStats.hasErrors){
  return jsonStats.errors.map(error=>console.log(chalk.red(error)));
}

if(jsonStats.hasWarnings){
  console.log(chalk.yellow('Webpack has generated following warnings'));
  return jsonStats.warnings.map(warning=>console.log(chalk.yellow(warning)));
}

console.log(`wepack stats: ${stats}`);

console.log('Your app has been built for production and written to /dist!')
//End

  return 0;
});


