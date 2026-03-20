var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiaGJvdG5pY2siLCJhIjoiY21teHFhemVmMzVrYTJwcTN6NXlvM25qdSJ9.-o-cnZPaq1qxtY_eYDbVAA',
    style: 'mapbox://styles/hbotnick/cmmy0y9d4000001s94aakgj3f',
    showMarkers: true,
    
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Explore Asheville',
    footer: 'Visualization by Hayes Botnick.',
   chapters: [
    {
            id: 'first-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            location: {
                center: [-82.57548, 35.59627],
                zoom: 9.38,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: 'layer-name',
                opacity: .5
                }
            ],
            onChapterExit: [
                {
                layer: 'layer-name',
                opacity: 1,
                duration: 5000
                }
            ]
        },
        {
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Asheville-Oteen Bank Building',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: './DSCF2943.png',
           // description: '',
            location: {
                center: [-82.54296, 35.56759],
                zoom: 19.41,
                pitch: 85,
                bearing: -20.02
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'layer-name',
                opacity: .5
                }
            ],
            onChapterExit: [
                {
                layer: 'layer-name',
                opacity: 1,
                duration: 5000
                }
            ]
        },
        {
            id: 'third-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Asheville Home Depot',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: './HomeDepot.png',
            location: {
                center: [-82.50635, 35.56660],
                zoom: 18.03,
                pitch: 85,
                bearing: -152.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'layer-name',
                opacity: .5
                }
            ],
            onChapterExit: [
                {
                layer: 'layer-name',
                opacity: 1,
                duration: 5000
                }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'WNC Wildlife Center',
            image: './DSCF1820.png',
            //description: '',
            location: {
                center: [-82.49418, 35.57988],
                zoom: 18.16,
                pitch: 85,
                bearing: 30.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'layer-name',
                opacity: .5
                }
            ],
            onChapterExit: [
                {
                layer: 'layer-name',
                opacity: 1,
                duration: 5000
                }
            ]
        },
         {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'French Broad River Cleanup with MountainTrue',
            image: './IMG_4231.png',
            //description: '',
            location: {
                center: [-82.60530, 35.65738],
                zoom: 18,
                pitch: 85,
                bearing: 94.63
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'layer-name',
                opacity: .5
                }
            ],
            onChapterExit: [
                {
                layer: 'layer-name',
                opacity: 1,
                duration: 5000
                }
            ]
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Fairview Christian Fellowship',
            image: './IMG_5263.JPG',
            //description: '',
            location: {
                center: [-82.41296, 35.52566],
                zoom: 18.06,
                pitch: 85,
                bearing: -12.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'layer-name',
                opacity: .5,
                }
            ],
            onChapterExit: [
                {
                layer: 'layer-name',
                opacity: 1,
                duration: 5000
                }
            ]
        },
        {
            id: 'seventh-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Post Office- Marshall, NC',
            image: './DSCF3061.png',
            //description: '',
            location: {
                center: [-82.68262, 35.79664],
                zoom: 18.75,
                pitch: 85,
                bearing: 26.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'layer-name',
                opacity: .5
                }
            ],
            onChapterExit: [
                {
                layer: 'layer-name',
                opacity: 1,
                duration: 5000
                }
            ]
        },
    ]
}
