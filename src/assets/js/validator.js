export function username(fields, val, cb) {
    if (!/^[a-zA-Z0-9_-]{4,16}$/.test(val)) {
        return cb(new Error('用户名4-16位数字字母下划线'))
    }
    cb();
}

export function pwd(fields, val, cb) {
    if (val.length <= 0) {
        return cb(new Error('请输入密码'))
    }
    cb();
}

// export function repeat(data, text, fileds, value, cb) {
//     if (!value) {
//         return cb(new Error('请重复输入密码'))
//     } 
//     if (data !== value) {
//         return cb(new Error('两次密码不一致'))
//     }
//     cb()
// }