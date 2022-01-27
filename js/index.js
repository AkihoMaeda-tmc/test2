 const icon24 =
       '<svg width="122" height="80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="hidden"><defs><clipPath id="clip0"><rect x="738" y="344" width="122" height="80"/></clipPath></defs><g clip-path="url(#clip0)" transform="translate(-738 -344)"><path d="M780 351.167C780 348.866 781.865 347 784.167 347L800.833 347C803.135 347 805 348.866 805 351.167L805 416.833C805 419.134 803.135 421 800.833 421L784.167 421C781.865 421 780 419.134 780 416.833Z" stroke="#000000" stroke-width="1" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/><path d="M738 382 769.942 382 769.942 386 738 386ZM767.942 378 779.942 384 767.942 390Z"/><path d="M805 382 836.942 382 836.942 386 805 386ZM834.942 378 846.942 384 834.942 390Z"/></g></svg>'       

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
