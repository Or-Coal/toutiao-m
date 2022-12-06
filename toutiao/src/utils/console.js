if (process.env.NODE_ENV === 'production') {
  console.log = function () {} // 覆盖所有打印语句
  console.warning = function () {}
  console.dir = function () {}
  console.error = function () {}
}
