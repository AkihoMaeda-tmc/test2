const icon24 =
//      '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><image href="https://akihomaeda-tmc.github.io/test2/img/title.svg" height="20" width="20"/></svg>'
//      '<img src="https://akihomaeda-tmc.github.io/test2/img/title.svg" width="20" height="20">'
   '<path fill="currentColor" fill-rule="nonzero" d="d="M112.405,197.908H7.223A7.231,7.231,0,0,1,0,190.685V34.944A1.354,1.354,0,0,1,1.354,33.59H112.405a7.231,7.231,0,0,1,7.222,7.223V190.685A7.231,7.231,0,0,1,112.405,197.908ZM2.709,36.3V190.685A4.519,4.519,0,0,0,7.223,195.2H112.405a4.519,4.519,0,0,0,4.514-4.514V40.813a4.519,4.519,0,0,0-4.514-4.514Z"/>'

function run() {
  miro.initialize({
    extensionPoints: {
      toolbar: {
        title: "title変更",
        librarySvgIcon: icon24,
        toolbarSvgIcon: icon24,
        onClick: () => {
          miro.board.ui.openLibrary('content.html', {title: 'タイトル変更'});
        },
      },
      getWidgetMenuItems: () => {
        return Promise.resolve({
          tooltip: 'Hi',
          svgIcon: icon24,
          onClick: (widgets) => {
            console.log('onClick', widgets)
          },
        })
      },
    },
  })
}

miro.onReady(run)
