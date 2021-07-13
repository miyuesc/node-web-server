async function getUserInfo(ctx) {

    ctx.success({
        name: 'User1',
        sex: 0,
        age: 24,
        address: '重庆市渝北区xxx号',
        phone: '18323452345'
    })
}

async function getErrorMsg(ctx) {

    console.log(ctx.prototype)

    ctx.success({
        code: '000001',
        msg: '操作失败'
    })
}

export default {
    getUserInfo,
    getErrorMsg
}
