var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiaGJvdG5pY2siLCJhIjoiY21tbnJyaXJhMDYyZjJyb2tnczVsOTM4dSJ9.W9qfSgTiWPBOlcxAQcClhg',
    style: 'mapbox://styles/hbotnick/cmmqy9l3y003m01s47kgl417y',
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
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Explore Asheville',
    footer: 'Visualization by Hayes Botnick.',
    chapters: [
    {
            id: 'first-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Scroll to see highlights around the Asheville community, and the roles they play in Helene recovery.',
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
            alignment: 'left',
            hidden: false,
            title: 'Asheville-Oteen Bank Building',
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
            alignment: 'left',
            hidden: false,
            title: 'WNC Wildlife Center',
            image: './DSCF1820.png',
            //description: '',
            location: {
                center: [-82.49418, 35.57988],
                zoom: 18.16,
                pitch: 85,
                bearing: 69.60
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
            alignment: 'left',
            hidden: false,
            title: 'French Broad River Cleanup with MountainTrue',
            image: 'IMG_4231.png',
            //description: '',
            location: {
                center: [-82.58368, 35.62560],
                zoom: 17.07,
                pitch: 85,
                bearing: -44.77
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
