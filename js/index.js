 const icon24 =
       '<svg width="29" height="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="hidden"><defs><clipPath id="clip0"><rect x="118" y="82" width="29" height="18"/></clipPath></defs><g clip-path="url(#clip0)" transform="translate(-118 -82)"><path d="M127 83.8334C127 83.3731 127.373 83 127.833 83L131.167 83C131.627 83 132 83.3731 132 83.8334L132 97.1666C132 97.6269 131.627 98 131.167 98L127.833 98C127.373 98 127 97.6269 127 97.1666Z" stroke="#000000" stroke-width="2" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/><path d="M118.5 90.8334 123.152 90.8334 123.151 92.1668 118.5 92.1667ZM121.818 88.8334 127.151 91.5002 121.818 94.1668Z"/><path d="M132.5 90.8334 137.152 90.8334 137.151 92.1668 132.5 92.1667ZM135.818 88.8334 141.151 91.5002 135.818 94.1668Z"/></g></svg>'       
 const icon25 =
       '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="62px" viewBox="0 0 99 62" version="1.1"><g id="surface1"><path style="fill:none;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:8;" d="M 126.999566 83.833795 C 126.999566 83.373362 127.372593 83.000252 127.832584 83.000252 L 131.166943 83.000252 C 131.626933 83.000252 131.999961 83.373362 131.999961 83.833795 L 131.999961 97.167087 C 131.999961 97.626386 131.626933 97.999496 131.166943 97.999496 L 127.832584 97.999496 C 127.372593 97.999496 126.999566 97.626386 126.999566 97.167087 Z M 126.999566 83.833795 " transform="matrix(3.413793,0,0,3.444444,-402.827586,-282.444444)"/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 1.707031 30.425781 L 17.585938 30.425781 L 17.585938 35.019531 L 1.707031 35.019531 Z M 13.035156 23.539062 L 31.238281 32.722656 L 13.035156 41.90625 Z M 13.035156 23.539062 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 49.5 30.425781 L 65.382812 30.425781 L 65.378906 35.019531 L 49.5 35.019531 Z M 60.828125 23.539062 L 79.03125 32.722656 L 60.828125 41.90625 Z M 60.828125 23.539062 "/></g></svg>'       
 
function run() {
  miro.initialize({
    extensionPoints: {
      toolbar: {
        title: "物と情報の流れ図",
        librarySvgIcon: icon25,
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
