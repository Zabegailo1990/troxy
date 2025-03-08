import gulp from 'gulp';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import del from 'del';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import fileInclude from 'gulp-file-include';
import browserSync from 'browser-sync';
import flatten from 'gulp-flatten';
import replace from 'gulp-replace';
import babel from 'gulp-babel';
import htmlmin from 'gulp-htmlmin';

const sassCompiler = gulpSass(sass);

const paths = {
    html: {
        src: 'index.html',
        dest: 'docs/',
    },
    pages: {
        src: './src/pages/**/*.html',
        dest: 'docs/pages/',
    },
    styles: {
        src: './src/assets/scss/main.scss',
        dest: 'docs/css/',
    },
    scripts: {
        src: './src/assets/js/**/*.js',
        dest: 'docs/js/',
    },
    images: {
        src: './src/assets/images/**/*',
        dest: 'docs/images/',
    }
};

// Удаление папки сборки
function deleteDist() {
    return del(['docs/**', '!docs/images', '!docs/images/**']);
}

// Обновление папки сборки
function buildDist(done) {
    return gulp.series(
        deleteDist,
        gulp.parallel(styles, scripts, main, pages, copySprites)
    )(done);
};

// Возможность подключения компонентов html к index.html
function main() {
    return gulp.src(paths.html.src)
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file',
            indent: true,
        }))
        // Удаляет пустой тег с @@empty
        .pipe(replace(/<(\w+)[^>]*\s@@empty\s*[^>]*>[\s\S]*?<\/\1>/g, ''))
        //Если тег не пустой — удаляет только сам маркер
        .pipe(replace(/\s+@@empty/g, ''))
        // Удаляем одиночные теги с @@ в атрибутах
        .pipe(replace(/<[^>]+\s+[a-zA-Z-]+="@@[^"]*"[^>]*\/?>/g, ''))
        // Удаляем парные теги, если внутри есть @@
        .pipe(replace(/<(\w+)[^>]*>\s*[^<>]*@@[^<>]*\s*<\/\1>/g, ''))
        // Удаляем @@ внутри class, оставляя сам класс
        .pipe(replace(/\s+@@[a-zA-Z0-9-_]+/g, ''))
        // Удаляем полностью пустые теги (кроме <script>, <use>, <span>)
        .pipe(replace(/<(?!script\b|use\b|span\b|td\b|th\b|textarea\b)(\w+)[^>]*>\s*<\/\1>/g, ''))
        // Удаляем родительский тег, если внутри него только пустые теги (кроме одиночных)
        .pipe(replace(/<(\w+)[^>]*>\s*(?:<(?!img|td|span|use|br|hr|meta|link|input|source|area|col|embed|param|track|wbr)[\w-]+[^>]*>\s*<\/[\w-]+>\s*)+<\/\1>/g, ''))
        // Удаляем теги img с @@ в src
        .pipe(replace(/<img[^>]+src="@@[^"]*"[^>]*>/g, ''))
        // Удаляем пустые строки
        .pipe(replace(/^\s*[\r\n]/gm, ''))

        .pipe(replace(/<div[^>]*>\s*(<(?!img|span|td|use|br|hr|meta|link|input|source|area|col|embed|param|track|wbr)[\w-]+[^>]*>\s*<\/[\w-]+>\s*)*<\/div>/g, ''))
        
        .pipe(gulp.dest(paths.html.dest));
};


// Возможность подключения компонентов html к pages
function pages() {
    return gulp.src(paths.pages.src)
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file',
            indent: true,
        }))

        // Удаляет пустой тег с @@empty
        .pipe(replace(/<(\w+)[^>]*\s@@empty\s*[^>]*>[\s\S]*?<\/\1>/g, ''))
        //Если тег не пустой — удаляет только сам маркер
        .pipe(replace(/\s+@@empty/g, ''))
        // Удаляем одиночные теги с @@ в атрибутах
        .pipe(replace(/<[^>]+\s+[a-zA-Z-]+="@@[^"]*"[^>]*\/?>/g, ''))
        // Удаляем парные теги, если внутри есть @@
        .pipe(replace(/<(\w+)[^>]*>\s*[^<>]*@@[^<>]*\s*<\/\1>/g, ''))
        // Удаляем @@ внутри class, оставляя сам класс
        .pipe(replace(/\s+@@[a-zA-Z0-9-_]+/g, ''))
        // Удаляем полностью пустые теги (кроме <script>, <use>, <span>)
        .pipe(replace(/<(?!script\b|use\b|span\b|td\b|th\b|textarea\b)(\w+)[^>]*>\s*<\/\1>/g, ''))
        // Удаляем родительский тег, если внутри него только пустые теги (кроме одиночных)
        .pipe(replace(/<(\w+)[^>]*>\s*(?:<(?!img|td|span|use|br|hr|meta|link|input|source|area|col|embed|param|track|wbr)[\w-]+[^>]*>\s*<\/[\w-]+>\s*)+<\/\1>/g, ''))
        // Удаляем теги img с @@ в src
        .pipe(replace(/<img[^>]+src="@@[^"]*"[^>]*>/g, ''))
        // Удаляем пустые строки
        .pipe(replace(/^\s*[\r\n]/gm, '')) 

        .pipe(replace(/<div[^>]*>\s*(<(?!img|span|td|use|br|hr|meta|link|input|source|area|col|embed|param|track|wbr)[\w-]+[^>]*>\s*<\/[\w-]+>\s*)*<\/div>/g, ''))



        .pipe(flatten())
        .pipe(gulp.dest(paths.pages.dest));
};

// Сборка стилей
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest));
};

// Копирование шрифтов
function fonts() {
    return gulp.src('./src/assets/fonts/*', { encoding: false })
        .pipe(gulp.dest('docs/fonts/'))
}  

// Сбока скриптов
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest));
}

export function copyVendors() {
    return gulp.src('src/vendors/**/*.js') // Исходная папка
        .pipe(gulp.dest('docs/vendors')); // Куда копируем
}

// Сборка изображений
export function images() {
    return gulp.src(paths.images.src, {encoding: false})
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
};

function copySprites() {
        return gulp.src('./src/assets/sprites/**/*')
            .pipe(gulp.dest('docs/sprites'));
  }

// Вотчеры и live server
export function serve() {
    browserSync.init({
        server: {
            baseDir: './docs',
        },
    });

    gulp.watch(
        ['./*.html', './src/components/**/*.html', './src/sections/**/*.html', './src/pages/**/*.html'],
        gulp.series(main, pages, (done) => {
            browserSync.reload();
            done();
        })
    );

    gulp.watch(
        ['./src/assets/scss/**/*.scss', './src/components/**/*.scss', './src/sections/**/*.scss', './src/pages/**/*.scss'],
        gulp.series(styles, (done) => {
            browserSync.reload();
            done();
        })
    );

    gulp.watch(['./src/assets/js/main.js','./src/components/**/*.js', './src/sections/**/*.js', './src/pages/**/*.js'], gulp.series(scripts, (done) => {
        browserSync.reload();
        done();
    }));

    gulp.watch(paths.images.src, gulp.series(images, (done) => {
        browserSync.reload();
        done();
    }));
    
    gulp.watch('./src/assets/sprites/**/*', gulp.series(copySprites, main, pages, (done) => {
        browserSync.reload();
        done();
    }));
};

// Выполнение выше описанных тасок
export default gulp.series(buildDist, fonts, styles, scripts, copySprites, copyVendors, main, pages, serve);