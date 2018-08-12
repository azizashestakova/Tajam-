'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget);

  // Export
  gulp.task('export', () => {
    return gulp.src([
      path.join(dirs.destination, '**/*'),
      '!' + path.join(dirs.destination, '{**/\_*,**/\_*/**}'),
      '!' + path.join(dirs.destination, '/images/svg/*.svg'),
      '!' + path.join(dirs.destination, '/images/content/**.*'),
      '!' + path.join(dirs.destination, '/images/content'),
      '!' + path.join(dirs.destination, '*.html'),
      '!' + path.join(dirs.destination, '*.ico'),
      '!' + path.join(dirs.destination, '*.txt'),
      '!' + path.join(dirs.destination, '*.md')
    ])
    .pipe(gulp.dest(dirs.export));
  });
}
