
const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true}
});
const LoginModel = mongoose.model("Login", LoginSchema);


class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async login() {
        this.valida();
        if(this.errors.length > 0) return;
        this.user = await LoginModel.findOne({ email: this.body.email });
        if (!this.user) {
            this.errors.push('Usuário não existe.');
            return;
        }
        if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push("Senha Invalida");
            this.user = null;
            return;
        }

    } 




    async register() {
        this.valida();
        if (this.errors.length > 0) return;
        await this.userExists();
        if (this.errors.length > 0) return;
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);
        this.user = await LoginModel.create(this.body);
    }
    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email });
        if (this.user) this.errors.push('Usuário já existe');
    }
    valida(){
        this.cleanUp();
        // Validação dos dados:
            // email valido
        if (!validator.isEmail(this.body.email)){
            this.errors.push("E-mail inválido");
        } 
            // senha entre 5 e 50 caracteres
        if (this.body.password.length < 3 || this.body.password.length >= 50) {
            this.errors.push("A senha precisa ter entre 3 e 50 caracteres");
        }
    }      
    // Garante que os dados são string e filtra o valor do csrf
    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        this.body = {
            email: this.body.email,
            password: this.body.password
        }; 
        }
    }

}

module.exports = Login;