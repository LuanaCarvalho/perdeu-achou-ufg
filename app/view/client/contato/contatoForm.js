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
	this.redeSocial = new ReactiveDict();
	this.redeSocial.set('redeSocial', [{
		url: '',
		nick: '',
		tipo: '',
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
	},
	redeSocial: function () {
		return Template.instance().redeSocial.get('redeSocial')
	}
});

Template.contatoForm.events({
	'click .addTelefone': function (event, template) {
		debugger
		var telefones = Template.instance().telefone.get('telefones');
		var ultimoIndex = telefones.length - 1;
		var numero = qs("#telefone" + ultimoIndex).value;
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
		var telefones = Template.instance().telefone.get('telefones');
		var ultimoIndex = telefones.length - 1;
		var numero = qs("#telefone" + ultimoIndex).value;
		telefones[ultimoIndex] = {
			numero,
			index: ultimoIndex,
			add: true
		};
		telefones.splice(this.index, 1);
		Template.instance().telefone.set('telefones', telefones);
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
		var ultimoIndex = email.length - 1;
		var address = qs("#email" + ultimoIndex).value;
		email[ultimoIndex] = {
			address,
			index: ultimoIndex,
			add: true
		};
		email.splice(this.index, 1);
		Template.instance().email.set('email', email);
	},
	'click .addRedeSocial': function (event, template) {
		var redeSocial = Template.instance().redeSocial.get('redeSocial');
		var ultimoIndex = redeSocial.length - 1;
		var url = qs("#redeSocialUrl" + ultimoIndex).value;
		var tipo = qs("[name=redeSocialTipo" + ultimoIndex + "]").value;
		var nick = qs("#redeSocialNick" + ultimoIndex).value;
		redeSocial[ultimoIndex] = {
			url,
			tipo,
			nick,
			index: ultimoIndex,
			add: false
		};
		redeSocial[ultimoIndex + 1] = {
			url: '',
			tipo: '',
			nick: '',
			index: ultimoIndex,
			add: true
		};
		Template.instance().redeSocial.set('redeSocial', redeSocial);
	},
	'click .deleteRedeSocial': function (event, template) {
		var redeSocial = Template.instance().redeSocial.get('redeSocial');
		var ultimoIndex = redeSocial.length - 1;
		var url = qs("#redeSocialUrl" + ultimoIndex).value;
		var tipo = qs("[name=redeSocialTipo" + ultimoIndex + "]").value;
		var nick = qs("#redeSocialNick" + ultimoIndex).value;
		redeSocial[ultimoIndex] = {
			url,
			tipo,
			nick,
			index: ultimoIndex,
			add: true
		};
		redeSocial.splice(this.index, 1);
		Template.instance().redeSocial.set('redeSocial', redeSocial);
	},
});