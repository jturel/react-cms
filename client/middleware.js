exports.authenticateRequest = function(req, res, next) {
    /*
    const token = localStorage.getItem('reactCmsToken')

    if(!token) {
      console.log("got no auth token")
      return res.redirect('/login');
    }
    */

    fetch('http://localhost:3001/api/v1/check_token', {
        method: 'GET',
        headers: {
          'Authorization': ''
        }
    }).then(r => {
        if (r.status === 403) {
          console.log("403 at " + req.path);
          return res.redirect('/login');
        }

        return next();
    })
}
