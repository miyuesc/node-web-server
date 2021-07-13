function login (ctx) {
    const user = {
        name: 'User1',
        sex: 0,
        age: 24,
        address: '重庆市渝北区xxx',
        phone: '18323452345',
        token: 'hda89dy9ah2q7ydaidy91td91-102dajsdku9q1jlk'
    }
    ctx.success(user)
}

export default {
    login
}
