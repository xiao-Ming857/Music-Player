// function defaultTask(cb) {
//     // place code for your default task here
//     cb("晓铭");
// }
// exports.default = defaultTask
//default是任务默认导出的名字，可以修改（cmd：gulp xxx）
//公开任务（cmd: gulp default 或 gulp）、私有任务（只能在文件内部使用，例如：series，parallel）
//只要导出就是一个公开任务，没有导出就是私有任务

// const gulp = require("gulp");
// console.log(gulp);

/* const { series, parallel } = require("gulp");

function fn1(cb) {
    console.log("fn1被调用了");
    cb(); //和return一样
}

function fn2(cb) {
    console.log("fn2被调用了");
    cb();
}

function fn3(cb) {
    console.log("fn3被调用了");
    cb();
}
exports.build = fn1; //fn1被调用了
// exports.default = series(fn1, fn2); //fn1被调用了 fn2被调用了 组合任务执行 依次被执行，直接返回结果
exports.default = parallel(fn1, fn2); //fn1被调用了 fn2被调用了 组合任务执行 同时被执行，依次返回结果
exports.default = parallel(fn1, series(fn2, fn3));
//series当有一处错误时，就直接返回结果，不在继续执行；parallel是同时进行加载的，前一个错不一定会阻止后面方法的执行 */

// 处理文件
const { src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
// I(input) O(output)
// less -> css -> css加上css3的前缀 -> 压缩 -> 输出

exports.default = function() {
    return src("src/js/*.js")
        .pipe(dest("dist/js"))
        .pipe(uglify())
        .pipe(rename({ extname: ".min.js" }))
        .pipe(dest("dist/js"));
}

// 文件监控
const { watch } = require("gulp");
watch("src/css/*", {
    delay: 1000,
}, function(cb) {
    console.log("文件被修改了");
    cb();
});