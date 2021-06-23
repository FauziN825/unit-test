const request = require('supertest')

const app = require('../app');

const User = require('../db/models/users')


const user1 = {
    name:'test2',
    email:'test@gmail.com',
    password: '123456789'
}

beforeEach( async() => {
    await User.deleteMany({})
    await User(user1).save();
})

afterEach(() => {
    console.log('AfterEach')
})

test('Should sign up for a user', async () => {
    await request(app).post('/users')
    .send({
        name: "test21",
        email: "test@gmail.com",
        password: '123456789'
    })
    .expect(201)
})

test('Should login for a user', async () => {
    await request(app).post('/users/login')
    .send({
        email: user1.email,
        password: user1.password
    })
})