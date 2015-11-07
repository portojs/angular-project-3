/**
 * Created by Peter on 07.11.2015.
 */
angular.module('mercCompany')
  .provider('Gravatar', function GravatarProvider() {
    var avatarSize = 80; // default avatar size
    var avatarUrl = 'http://www.gravatar.com/avatar/';
    this.setSize = function(size) {
      avatarSize = size;
    };
    this.$get = function() {
      return function(email) {
        return avatarUrl + CryptoJS.MD5(email) + "?size=" + avatarSize.toString();
      }
    };
  });