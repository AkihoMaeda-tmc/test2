const icon24 =
//      '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><image href="https://akihomaeda-tmc.github.io/test2/img/title.svg" height="20" width="20"/></svg>'
//      '<img src="https://akihomaeda-tmc.github.io/test2/img/title.svg" width="20" height="20">'
   '<path fill="currentColor" fill-rule="nonzero" d="M59.814,187.215c-8.75,0-25.3-1.137-25.3-5.438,0-3.642,12.062-6.546,22.887-6.876l.743-.018a.917.917,0,0,1,.922.883.9.9,0,0,1-.883.923l-.729.018c-12.907.391-21.015,3.715-21.134,5.071.243,1.263,8.524,3.631,23.49,3.631s23.247-2.368,23.49-3.638c-.121-1.338-8.587-4.738-21.486-5.071-.249-.009-.489-.015-.73-.019a.9.9,0,0,1-.887-.919.922.922,0,0,1,.919-.887c.252,0,.5.01.754.02,10.985.284,23.235,3.18,23.235,6.882C85.109,186.078,68.563,187.215,59.814,187.215Z"/>'

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
