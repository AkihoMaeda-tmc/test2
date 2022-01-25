 const icon24 =
//       document.getElementById("image_icon");
// icon24.src = "icon.png";
//      '<path fill="currentColor" fill-rule="nonzero" d="M20.156 7.762c-1.351-3.746-4.672-5.297-8.838-4.61-3.9.642-7.284 3.15-7.9 5.736-1.14 4.784-.015 7.031 2.627 8.09.61.244 1.28.412 2.002.518.277.041.549.072.844.097.138.012.576.045.659.053.109.01.198.02.291.035 1.609.263 2.664 1.334 3.146 2.715 7.24-2.435 9.4-6.453 7.17-12.634zm-18.684.662C3.18 1.256 18.297-3.284 22.038 7.084c2.806 7.78-.526 13.011-9.998 15.695-.266.076-.78.173-.759-.287.062-1.296-.47-2.626-1.762-2.837-1.009-.165-10.75.124-8.047-11.23zm9.427 4.113a6.853 6.853 0 0 0 1.787.172c.223.348.442.733.79 1.366.53.967.793 1.412 1.206 2a1 1 0 1 0 1.636-1.15c-.358-.51-.593-.908-1.09-1.812-.197-.36-.358-.649-.503-.899 1.16-.573 1.916-1.605 2.005-2.909.189-2.748-2.65-4.308-6.611-3.267-.443.117-.834.44-.886 1.408-.065 1.192-.12 2.028-.25 3.825-.129 1.808-.185 2.653-.25 3.86a1 1 0 0 0 1.997.108c.05-.913.093-1.617.17-2.702zm.144-2.026c.077-1.106.124-1.82.171-2.675 2.398-.483 3.595.257 3.521 1.332-.08 1.174-1.506 1.965-3.692 1.343z"/>'
//        '<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="width: 16px; height: 16px; opacity: 1;" xml:space="preserve"><g><path class="st0" d="M424.84,390.076c-4.183-4.724-8.615-9.83-13.23-15.197c-0.539-0.654-1.07-1.26-1.609-1.922c-0.008,0.01-0.016,0.02-0.024,0.031c-0.037-0.043-0.07-0.084-0.107-0.127c-4.947,7-10.576,13.732-16.912,20.068c-5.684,5.684-11.725,10.715-17.957,15.279c-0.68,0.478-1.316,1.047-2.006,1.51c0.008,0.008,0.016,0.014,0.024,0.019c-0.043,0.031-0.084,0.07-0.127,0.1c6.142,5.27,11.886,10.252,17.215,14.971c6.656-4.49,13.029-9.721,19.021-15.711C415.119,403.105,420.35,396.732,424.84,390.076z" style="fill: rgb(75, 75, 75);"></path><path class="st0" d="M510.875,457.922c0,0-27.715-25.012-36.846-17.023c-0.15,0.152-0.361,0.324-0.533,0.496c-4.414-4.203-14.558-14.113-29.246-29.877c-0.894-0.975-1.75-1.897-2.676-2.916c-0.006,0.008-0.014,0.016-0.019,0.023c-0.037-0.041-0.07-0.076-0.11-0.117c-4.508,6.143-9.588,12.096-15.199,17.707c-5.164,5.164-10.64,9.82-16.266,14.053c-0.453,0.326-0.879,0.713-1.334,1.029c0.006,0.006,0.01,0.01,0.018,0.016c-0.043,0.031-0.084,0.068-0.127,0.1c17.576,16.244,28.42,27.354,32.888,32.051c-0.172,0.17-0.342,0.381-0.514,0.551c-7.988,9.131,17.082,36.863,17.082,36.863c5.612,2.035,11.68,1.293,16.131-2.131c3.824-2.947,12.402-10.994,18.033-16.625c5.744-5.742,13.734-14.303,16.608-18.088C512.168,469.562,512.91,463.535,510.875,457.922z" style="fill: rgb(75, 75, 75);"></path><path class="st0" d="M393.699,353.537c-22.787-27.619-49.398-61.875-78.617-103.074C228.399,128.33,94.844,9.316,94.254,8.805c-26.592-23.131-57.104,5.324-68.611,16.832C14.115,37.164-14.324,67.654,8.809,94.246c0.512,0.59,119.533,134.133,241.674,220.812c41.201,29.215,75.461,55.824,103.08,78.611c7.801-4.945,15.314-10.898,22.276-17.859C382.801,368.848,388.754,361.336,393.699,353.537z" style="fill: rgb(75, 75, 75);"></path></g></svg>'
     '<svg version="1.2" id="_x33_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="width: 16px; height: 16px; opacity: 1;" xml:space="preserve"><path style="fill:#000000; stroke:none;" d="M0 0L0 124L189 124L189 0L0 0z"/></svg>'
       
function run() {
  miro.initialize({
    extensionPoints: {
      toolbar: {
        title: "MONOJO",
        librarySvgIcon: icon24,
        toolbarSvgIcon: icon24,
        onClick: () => {
          miro.board.ui.openLibrary('content.html', {title: 'MONOJO'});
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
