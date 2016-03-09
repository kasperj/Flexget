(function () {
  'use strict';

  angular
    .module('flexget.plugins.series')
    .component('seriesEpisode', {
      templateUrl: 'plugins/series/components/series-episode/series-episode.tmpl.html',
      controllerAs: 'vm',
      controller: seriesEpisodeController,
      bindings: {
        episode: '<',
        forgetEpisode: '&'
      },
    });

    function seriesEpisodeController($mdDialog, $http, $stateParams){
      var vm = this;

      loadReleases();
    
      function loadReleases() {
        var params = {
          downloaded: 'downloaded'
        }

        $http.get('/api/series/' + $stateParams.id + '/episodes/' + vm.episode.episode_id + '/releases', { params: params, cache: true })
        .success(function(data) {
          vm.episode.releases = data.releases;
        })
        .error(function(error) {
          console.log(error);
        });
      }
    }
})();
