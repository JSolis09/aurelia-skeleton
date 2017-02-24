import * as gulp from 'gulp';
import transpile from './transpile';
import {Server as Karma} from 'karma';
import {CLIOptions} from 'aurelia-cli';
import build from './build';

function unit(done) {
  new Karma({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: !CLIOptions.hasFlag('watch')
  }, done).start();
}

export default gulp.series(
  build,
  unit
);
