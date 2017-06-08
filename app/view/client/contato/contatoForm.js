Template.contatoForm.onCreated(function () {
	this.telefone = new ReactiveDict();
	this.telefone.set('telefones', [{
		numero: '',
		index: 0,
		add: true
	}]);
	this.email = new ReactiveDict();
	this.email.set('email', [{
		address: '',
		index: 0,
		add: true
	}]);
});



Template.contatoForm.helpers({
	telefone: function () {
		return Template.instance().telefone.get('telefones')
	},
	email: function () {
		return Template.instance().email.get('email')
	}
});

Template.contatoForm.events({
	'click .addTelefone': function (event, template) {
		var telefones = Template.instance().telefone.get('telefones');
		var ultimoIndex = telefones.length - 1;
		var numero = qs("#telefoneEmail" + ultimoIndex).value;
		telefones[ultimoIndex] = {
			numero,
			index: ultimoIndex,
			add: false
		};
		telefones[ultimoIndex + 1] = {
			numero: '',
			index: ultimoIndex + 1,
			add: true
		};
		Template.instance().telefone.set('telefones', telefones);
	},
	'click .deleteTelefone': function (event, template) {
		var email = Template.instance().telefone.get('email');
		email.splice(this.index, 1);
		var ultimoIndex = email.length - 1;
		email[ultimoIndex].add = true;
		Template.instance().telefone.set('email', email);
	},
	'click .addEmail': function (event, template) {
		var email = Template.instance().email.get('email');
		var ultimoIndex = email.length - 1;
		var address = qs("#email" + ultimoIndex).value;
		email[ultimoIndex] = {
			address,
			index: ultimoIndex,
			add: false
		};
		email[ultimoIndex + 1] = {
			address: '',
			index: ultimoIndex + 1,
			add: true
		};
		Template.instance().email.set('email', email);
	},
	'click .deleteEmail': function (event, template) {
		var email = Template.instance().email.get('email');
		email.splice(this.index, 1);
		var ultimoIndex = email.length - 1;
		email[ultimoIndex].add = true;
		Template.instance().email.set('email', email);
	},
});