Template.contatoForm.onCreated(function () {
	var self = this;
	self.telefone = new ReactiveDict();
	self.email = new ReactiveDict();
	self.redeSocial = new ReactiveDict();
});

Template.contatoForm.onRendered(function () {
	var self = this;
	if (self.data && self.data.contato) {
		var contato = this.data.contato;
		var email = contato.emails.map((e, idx) => {
			e.index = idx;
			e.add = false;
			return e;
		});
		email[email.length - 1].add = true;
		self.email.set('email', email);
		var telefone = contato.telefones.map((e, idx) => {
			e.index = idx;
			e.add = false;
			return e;
		});
		telefone[telefone.length - 1].add = true;
		self.telefone.set('telefones', telefone);
		var redeSocial = contato.redeSocial.map((e, idx) => {
			e.index = idx;
			e.add = false;
			return e;
		});
		redeSocial[redeSocial.length - 1].add = true;
		self.redeSocial.set('redeSocial', redeSocial);
	}
	else {
		self.telefone.set('telefones', [{
			numero: '',
			index: 0,
			add: true
		}]);
		self.email.set('email', [{
			address: '',
			index: 0,
			add: true
		}]);
		self.redeSocial.set('redeSocial', [{
			url: '',
			nick: '',
			tipo: '',
			index: 0,
			add: true
		}]);
	}

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
		var telefones = Template.instance().telefone.get('telefones');
		var ret = [];
		telefones.forEach((i) => {
			var numero = qs("#telefone" + i.index).value || '';
			ret.push({
				numero,
				index: i.index,
				add: false
			});
		});
		ret.push({
			numero: '',
			index: ret.length,
			add: true
		});
		Template.instance().telefone.set('telefones', ret);
	},
	'click .deleteTelefone': function (event, template) {
		var telefones = Template.instance().telefone.get('telefones');
		var ret = [];
		var self = App.utils.cloneObj(this);
		var indexClicado = self.index;
		telefones.filter((i) => {
			var numero = qs("#telefone" + i.index).value || '';
			if (indexClicado != i.index)
				ret.push({
					numero,
					index: i.index,
					add: false
				});
		});
		ret[ret.length - 1].add = true;
		Template.instance().telefone.set('telefones', ret);
	},
	'click .addEmail': function (event, template) {
		var email = Template.instance().email.get('email');
		var ret = [];
		email.forEach((i) => {
			var address = qs("#email" + i.index).value || '';
			ret.push({
				address,
				index: i.index,
				add: false
			});
		});
		ret.push({
			address: '',
			index: ret.length,
			add: true
		});
		Template.instance().email.set('email', ret);
	},
	'click .deleteEmail': function (event, template) {
		var email = Template.instance().email.get('email');
		var ret = [];
		var self = App.utils.cloneObj(this);
		var indexClicado = self.index;
		email.filter((i) => {
			var address = qs("#email" + i.index).value || '';
			if (indexClicado != i.index)
				ret.push({
					address,
					index: i.index,
					add: false
				});
		});
		ret[ret.length - 1].add = true;
		Template.instance().email.set('email', ret);
	},
	'click .addRedeSocial': function (event, template) {
		var redeSocial = Template.instance().redeSocial.get('redeSocial');
		var ret = [];
		redeSocial.forEach((i) => {
			var url = qs("#redeSocialUrl" + i.index).value;
			var tipo = qs("[name=redeSocialTipo" + i.index + "]").value;
			var nick = qs("#redeSocialNick" + i.index).value;
			var address = qs("#email" + i.index).value || '';
			ret.push({
				url,
				tipo,
				nick,
				index: i.index,
				add: false
			});
		});
		ret.push({
			url: '',
			tipo: '',
			nick: '',
			index: ret.length,
			add: true
		});
		Template.instance().redeSocial.set('redeSocial', ret);
	},
	'click .deleteRedeSocial': function (event, template) {
		var redeSocial = Template.instance().redeSocial.get('redeSocial');
		var ret = [];
		var self = App.utils.cloneObj(this);
		var indexClicado = self.index;
		redeSocial.filter((i) => {
			var url = qs("#redeSocialUrl" + i.index).value;
			var tipo = qs("[name=redeSocialTipo" + i.index + "]").value;
			var nick = qs("#redeSocialNick" + i.index).value;
			var address = qs("#email" + i.index).value || '';
			if (indexClicado != i.index)
				ret.push({
					url,
					tipo,
					nick,
					index: i.index,
					add: false
				});
		});
		ret[ret.length - 1].add = true;
		Template.instance().redeSocial.set('redeSocial', ret);
	},
	'click .salvarContato': function (event, template) {
		var redeSocial = Template.instance().redeSocial.get('redeSocial');
		redeSocial = getRedeSocial(redeSocial);
		var telefones = Template.instance().telefone.get('telefones');
		telefones = getTelefone(telefones);
		var emails = Template.instance().email.get('email');
		emails = getEmail(emails);
		var usuarioId = Meteor.userId();
		Meteor.call('contato.adicionar', {
			redeSocial,
			telefones,
			emails,
			usuarioId
		}, function (err) {
			if (err) {
				return swal('Oops...', 'Ocorreu um erro inesperado, por favor, tente novamente :)' + err.stack || err.error, 'error');

			} else {
				swal('Ebaaa...', 'Seu contato foi cadastro com sucesso :)', 'success');
			}
		});
	}
});


function getEmail(email) {
	var email = Template.instance().email.get('email');
	var ret = [];
	email.forEach((i) => {
		var address = qs("#email" + i.index).value || '';
		ret.push({
			address,
		});
	});
	return ret;
}
function getTelefone(telefones) {
	var ret = [];
	telefones.forEach((i) => {
		var numero = qs("#telefone" + i.index).value || '';
		ret.push({
			numero,
		});
	});
	return ret;
};
function getRedeSocial(redeSocial) {
	var ret = [];
	redeSocial.forEach((i) => {
		var url = qs("#redeSocialUrl" + i.index).value;
		var tipo = qs("[name=redeSocialTipo" + i.index + "]").value;
		var nick = qs("#redeSocialNick" + i.index).value;
		var address = qs("#email" + i.index).value || '';
		ret.push({
			url,
			tipo,
			nick,
		});
	});
	return ret;
}