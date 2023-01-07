const rules = {
    subject:{
        required: true,
        minlength: 5
    },
    full_name:{
        required: true
    },
    email:{
        required: true,
        email: true
    },
    message:{
        required: true,
        minlength: 10
    }
}

const messages = {
    subject:{
        required: "Subjek harus diisi",
        minlength: "Subjek minimal 5 karakter"
    }
}

$(document).ready(function(){
    $('#form').validate({
        rules: rules,
        messages: messages
    })
})