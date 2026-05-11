var expr = require('express');
var app = expr()
var nm = require('nodemailer');

var trans = nm.createTransport({
    host : 'smtp.gmail.com',
    port : 587, // 465,
    auth : {
        user : 'faizanop250@gmail.com',
        pass : 'myapppassword'
    }
})

var mailoption = {
    from : 'faizanop250@gmail.com',
    to : 'xddraco34@gmail.com',
    subject : 'Testing',
    text : 'This is a test mail',
    html : `<h1 style='color:red'>This is a test mail</h1>`,
    attachments : [
        {
            filename : 'asus rog 9 pro.jpg',
            path : 'C:\\Users\\faiza\\Documents\\GitHub\\Full-Stack-Development---1-Tasks\\asus rog 9 pro.jpg'
        }
    ]
}

trans.sendMail(mailoption, (err,info) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Email sent: ' + info.response);
    }
})

