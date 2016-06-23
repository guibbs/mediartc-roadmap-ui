(function () {
  var sideNavBtn = document.getElementsByName('sidenav-opener')[0]
  var sideNavOverlay = document.getElementsByClassName('sidenav-overlay')[0]
  var sideNav = document.getElementsByClassName('sidenav')[0]

  sideNavBtn.addEventListener('click', function () {
    sideNavOverlay.className += ' active'
    sideNav.className += ' active'
  })

  sideNavOverlay.addEventListener('click', function () {
    sideNavOverlay.className = sideNavOverlay.className.replace('active', 'hidden')
    sideNav.className = sideNav.className.replace('active', 'hidden')
  })
})()
