const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cssnano      = require('gulp-cssnano'),
      pug          = require('gulp-pug'),
      htmlbeautify = require('gulp-html-beautify'),
      jsmin        = require('gulp-jsmin'),
      concat       = require('gulp-concat'),
      rename       = require('gulp-rename'),
      changed      = require('gulp-changed'),
      browserSync  = require('browser-sync'),
      del          = require('del'),
      uncss        = require('gulp-uncss'),
      criticalCss  = require('gulp-critical-css'),
      sftp         = require('gulp-sftp');


gulp.task('sass', function () {
    return gulp.src([
        'app/sass/style.sass'
    ])
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('app/css'))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(changed('app/css'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('css-libs', function() {
    return gulp.src([
        'app/css/normalize.css',
        'app/css/libs/*.css'
    ])
        .pipe(concat('libs.css')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(changed('app/css/libs'))
        .pipe(gulp.dest('app/css'));
});

gulp.task('uncss', function () {
    return gulp.src('app/css/style.css')
        .pipe(uncss({
            html: ['app/index.html']
        }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('criticalCss', function () {
    gulp.src('app/css/style.css')
        .pipe(criticalCss())
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(changed('app/css'))
        .pipe(gulp.dest('app/css'))
});

gulp.task('scripts', function () {
    return gulp.src(['app/js/main.js', 'app/js/charts.js'])
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(changed('app/js'))
        .pipe(gulp.dest('app/js'))
});

gulp.task('scripts-libs', function() {
    return gulp.src([
        'app/js/libs/jquery.js',
        'app/js/libs/parallax.min.js',
        'app/js/libs/wow.min.js'
    ])
        .pipe(concat('libs.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(changed('app/js/libs'))
        .pipe(gulp.dest('app/js'));
});

gulp.task('pug', function () {
    return gulp.src('app/pug/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app'))
        .pipe(htmlbeautify())
        .pipe(browserSync.stream());
});

gulp.task('htmlbeautify', function () {
    let options = {
        indentSize: 2,
        unformatted: [
            // https://www.w3.org/TR/html5/dom.html#phrasing-content
            'abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite',
            'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript',
            'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small',
            'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text',
            'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
        ]
    };
    gulp.src('./*.html')
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest('app'))
});

gulp.task('code', function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

// gulp.task('scripts_libs', function() {
//     return gulp.src([ // Берем все необходимые библиотеки
//         'app/libs/jquery/dist/jquery.js',
//         'app/libs/slick-carousel/slick/slick.min.js',
//         'app/libs/wow/dist/wow.min.js'
//     ])
//         .pipe(concat('libs.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('app/js'));
// });

// gulp.task('css-libs', function() {
//     return gulp.src([ // Берем все необходимые библиотеки
//         'app/libs/slick-carousel/slick/slick.css',
//         'app/libs/wow/css/libs/animate.css'
//     ])
//         .pipe(concat('libs.css'))
//         .pipe(cssnano())
//         .pipe(gulp.dest('app/css'));
// });

gulp.task('clean', async function () {
        return del.sync('dist');
    }
)
;

gulp.task('prebuild', async function () {
        let buildCss = gulp.src([
            'app/css/style.css',
            'app/css/style.min.css',
            'app/css/libs.min.css'
        ])
            .pipe(gulp.dest('dist/css'));

        let buildFonts = gulp.src('app/fonts/**/*')
            .pipe(gulp.dest('dist/fonts'));

        let buildJs = gulp.src([
            'app/js/charts.js',
            'app/js/charts.min.js',
            'app/js/libs.min.js',
            'app/js/main.js',
            'app/js/main.min.js'
        ])
            .pipe(gulp.dest('dist/js'));

        let buildHtml = gulp.src('app/*.html')
            .pipe(gulp.dest('dist'));

        let buildImg = gulp.src('app/img/**/*')
            .pipe(gulp.dest('dist/img'));
    }
)
;

gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('code'));
    gulp.watch('app/js/*.js', gulp.parallel('scripts'));
});

gulp.task('deploy', function() {
    return gulp.src(['dist/**/*'])
        .pipe(sftp({
            host: '178.172.173.58',
            user: 'dev',
            pass: 'ebeE4x',
            remotePath: '/var/www/openspot/public/home/'
        }))
});


// Build tasks

gulp.task('default', gulp.parallel('pug', 'sass', 'css-libs', 'scripts', 'scripts-libs', 'browser-sync', 'watch'));
gulp.task('build', gulp.parallel('clean', 'prebuild'));