pode = function (roles, usuarioId) {
  if (typeof roles === 'string')
    roles = roles.replace(/\s/, '').split(',');
  if (roles.indexOf('public') >= 0) return true;
  clinicaId = clinicaId || hGetSystem().state.idClinicaSelecionada;
  usuarioId = usuarioId || Meteor.userId();
  if (roles.indexOf('qualquerUsuarioLogado') >= 0) return !!(usuarioId);
  if (!usuarioId) return false;
  var rolesParaVerificar;
    rolesParaVerificar = roles || [];
  return Roles.userIsInRole(usuarioId, rolesParaVerificar);
};
