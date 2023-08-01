function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "prasadchiefex@gmail.com",
        Password: "chiefexps123",
        To: 'prasadsawant2698@gmail.com',
        From: "prasadchiefex@gmail.com",
        Subject: "New COntact From Enquiry",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );

}