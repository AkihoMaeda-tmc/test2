 const icon24 =
       '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="20px" viewBox="0 0 30 20" version="3.1"><g id="surface1"><path style="stroke-width:6;stroke:rgb(0%,0%,0%);fill:none;" d="M 780.001042 351.171875 C 780.001042 348.859375 781.859635 347 784.163021 347 L 800.826823 347 C 803.130208 347 805.004688 348.859375 805.004688 351.171875 L 805.004688 416.828125 C 805.004688 419.140625 803.130208 421 800.826823 421 L 784.163021 421 C 781.859635 421 780.001042 419.140625 780.001042 416.828125 Z M 780.001042 351.171875 " transform="matrix(0.245902,0,0,0.25,-181.47541,-86)"/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 0 9.5 L 7.855469 9.5 L 7.855469 10.5 L 0 10.5 Z M 7.363281 8.5 L 10.3125 10 L 7.363281 11.5 Z M 7.363281 8.5 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 16.476562 9.5 L 24.328125 9.5 L 24.328125 10.5 L 16.476562 10.5 Z M 23.839844 8.5 L 26.789062 10 L 23.839844 11.5 Z M 23.839844 8.5 "/></g></svg>'       

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
