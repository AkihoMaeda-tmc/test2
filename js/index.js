 const icon24 =
       '<svg width="29" height="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="hidden"><defs><clipPath id="clip0"><rect x="118" y="82" width="29" height="18"/></clipPath></defs><g clip-path="url(#clip0)" transform="translate(-118 -82)"><path d="M127 83.8334C127 83.3731 127.373 83 127.833 83L131.167 83C131.627 83 132 83.3731 132 83.8334L132 97.1666C132 97.6269 131.627 98 131.167 98L127.833 98C127.373 98 127 97.6269 127 97.1666Z" stroke="#000000" stroke-width="2" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/><path d="M118.5 90.8334 123.152 90.8334 123.151 92.1668 118.5 92.1667ZM121.818 88.8334 127.151 91.5002 121.818 94.1668Z"/><path d="M132.5 90.8334 137.152 90.8334 137.151 92.1668 132.5 92.1667ZM135.818 88.8334 141.151 91.5002 135.818 94.1668Z"/></g></svg>'       
 const icon25 =
       '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="20px" viewBox="0 0 30 20" version="1.1"><g id="surface1"><path style="fill:none;stroke-width:6;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:8;" d="M 780.001042 351.171875 C 780.001042 348.859375 781.859635 347 784.163021 347 L 800.826823 347 C 803.130208 347 805.004688 348.859375 805.004688 351.171875 L 805.004688 416.828125 C 805.004688 419.140625 803.130208 421 800.826823 421 L 784.163021 421 C 781.859635 421 780.001042 419.140625 780.001042 416.828125 Z M 780.001042 351.171875 " transform="matrix(0.245902,0,0,0.25,-181.47541,-86)"/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 0 9.5 L 7.855469 9.5 L 7.855469 10.5 L 0 10.5 Z M 7.363281 8.5 L 10.3125 10 L 7.363281 11.5 Z M 7.363281 8.5 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 16.476562 9.5 L 24.328125 9.5 L 24.328125 10.5 L 16.476562 10.5 Z M 23.839844 8.5 L 26.789062 10 L 23.839844 11.5 Z M 23.839844 8.5 "/>\</g></svg>'

function run() {
  miro.initialize({
    extensionPoints: {
      toolbar: {
        title: "物と情報の流れ図",
        librarySvgIcon: icon25,
        toolbarSvgIcon: icon24,
        onClick: () => {
//           miro.board.ui.openLibrary('content.html', {title: '物と情報の流れ図'});
         miro.board.ui.leftSidebar('content.html', {title: '物と情報の流れ図'});
        },
      },
//       getWidgetMenuItems: () => {
//         return Promise.resolve({
//           tooltip: 'Hi',
//           svgIcon: icon24,
//           onClick: (widgets) => {
//             console.log('onClick', widgets)
//           },
//         })
//       },
    },
  })
}

miro.onReady(run)
