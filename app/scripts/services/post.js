'use strict';

app.factory('Post', function ($resource) {
    return $resource('https://brilliant-fire-3515.firebaseio.com/posts/:id.json');
});
