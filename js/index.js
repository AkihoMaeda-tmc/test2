 const icon24 =
       '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="20px" viewBox="0 0 30 20" version="3.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 0 9.5 L 7.855469 9.5 L 7.855469 10.5 L 0 10.5 Z M 7.363281 8.5 L 10.3125 10 L 7.363281 11.5 Z M 7.363281 8.5 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 16.476562 9.5 L 24.328125 9.5 L 24.328125 10.5 L 16.476562 10.5 Z M 23.839844 8.5 L 26.789062 10 L 23.839844 11.5 Z M 23.839844 8.5 "/></g></svg>'       

function run() {
  miro.initialize({
    extensionPoints: {
      toolbar: {
        title: "物と情報の流れ図",
        librarySvgIcon: icon24,
        toolbarSvgIcon: icon24,
        onClick: () => {
          miro.board.ui.openLibrary('content.html', {title: '物と情報の流れ図'});
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
