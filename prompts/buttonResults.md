Help modify [text](../giraffe_docs/new_docs.md) so that its up to date. We only care about the SDK functions and what they do, we dont want to document any non-sdk functions. 

Below are the buttons in the app, and what they return 

"Get Current Project"
```
{
  "type": "Feature",
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          -97.71923325946963,
          30.239607853877907
        ],
        [
          -97.7185761182769,
          30.24065581646062
        ],
        [
          -97.72010229527584,
          30.24137878249569
        ],
        [
          -97.72079966960861,
          30.240276952099858
        ],
        [
          -97.71977908768714,
          30.239790914286484
        ],
        [
          -97.71926678716598,
          30.239552239995316
        ],
        [
          -97.71923325946963,
          30.239607853877907
        ]
      ]
    ]
  },
  "properties": {
    "name": "test-ian",
    "id": "58700",
    "units": "feet",
    "Sale Price": 0,
    "Date of Contact": "2025-07-23T17:47:06.725Z",
    "Price": 0,
    "Price per Sq Ft": 0,
    "Lot Size": 0,
    "qoz": "No",
    "City": "San Antonio",
    "County": "Bexar",
    "Wetlands Coverage?": false,
    "Flood Risk?": false,
    "Number of Units": 0,
    "Hard Costs": 0,
    "Project NOI": 0,
    "Return on Costs": 0,
    "Comments": 0,
    "Project Type": 0,
    "Site Plan": "",
    "services provided": "",
    "Total Square Footage": 0,
    "Average Rent": 0,
    "% Leased": 0,
    "Floor Plan": "",
    "Status": "",
    "Assigned To": "Business Development Mgr",
    "Pursuit": true,
    "Last Sold Value": "",
    "Land Use": "",
    "Last Sold Date": "2025-07-23T17:47:06.725Z",
    "org_id": 1,
    "grid": {
      "origin": [
        -97.7201022952795,
        30.2413787825776
      ],
      "distance": 213.41231605861395,
      "bearing": 1.0676386007486494
    },
    "created_at": "2025-07-23T17:47:13.318284+00:00",
    "updated_at": "2025-09-10T21:42:04.359395+00:00",
    "org_name": "Giraffe Team",
    "shared_with_me": true,
    "shared_with_my_team": false,
    "shared_with_my_workspace": false
  },
  "_permissions": {
    "userAccess": [
      {
        "id": 115675,
        "user_email": "ian@giraffe.build",
        "project": 58700,
        "access_level": "admin"
      }
    ],
    "teamAccess": [],
    "orgAccess": [],
    "orgAdmin": true,
    "fullPermissions": false,
    "maxPermission": "admin"
  },
  "_sharingDetails": {
    "user": [],
    "team": [],
    "org": []
  },
  "_isSpace": false
}
```

"Get All Projects":
```
{
  "type": "FeatureCollection",
  "features": [
    {
      "properties": {
        "id": "1404",
        "name": "St Leonards",
        "color": "grey",
        "units": "meters",
        "country": "Australia",
        "copiedFrom": "red",
        "fillOpacity": 0,
        "defaultBoundary": false,
        "org_id": 1,
        "Price": 10000000,
        "Product Type": "Multi Family",
        "Quality Opportunity Zone?": "Yes",
        "Sale Price": 40000,
        "Date of Contact": "2025-09-04",
        "Project Type (CBT)": "Large Scale Mixed Use",
        "Status": "Sold",
        "created_at": "2020-05-19T05:09:41.481314+00:00",
        "updated_at": "2025-09-23T19:44:50.148224+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              151.19677172153314,
              -33.8225205041621
            ],
            [
              151.19655439871664,
              -33.822518674461925
            ],
            [
              151.19065343263395,
              -33.82350317451793
            ],
            [
              151.1975875430499,
              -33.831161159453764
            ],
            [
              151.20303991341865,
              -33.830405217824705
            ],
            [
              151.1969865476651,
              -33.82253776080633
            ],
            [
              151.19697233526583,
              -33.822522320645696
            ],
            [
              151.19677172153314,
              -33.8225205041621
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 5873,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 1404
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "2541",
        "name": "St Leonards South Precinct",
        "color": "grey",
        "units": "meters",
        "country": "Australia",
        "copiedFrom": "red",
        "fillOpacity": 0,
        "defaultBoundary": false,
        "org_id": 1,
        "Price": 10000000,
        "Product Type": null,
        "Quality Opportunity Zone?": "Yes",
        "Date of Contact": "2025-09-16",
        "created_at": "2020-09-09T22:34:24.493926+00:00",
        "updated_at": "2025-09-04T17:54:19.967347+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              151.19117593090385,
              -33.82462664749419
            ],
            [
              151.1906219056487,
              -33.827473190051656
            ],
            [
              151.19175893544636,
              -33.827618505419984
            ],
            [
              151.19275019219216,
              -33.82795757365379
            ],
            [
              151.1931437794305,
              -33.82806050481569
            ],
            [
              151.19413503617633,
              -33.82760639581556
            ],
            [
              151.19495865391545,
              -33.82760639581556
            ],
            [
              151.19500967448175,
              -33.82725521653492
            ],
            [
              151.194710839729,
              -33.82686770668912
            ],
            [
              151.1945213347618,
              -33.826419646241
            ],
            [
              151.19445573688964,
              -33.82614112099508
            ],
            [
              151.19425894326957,
              -33.82593525392598
            ],
            [
              151.19426623192243,
              -33.825626452392946
            ],
            [
              151.19445573688964,
              -33.82499673600632
            ],
            [
              151.19424436596572,
              -33.82440334516731
            ],
            [
              151.19340617092269,
              -33.8246818760739
            ],
            [
              151.1927210375826,
              -33.82493618610978
            ],
            [
              151.1924732233961,
              -33.824966461063404
            ],
            [
              151.19229829573462,
              -33.8249119661387
            ],
            [
              151.19241491417498,
              -33.824167198688336
            ],
            [
              151.19117593090385,
              -33.82462664749419
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 5872,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 2541
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "5124",
        "Gate": "",
        "name": "cell phone ",
        "units": "meters",
        "Pursuit": true,
        "Land Use": "",
        "Assigned To": "Business Development Mgr",
        "Last Sold Date": "2022-12-14T05:00:00.000Z",
        "Last Sold Value": "",
        "defaultBoundary": true,
        "org_id": 1,
        "Price": 10000000,
        "Quality Opportunity Zone?": "Yes",
        "created_at": "2021-08-06T03:58:31.946378+00:00",
        "updated_at": "2025-08-20T17:14:47.289171+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              151.22498498743872,
              -33.7000298232291
            ],
            [
              151.20442159349935,
              -33.699688547713045
            ],
            [
              151.20381037198538,
              -33.72528199610118
            ],
            [
              151.22437986277615,
              -33.7256233713943
            ],
            [
              151.22498498743872,
              -33.7000298232291
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4307,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 5124
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "5462",
        "name": "175-177 Cleveland Street",
        "units": "meters",
        "country": "United States",
        "siteArea": 1000,
        "mapboxStyle": "mapbox://styles/mapbox/streets-v11",
        "defaultBoundary": false,
        "created_at": "2021-09-08T22:58:18.547076+00:00",
        "updated_at": "2022-04-19T20:35:05.325779+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              151.20022367052405,
              -33.888954269496146
            ],
            [
              151.20012647030626,
              -33.889422578219325
            ],
            [
              151.20016380679556,
              -33.88942827515267
            ],
            [
              151.20051895858205,
              -33.88948195597749
            ],
            [
              151.2006109434421,
              -33.88902878664364
            ],
            [
              151.2005901628081,
              -33.88899762005652
            ],
            [
              151.20055014223138,
              -33.8889927177537
            ],
            [
              151.200508122177,
              -33.88898746348856
            ],
            [
              151.20042588923582,
              -33.88897674190568
            ],
            [
              151.20042887846566,
              -33.88896307514134
            ],
            [
              151.20026890831846,
              -33.888938066863076
            ],
            [
              151.20022367052405,
              -33.888954269496146
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 796,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 5462
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "5632",
        "name": "GLTF Demonstration",
        "color": "#f07e7e",
        "units": "meters",
        "country": "United States",
        "description": "asdfasdfasdfasdfasdfasdfasdfasdf",
        "defaultBoundary": false,
        "org_id": 1,
        "Product Type": "Multi Family",
        "created_at": "2021-09-29T04:59:54.672089+00:00",
        "updated_at": "2025-08-20T17:14:00.162370+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              151.00916193798588,
              -33.8038712843195
            ],
            [
              151.00701780132601,
              -33.80367764206943
            ],
            [
              151.00662804108708,
              -33.80607425534209
            ],
            [
              151.00864067328368,
              -33.806332985630576
            ],
            [
              151.00916193798588,
              -33.8038712843195
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 840,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 5632
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "5682",
        "name": "Giraffe Templates",
        "units": "meters",
        "Status": "Prospect",
        "defaultBoundary": false,
        "org_id": 1,
        "Product Type": "Walk Up",
        "created_at": "2021-10-07T03:02:21.275606+00:00",
        "updated_at": "2025-08-27T09:53:27.910067+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              151.19871767536358,
              -33.884211115134576
            ],
            [
              151.19868903174654,
              -33.885997258858545
            ],
            [
              151.20188684656318,
              -33.88590377908665
            ],
            [
              151.20148958750514,
              -33.88432188675508
            ],
            [
              151.19871767536358,
              -33.884211115134576
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 807,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 5682
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6274",
        "name": "Virgina Template",
        "units": "feet",
        "defaultBoundary": false,
        "org_id": 1,
        "Product Type": "Walk Up",
        "created_at": "2021-12-22T16:43:13.558289+00:00",
        "updated_at": "2025-08-27T09:53:27.927674+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -77.94814365954466,
              38.96853839110602
            ],
            [
              -77.77136443597922,
              38.898933647242075
            ],
            [
              -77.6524203915872,
              39.02451209183201
            ],
            [
              -77.86848388506974,
              39.08467678001168
            ],
            [
              -77.94814365954466,
              38.96853839110602
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4749,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6274
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6275",
        "name": "Maryland Template",
        "units": "feet",
        "defaultBoundary": false,
        "org_id": 1,
        "Product Type": "Walk Up",
        "created_at": "2021-12-22T16:45:10.453137+00:00",
        "updated_at": "2025-08-27T09:53:27.943898+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -76.63492550255341,
              39.31652936240894
            ],
            [
              -76.64019474011045,
              39.30554128053234
            ],
            [
              -76.61088129405572,
              39.30313929286794
            ],
            [
              -76.57008323479953,
              39.33165827922417
            ],
            [
              -76.63492550255341,
              39.31652936240894
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4748,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6275
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6277",
        "name": "North Carolina Template",
        "units": "feet",
        "defaultBoundary": false,
        "org_id": 1,
        "Product Type": null,
        "created_at": "2021-12-22T18:28:28.770778+00:00",
        "updated_at": "2025-08-27T09:22:00.923205+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -79.03059470722174,
              35.543926413482524
            ],
            [
              -78.88407064552966,
              35.22475742887467
            ],
            [
              -77.96111570930829,
              35.51771305342366
            ],
            [
              -79.03059470722174,
              35.543926413482524
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4750,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6277
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6331",
        "name": "LA TEMPLATES",
        "units": "feet",
        "defaultBoundary": false,
        "org_id": 1,
        "Product Type": null,
        "created_at": "2022-01-10T22:00:15.514352+00:00",
        "updated_at": "2025-08-27T09:22:00.695350+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -118.24855038929826,
              34.05389186254334
            ],
            [
              -118.24809201948273,
              34.053546066156315
            ],
            [
              -118.2477247610569,
              34.053979149209766
            ],
            [
              -118.24824361260849,
              34.05426740131101
            ],
            [
              -118.24855038929826,
              34.05389186254334
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4758,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6331
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6414",
        "name": "Chicago Zoning Template",
        "units": "feet",
        "defaultBoundary": false,
        "org_id": 1,
        "Product Type": null,
        "created_at": "2022-01-21T15:40:11.626890+00:00",
        "updated_at": "2025-08-27T09:22:00.726990+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -87.62744983506562,
              41.88027606908274
            ],
            [
              -87.62612027913543,
              41.87405457901464
            ],
            [
              -87.61845793538062,
              41.87708218962007
            ],
            [
              -87.61902304008382,
              41.8792704244178
            ],
            [
              -87.62744983506562,
              41.88027606908274
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4757,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6414
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": [
          {
            "id": 91,
            "org": 1,
            "project": 6414,
            "as_template": false
          }
        ]
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6433",
        "name": "Dallas Zoning Template",
        "units": "feet",
        "org_id": 1,
        "mapboxStyle": "mapbox://styles/mapbox/streets-v12",
        "Product Type": null,
        "defaultBoundary": false,
        "created_at": "2022-01-25T17:37:22.607749+00:00",
        "updated_at": "2025-08-27T09:22:00.968740+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -96.8081275809661,
              32.78007264043285
            ],
            [
              -96.80686330437297,
              32.77569959075659
            ],
            [
              -96.7927438264859,
              32.77791043225932
            ],
            [
              -96.79799611437697,
              32.78259016101798
            ],
            [
              -96.8081275809661,
              32.78007264043285
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4746,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6433
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6435",
        "name": "Atlanta Zoning Template",
        "units": "feet",
        "org_id": 1,
        "mapboxStyle": "mapbox://styles/mapbox/streets-v12",
        "defaultBoundary": false,
        "Product Type": null,
        "created_at": "2022-01-25T19:17:47.290958+00:00",
        "updated_at": "2025-08-27T09:22:00.719035+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -84.39587562297777,
              33.74614379664209
            ],
            [
              -84.38970641011359,
              33.74540002868345
            ],
            [
              -84.38331055805997,
              33.7501436021123
            ],
            [
              -84.39185554274499,
              33.75648525246393
            ],
            [
              -84.39599123239438,
              33.752291594720504
            ],
            [
              -84.39800478623408,
              33.746020147496466
            ],
            [
              -84.39587562297777,
              33.74614379664209
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4745,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6435
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6436",
        "name": "Seattle Zoning Template",
        "units": "feet",
        "defaultBoundary": false,
        "created_at": "2022-01-25T19:20:49.486856+00:00",
        "updated_at": "2022-01-25T19:20:54.147910+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.3450514847154,
              47.609787604466106
            ],
            [
              -122.33653069113797,
              47.60189508348037
            ],
            [
              -122.32517131164752,
              47.60174890989745
            ],
            [
              -122.33134052632192,
              47.60842447404178
            ],
            [
              -122.33706831000052,
              47.61403432527217
            ],
            [
              -122.3450514847154,
              47.609787604466106
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4755,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6436
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6437",
        "name": "San Antonio Zoning Template",
        "units": "feet",
        "defaultBoundary": false,
        "created_at": "2022-01-25T19:23:19.314490+00:00",
        "updated_at": "2022-01-25T19:23:24.288018+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -98.4978193322697,
              29.42740715009903
            ],
            [
              -98.4990271166386,
              29.421127817424818
            ],
            [
              -98.49640874116142,
              29.420007279473893
            ],
            [
              -98.49464693287854,
              29.423605342832403
            ],
            [
              -98.49443551441479,
              29.427499077621093
            ],
            [
              -98.4978193322697,
              29.42740715009903
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4754,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6437
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6441",
        "name": "New York City Zoning Template",
        "units": "feet",
        "defaultBoundary": false,
        "created_at": "2022-01-25T22:04:32.281715+00:00",
        "updated_at": "2022-01-25T22:04:36.133499+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -74.00665691363528,
              40.732260972662175
            ],
            [
              -74.00792301054868,
              40.72406765390531
            ],
            [
              -74.00468434159102,
              40.72343524337805
            ],
            [
              -73.99946478794725,
              40.734059461656926
            ],
            [
              -74.00287769792337,
              40.73948761039344
            ],
            [
              -74.00599068885005,
              40.736443964211134
            ],
            [
              -74.00665691363528,
              40.732260972662175
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4753,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6441
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6442",
        "name": "Houston Zoning Template",
        "units": "feet",
        "defaultBoundary": false,
        "created_at": "2022-01-25T22:06:48.229705+00:00",
        "updated_at": "2022-01-25T22:06:52.012512+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -95.37617595281517,
              29.752593037637393
            ],
            [
              -95.36845634844558,
              29.748106034493432
            ],
            [
              -95.35858815140658,
              29.759742048883965
            ],
            [
              -95.3665662080016,
              29.76477673840759
            ],
            [
              -95.37617595281517,
              29.752593037637393
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4752,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6442
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6443",
        "name": "Orlando Zoning Template",
        "units": "feet",
        "Status": "Offer Made",
        "org_id": 1,
        "Garage Type": "Private",
        "mapboxStyle": "mapbox://styles/mapbox/streets-v12",
        "defaultBoundary": false,
        "created_at": "2022-01-25T22:15:53.430103+00:00",
        "updated_at": "2024-07-11T18:17:21.129346+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -81.38193041213654,
              28.54753165321752
            ],
            [
              -81.3822864622007,
              28.5362743905724
            ],
            [
              -81.37573535055678,
              28.536856965699315
            ],
            [
              -81.3759821376532,
              28.547629228348328
            ],
            [
              -81.38193041213654,
              28.54753165321752
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4751,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6443
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": [
          {
            "id": 103,
            "org": 1,
            "project": 6443,
            "as_template": true
          }
        ]
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6444",
        "name": "Charlotte Zoning Template",
        "units": "feet",
        "defaultBoundary": false,
        "created_at": "2022-01-25T22:20:38.512531+00:00",
        "updated_at": "2022-01-25T22:20:43.349596+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -80.84631131033903,
              35.22657202721774
            ],
            [
              -80.84041261369254,
              35.22131534175648
            ],
            [
              -80.83483062885166,
              35.22519040457969
            ],
            [
              -80.8407305751541,
              35.230542359305616
            ],
            [
              -80.84631131033903,
              35.22657202721774
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4769,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6444
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": [
          {
            "id": 89,
            "org": 1,
            "project": 6444,
            "as_template": true
          }
        ]
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6450",
        "name": "Frisco Zoning Template",
        "units": "feet",
        "defaultBoundary": false,
        "created_at": "2022-01-26T16:42:18.933055+00:00",
        "updated_at": "2022-01-26T16:42:23.851037+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -96.82555170439521,
              33.15386301207522
            ],
            [
              -96.82739478557231,
              33.14712831367619
            ],
            [
              -96.82063161481311,
              33.1458205453053
            ],
            [
              -96.82080342746545,
              33.153065336928904
            ],
            [
              -96.82555170439521,
              33.15386301207522
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4768,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6450
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6453",
        "name": "Indianapolis Zoning Template",
        "units": "feet",
        "defaultBoundary": false,
        "created_at": "2022-01-26T22:07:47.939705+00:00",
        "updated_at": "2022-01-27T14:29:47.442214+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -86.16170469767764,
              39.77138515915979
            ],
            [
              -86.16192386468862,
              39.765603617248246
            ],
            [
              -86.15445044984222,
              39.765621720968255
            ],
            [
              -86.15423243263189,
              39.77135548393622
            ],
            [
              -86.16170469767764,
              39.77138515915979
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4767,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6453
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6455",
        "name": "Fort Worth Zoning Template",
        "units": "feet",
        "defaultBoundary": false,
        "created_at": "2022-01-26T22:20:14.182845+00:00",
        "updated_at": "2022-01-27T14:29:48.188503+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -97.34193224275876,
              32.75779502585641
            ],
            [
              -97.33761899200105,
              32.75202383337235
            ],
            [
              -97.33033868196127,
              32.75533812918073
            ],
            [
              -97.33356638341343,
              32.75981280906787
            ],
            [
              -97.34193224275876,
              32.75779502585641
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4766,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6455
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6473",
        "name": "Denver Zoning Template",
        "units": "feet",
        "org_id": 1,
        "mapboxStyle": "mapbox://styles/mapbox/streets-v12",
        "defaultBoundary": false,
        "Status": "Working",
        "created_at": "2022-01-28T18:53:57.070244+00:00",
        "updated_at": "2025-07-15T18:07:43.456976+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.94106292729043,
              39.74386549592751
            ],
            [
              -104.94101464608994,
              39.74390261978189
            ],
            [
              -104.94090736054446,
              39.743980987922654
            ],
            [
              -104.94079470612455,
              39.74406760865435
            ],
            [
              -104.94078934186203,
              39.744768806923936
            ],
            [
              -104.94078934202673,
              39.74510289433266
            ],
            [
              -104.94077861304578,
              39.74725597933695
            ],
            [
              -104.94077861310073,
              39.750972084114075
            ],
            [
              -104.94093435289726,
              39.750980341965885
            ],
            [
              -104.94229137847834,
              39.751038073344574
            ],
            [
              -104.94230758257372,
              39.751042226376605
            ],
            [
              -104.94285465693268,
              39.751058695651764
            ],
            [
              -104.94318722387685,
              39.751066943625894
            ],
            [
              -104.94371832891152,
              39.7510710682155
            ],
            [
              -104.94899156614886,
              39.751083441167395
            ],
            [
              -104.95000493119696,
              39.751087565447364
            ],
            [
              -104.95509087848902,
              39.7510875654816
            ],
            [
              -104.95552539723676,
              39.75106281955501
            ],
            [
              -104.95926439808801,
              39.75065451046623
            ],
            [
              -104.95944678770937,
              39.75065038583671
            ],
            [
              -104.959441423532,
              39.750605017950335
            ],
            [
              -104.95962381358424,
              39.75060501788579
            ],
            [
              -104.95962381365938,
              39.74832008856676
            ],
            [
              -104.95944142344779,
              39.748320088631814
            ],
            [
              -104.9594414233501,
              39.74810149031527
            ],
            [
              -104.95962917802811,
              39.74810149025717
            ],
            [
              -104.95962917803233,
              39.74745393990474
            ],
            [
              -104.9596345425008,
              39.74698786505063
            ],
            [
              -104.95963454245873,
              39.74491730071467
            ],
            [
              -104.95966672897148,
              39.74488430314246
            ],
            [
              -104.95963454247202,
              39.74486780434861
            ],
            [
              -104.95966672897696,
              39.74466569307706
            ],
            [
              -104.95967209334135,
              39.743910868196814
            ],
            [
              -104.95948434396995,
              39.74391086823477
            ],
            [
              -104.95930194470193,
              39.74391499293034
            ],
            [
              -104.95703279957561,
              39.74391911774255
            ],
            [
              -104.95688795993716,
              39.74391499298264
            ],
            [
              -104.94997858097382,
              39.74390674342949
            ],
            [
              -104.94107365776895,
              39.74386549585546
            ],
            [
              -104.94106292729043,
              39.74386549592751
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4765,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6473
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": [
          {
            "id": 99,
            "org": 1,
            "project": 6473,
            "as_template": true
          }
        ]
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6477",
        "name": "Austin Zoning Template",
        "units": "feet",
        "org_id": 1,
        "country": "United States",
        "mapboxStyle": "mapbox://styles/mapbox/streets-v12",
        "defaultBoundary": false,
        "Status": "Working",
        "created_at": "2022-01-28T22:56:16.587944+00:00",
        "updated_at": "2025-07-15T18:07:44.014727+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -97.74202845614006,
              30.277748241542085
            ],
            [
              -97.74348632898094,
              30.27346278732763
            ],
            [
              -97.73866864382194,
              30.272075403309657
            ],
            [
              -97.73703780533565,
              30.27629388070001
            ],
            [
              -97.74202845614006,
              30.277748241542085
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4763,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 6477
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "6687",
        "name": "Houston Demo Layers",
        "units": "feet",
        "defaultBoundary": false,
        "org_id": 1,
        "Status": "Working",
        "created_at": "2022-02-24T17:01:00.702369+00:00",
        "updated_at": "2025-07-15T18:07:44.055888+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -95.38001340701197,
              29.759573200874087
            ],
            [
              -95.36747486482909,
              29.737544334651233
            ],
            [
              -95.3484741430254,
              29.75584338152929
            ],
            [
              -95.35800018324382,
              29.773712577964318
            ],
            [
              -95.38001340701197,
              29.759573200874087
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 897,
            "org": 1856,
            "org_name": "trammellcrow.com",
            "access_level": "view",
            "project": 6687
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "11843",
        "name": "Layers to Add",
        "units": "feet",
        "defaultBoundary": false,
        "created_at": "2022-06-30T17:48:27.759606+00:00",
        "updated_at": "2022-06-30T17:48:27.759657+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.17790281778299,
              39.97401511985541
            ],
            [
              -75.17777192995753,
              39.97261084891463
            ],
            [
              -75.17641942243353,
              39.97244367187889
            ],
            [
              -75.16743179178502,
              39.97361390253215
            ],
            [
              -75.16839163583691,
              39.97515188948566
            ],
            [
              -75.17790281778299,
              39.97401511985541
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4357,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 11843
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "15816",
        "crs": "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs",
        "name": "Nashville template",
        "color": "grey",
        "units": "feet",
        "org_id": 1,
        "siteArea": 1000,
        "mapboxStyle": "mapbox://styles/mapbox/streets-v12",
        "defaultBoundary": false,
        "created_at": "2022-08-12T19:49:31.271151+00:00",
        "updated_at": "2024-07-11T18:28:00.192556+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -86.77116081117092,
              36.15894422109868
            ],
            [
              -86.77080877120683,
              36.159087148619896
            ],
            [
              -86.77075579767711,
              36.15900106728375
            ],
            [
              -86.77068002573039,
              36.159050874963015
            ],
            [
              -86.77060827436124,
              36.15910285029575
            ],
            [
              -86.77053786936267,
              36.159158069952305
            ],
            [
              -86.77040710970473,
              36.15927392926742
            ],
            [
              -86.77029177479646,
              36.1593989905469
            ],
            [
              -86.77023813160646,
              36.159463956112326
            ],
            [
              -86.77014425430195,
              36.15959984428898
            ],
            [
              -86.7700657994193,
              36.159743854064914
            ],
            [
              -86.77085369823003,
              36.160174255623396
            ],
            [
              -86.77038498134448,
              36.16037023688544
            ],
            [
              -86.77029781056574,
              36.160403802162236
            ],
            [
              -86.77074305811088,
              36.16064417625112
            ],
            [
              -86.77215389895605,
              36.1612970784333
            ],
            [
              -86.77259981634828,
              36.16167008596196
            ],
            [
              -86.77274130265286,
              36.16156993190183
            ],
            [
              -86.77301622925371,
              36.16135608847495
            ],
            [
              -86.77344068884332,
              36.161172020366195
            ],
            [
              -86.77203454078517,
              36.158944221155494
            ],
            [
              -86.77116081117092,
              36.15894422109868
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4355,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 15816
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "15876",
        "Gate": "Gate 2",
        "name": "health business demo - aurecon",
        "units": "meters",
        "Pursuit": true,
        "Assigned To": "Business Development Mgr",
        "defaultBoundary": false,
        "created_at": "2022-08-17T05:04:29.361876+00:00",
        "updated_at": "2022-08-29T05:06:10.839745+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              151.23170697750936,
              -33.74957639305313
            ],
            [
              151.23122586719967,
              -33.75175835027167
            ],
            [
              151.2344536800154,
              -33.752216554242054
            ],
            [
              151.23475984110684,
              -33.74996914945566
            ],
            [
              151.23170697750936,
              -33.74957639305313
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4349,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 15876
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "16058",
        "Gate": "",
        "grid": {
          "distance": 100
        },
        "name": "ultimate feaso",
        "units": "meters",
        "Status": "Working",
        "org_id": 1,
        "Pursuit": "false",
        "Assigned To": "Business Development Mgr",
        "defaultBoundary": false,
        "created_at": "2022-08-29T05:29:09.267072+00:00",
        "updated_at": "2024-12-16T19:45:23.292904+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              151.78304338793941,
              -32.88536146146384
            ],
            [
              151.78075787125823,
              -32.885231210683834
            ],
            [
              151.78008422813278,
              -32.885149420150604
            ],
            [
              151.77962230332665,
              -32.887015277519595
            ],
            [
              151.7825198086925,
              -32.88752592826702
            ],
            [
              151.78304338793941,
              -32.88536146146384
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4348,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 16058
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "18754",
        "name": "USA Template",
        "units": "feet",
        "Status": "",
        "org_id": 1,
        "Pursuit": false,
        "Land Use": "",
        "Assigned To": "Business Development Mgr",
        "description": "A template for USA based projects. Includes national data layers, a for-rent analytics proforma, and a template report.",
        "mapboxStyle": "mapbox://styles/giraffetechnology/cm3nwj4vd00f401sq43ha04r4",
        "Last Sold Date": "",
        "Last Sold Value": "",
        "acronymSaleable": "NRA",
        "defaultBoundary": false,
        "acronymFloorSpaceRatio": "FAR",
        "created_at": "2023-01-16T16:49:43.821262+00:00",
        "updated_at": "2025-04-28T16:38:26.022552+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -77.03636482329962,
              38.8927186035367
            ],
            [
              -77.03621864319898,
              38.89273732620601
            ],
            [
              -77.03621864321784,
              38.89273321687733
            ],
            [
              -77.0360640935349,
              38.892757120692
            ],
            [
              -77.03604698179466,
              38.892759312250085
            ],
            [
              -77.03604698179147,
              38.89275976733082
            ],
            [
              -77.03600943060688,
              38.89276557520889
            ],
            [
              -77.03567415449594,
              38.89285847433455
            ],
            [
              -77.03537374746558,
              38.89299312551693
            ],
            [
              -77.03511759672597,
              38.893164309761644
            ],
            [
              -77.03500896678833,
              38.893261384069106
            ],
            [
              -77.03491643057727,
              38.89336576438239
            ],
            [
              -77.03483864683704,
              38.893475363221725
            ],
            [
              -77.03477695561132,
              38.893589138238845
            ],
            [
              -77.03473404061958,
              38.893706042869226
            ],
            [
              -77.03470721843257,
              38.89382607961334
            ],
            [
              -77.03469783076949,
              38.89394716010474
            ],
            [
              -77.03470721841317,
              38.894068240349554
            ],
            [
              -77.03473404058548,
              38.89418827630336
            ],
            [
              -77.03477695583094,
              38.894305180526274
            ],
            [
              -77.03483864681414,
              38.894419997509445
            ],
            [
              -77.03491643049522,
              38.89452959467832
            ],
            [
              -77.03500896742833,
              38.8946329300362
            ],
            [
              -77.03511759625835,
              38.894730001492924
            ],
            [
              -77.03537374710984,
              38.89490118166272
            ],
            [
              -77.03567415496713,
              38.89503582940866
            ],
            [
              -77.03600943069618,
              38.895128725425266
            ],
            [
              -77.03604698177597,
              38.89513453318352
            ],
            [
              -77.03604698177278,
              38.89513498826408
            ],
            [
              -77.03606409635886,
              38.89513718014516
            ],
            [
              -77.03621864314248,
              38.89516108258864
            ],
            [
              -77.03621864316133,
              38.895156973712076
            ],
            [
              -77.0363648235163,
              38.89517569547852
            ],
            [
              -77.03654587245776,
              38.895181958111
            ],
            [
              -77.03690663002368,
              38.89515795115373
            ],
            [
              -77.03725263448756,
              38.89508801831931
            ],
            [
              -77.03757181781103,
              38.8949732025117
            ],
            [
              -77.03771799780569,
              38.89490118193296
            ],
            [
              -77.03785210831519,
              38.89481976702673
            ],
            [
              -77.03797414888773,
              38.89473000167306
            ],
            [
              -77.03808143761597,
              38.89463292942329
            ],
            [
              -77.03817531488137,
              38.89452959476839
            ],
            [
              -77.03825175742729,
              38.89441999761914
            ],
            [
              -77.03831344841265,
              38.89430518063665
            ],
            [
              -77.03835770490639,
              38.89418827630335
            ],
            [
              -77.03838452684816,
              38.89406824052971
            ],
            [
              -77.03839257348083,
              38.89394716003587
            ],
            [
              -77.03838452682876,
              38.89382607961334
            ],
            [
              -77.03835770487228,
              38.893706043139446
            ],
            [
              -77.03831344864574,
              38.893589137988926
            ],
            [
              -77.03825175742215,
              38.89347536306117
            ],
            [
              -77.03817531456878,
              38.893365764202215
            ],
            [
              -77.03808143747487,
              38.893261383906605
            ],
            [
              -77.03797414934223,
              38.893164310302105
            ],
            [
              -77.03785210827587,
              38.893074542556455
            ],
            [
              -77.03771799779575,
              38.89299312551693
            ],
            [
              -77.03757181848741,
              38.89292110325165
            ],
            [
              -77.0374162493138,
              38.892858474164406
            ],
            [
              -77.03725263482166,
              38.89280732759968
            ],
            [
              -77.03708231419338,
              38.89276557502873
            ],
            [
              -77.03690662953014,
              38.892736348386244
            ],
            [
              -77.03672692173119,
              38.8927186035367
            ],
            [
              -77.0365458726883,
              38.892713384481056
            ],
            [
              -77.03636482329962,
              38.8927186035367
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4762,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 18754
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": [
          {
            "id": 268,
            "org": 1,
            "project": 18754,
            "as_template": true
          }
        ]
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "19000",
        "name": "Melb Exhib",
        "units": "meters",
        "Status": "",
        "Pursuit": true,
        "Land Use": "",
        "Assigned To": "Business Development Mgr",
        "Last Sold Date": "2022-12-14T05:00:00.000Z",
        "Last Sold Value": "",
        "defaultBoundary": true,
        "created_at": "2023-01-25T01:22:04.787655+00:00",
        "updated_at": "2023-02-27T11:14:54.869229+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              144.97188301431623,
              -37.80422823746921
            ],
            [
              144.97184435621642,
              -37.80422387233999
            ],
            [
              144.97185525562983,
              -37.804152826841445
            ],
            [
              144.9718248180438,
              -37.80414969821751
            ],
            [
              144.97182748640304,
              -37.80413281178869
            ],
            [
              144.97137698475905,
              -37.80408620408959
            ],
            [
              144.97137429233766,
              -37.804103232409446
            ],
            [
              144.97134366141367,
              -37.80410008491966
            ],
            [
              144.97133262165295,
              -37.80416882625288
            ],
            [
              144.97129582187742,
              -37.80416571050205
            ],
            [
              144.97125327256128,
              -37.80441683071681
            ],
            [
              144.97107059469695,
              -37.80439780439197
            ],
            [
              144.97087445760616,
              -37.80437691578236
            ],
            [
              144.97088792344118,
              -37.80429498499733
            ],
            [
              144.97054988870943,
              -37.80426002632796
            ],
            [
              144.97052191240633,
              -37.80443245107581
            ],
            [
              144.97047402816264,
              -37.80442749342363
            ],
            [
              144.97045101160762,
              -37.804563819519366
            ],
            [
              144.97041878538028,
              -37.80474416036812
            ],
            [
              144.9703989051133,
              -37.80486596463075
            ],
            [
              144.97045332118037,
              -37.80487201303055
            ],
            [
              144.9704237586586,
              -37.80503084698869
            ],
            [
              144.97074338618435,
              -37.80506693620395
            ],
            [
              144.970756910777,
              -37.80498999334343
            ],
            [
              144.9711753321483,
              -37.805034758558826
            ],
            [
              144.97116079535428,
              -37.80511621247722
            ],
            [
              144.97169574944047,
              -37.80517924806849
            ],
            [
              144.97170666061078,
              -37.80509412436241
            ],
            [
              144.97212102690165,
              -37.80513786441692
            ],
            [
              144.97210888701116,
              -37.805213529061525
            ],
            [
              144.9724282395228,
              -37.80524598121035
            ],
            [
              144.97244505733823,
              -37.805139613317586
            ],
            [
              144.97245417479724,
              -37.805084053490226
            ],
            [
              144.97249696695286,
              -37.80508856310729
            ],
            [
              144.9725161463821,
              -37.80496366360594
            ],
            [
              144.97254687255693,
              -37.80477997206024
            ],
            [
              144.97257058696547,
              -37.804642634500325
            ],
            [
              144.97253450830254,
              -37.804639239927496
            ],
            [
              144.97256345281434,
              -37.80446872924775
            ],
            [
              144.97223448979085,
              -37.80443495997849
            ],
            [
              144.9722210898029,
              -37.804516488906806
            ],
            [
              144.97203493742026,
              -37.80449727658443
            ],
            [
              144.9718416172529,
              -37.80447727028174
            ],
            [
              144.97188301431623,
              -37.80422823746921
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4917,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 19000
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "21223",
        "name": "Philadelphia Zoning Template",
        "units": "feet",
        "Status": "",
        "Pursuit": false,
        "Land Use": "",
        "Assigned To": "Business Development Mgr",
        "Last Sold Date": "2022-12-14T05:00:00.000Z",
        "Last Sold Value": "",
        "defaultBoundary": false,
        "services provided": "",
        "created_at": "2023-04-11T21:37:47.081374+00:00",
        "updated_at": "2023-04-11T21:37:47.081398+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.164696586629,
              39.95349375669116
            ],
            [
              -75.16520084207242,
              39.95202236776092
            ],
            [
              -75.16292632894896,
              39.95162758870623
            ],
            [
              -75.1624864465034,
              39.95318123033766
            ],
            [
              -75.164696586629,
              39.95349375669116
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4761,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 21223
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": [
          {
            "id": 210,
            "org": 1,
            "project": 21223,
            "as_template": true
          }
        ]
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "21535",
        "name": "Analytics Imperial Template",
        "units": "feet",
        "Status": "",
        "Pursuit": true,
        "Land Use": "",
        "Assigned To": "Business Development Mgr",
        "Last Sold Date": "2022-12-14T05:00:00.000Z",
        "Last Sold Value": "",
        "defaultBoundary": false,
        "services provided": "",
        "created_at": "2023-04-17T18:37:13.136292+00:00",
        "updated_at": "2023-04-17T18:37:13.136317+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -81.29904538395786,
              28.33216986400901
            ],
            [
              -81.2989649176109,
              28.332238330425422
            ],
            [
              -81.29894614234156,
              28.332266661291385
            ],
            [
              -81.29888176929828,
              28.33229971389051
            ],
            [
              -81.29859745500235,
              28.3323351275728
            ],
            [
              -81.2983265514971,
              28.33260191007678
            ],
            [
              -81.29811733976352,
              28.332771894253746
            ],
            [
              -81.29801273313613,
              28.332788420598497
            ],
            [
              -81.29770696158461,
              28.332788420558526
            ],
            [
              -81.29770427949657,
              28.333397529829284
            ],
            [
              -81.29770159720688,
              28.33350140837847
            ],
            [
              -81.29769086837827,
              28.33360528765847
            ],
            [
              -81.29767209281366,
              28.333706805648475
            ],
            [
              -81.29764795298333,
              28.333808323038177
            ],
            [
              -81.29758626230638,
              28.33395705757311
            ],
            [
              -81.29754065608037,
              28.334037342617112
            ],
            [
              -81.29782765035047,
              28.334197859619223
            ],
            [
              -81.29796713596907,
              28.33428521821879
            ],
            [
              -81.29872619601647,
              28.33354863127006
            ],
            [
              -81.29983127313878,
              28.33354626384217
            ],
            [
              -81.29983395329215,
              28.33354390478544
            ],
            [
              -81.29983931784118,
              28.332271383056455
            ],
            [
              -81.29946380873992,
              28.332207638624165
            ],
            [
              -81.29924923169364,
              28.332129728385027
            ],
            [
              -81.29904538395786,
              28.33216986400901
            ],
            [
              -81.29904538395786,
              28.33216986400901
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4747,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 21535
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "21553",
        "name": "Connecticut Template",
        "units": "feet",
        "Status": "",
        "Pursuit": true,
        "Land Use": "",
        "Assigned To": "Business Development Mgr",
        "Last Sold Date": "2022-12-14T05:00:00.000Z",
        "Last Sold Value": "",
        "defaultBoundary": false,
        "services provided": "",
        "created_at": "2023-04-18T14:42:50.614558+00:00",
        "updated_at": "2023-04-18T14:42:50.614609+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -72.69363373505053,
              41.76484800572824
            ],
            [
              -72.69339233533707,
              41.76492803064698
            ],
            [
              -72.6930731536478,
              41.76502405986441
            ],
            [
              -72.69306778902084,
              41.76501605748311
            ],
            [
              -72.69288539775086,
              41.76506807368291
            ],
            [
              -72.69225776083606,
              41.765230122925885
            ],
            [
              -72.69138067734205,
              41.76543818613878
            ],
            [
              -72.69069404006173,
              41.765574225321394
            ],
            [
              -72.68997787260503,
              41.76568626131286
            ],
            [
              -72.68981699655436,
              41.7657082518634
            ],
            [
              -72.68944412606544,
              41.765826300445624
            ],
            [
              -72.6880949732284,
              41.7663064403628
            ],
            [
              -72.68808424478664,
              41.7663124420827
            ],
            [
              -72.68809229129478,
              41.766580517830484
            ],
            [
              -72.68810302017494,
              41.766722557699794
            ],
            [
              -72.6881432535587,
              41.76746476682495
            ],
            [
              -72.68816202950396,
              41.76794889056813
            ],
            [
              -72.68822103731678,
              41.767990901000765
            ],
            [
              -72.68824786288084,
              41.76799090100083
            ],
            [
              -72.69136727564562,
              41.767866868273835
            ],
            [
              -72.6926091307966,
              41.767804852329846
            ],
            [
              -72.69347816775101,
              41.767752838494445
            ],
            [
              -72.69366592182809,
              41.76774483651419
            ],
            [
              -72.6936927437504,
              41.76598234568911
            ],
            [
              -72.69369542603741,
              41.76537416704874
            ],
            [
              -72.69367665049879,
              41.76507607567577
            ],
            [
              -72.69368737921768,
              41.764832000735126
            ],
            [
              -72.69363373505053,
              41.76484800572824
            ],
            [
              -72.69363373505053,
              41.76484800572824
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4760,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 21553
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "21554",
        "name": "Phoenix Template",
        "units": "feet",
        "Status": "",
        "Pursuit": true,
        "Land Use": "",
        "Assigned To": "Business Development Mgr",
        "Last Sold Date": "2022-12-14T05:00:00.000Z",
        "Last Sold Value": "",
        "defaultBoundary": false,
        "services provided": "",
        "created_at": "2023-04-18T15:02:36.863990+00:00",
        "updated_at": "2023-04-18T15:02:36.864015+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -112.07511518801876,
              33.4482397038998
            ],
            [
              -112.07512001902346,
              33.44931648076156
            ],
            [
              -112.07643694794577,
              33.44931409661418
            ],
            [
              -112.07643003197127,
              33.448235440682865
            ],
            [
              -112.07511518801876,
              33.4482397038998
            ],
            [
              -112.07511518801876,
              33.4482397038998
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4770,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 21554
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "22288",
        "name": "3D Tiles Demo",
        "units": "meters",
        "Status": "",
        "Pursuit": true,
        "% Leased": 0,
        "Land Use": "",
        "Site Plan": "",
        "Floor Plan": "",
        "Assigned To": "Business Development Mgr",
        "mapboxStyle": "mapbox://styles/giraffetechnology/ckjuti36z000q1ao0j3d0dn34",
        "number test": 1.35,
        "Average Rent": 0,
        "Last Sold Date": "2022-12-14T05:00:00.000Z",
        "Last Sold Value": "",
        "defaultBoundary": false,
        "services provided": "",
        "Total Square Footage": 0,
        "created_at": "2023-05-18T20:48:37.661840+00:00",
        "updated_at": "2023-06-07T00:47:05.717884+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              150.66825766661765,
              -33.846552735620456
            ],
            [
              150.66825766661765,
              -34.0816533846783
            ],
            [
              150.96759487786215,
              -34.07601858365275
            ],
            [
              150.96759487786215,
              -33.89927173983973
            ],
            [
              150.66825766661765,
              -33.846552735620456
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4855,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 22288
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "23388",
        "name": "cost modelling template",
        "units": "feet",
        "Status": "",
        "Pursuit": true,
        "% Leased": 0,
        "Land Use": "",
        "Site Plan": "",
        "Floor Plan": "",
        "Assigned To": "Business Development Mgr",
        "number test": 1.35,
        "Average Rent": 0,
        "Last Sold Date": "2022-12-14T05:00:00.000Z",
        "Last Sold Value": "",
        "defaultBoundary": false,
        "services provided": "",
        "Total Square Footage": 0,
        "created_at": "2023-06-02T13:50:46.317497+00:00",
        "updated_at": "2023-06-02T13:50:46.317523+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -93.47516971903084,
              45.01630211770731
            ],
            [
              -93.47514376113357,
              45.01503596874093
            ],
            [
              -93.47418331892436,
              45.015039638778205
            ],
            [
              -93.47422485156049,
              45.01606724001397
            ],
            [
              -93.47516971903084,
              45.016434235986765
            ],
            [
              -93.47516971903084,
              45.01630211770731
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 4963,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 23388
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": [
          {
            "id": 94,
            "org": 1,
            "project": 23388,
            "as_template": true
          }
        ]
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "25095",
        "name": "Boston Template",
        "units": "feet",
        "Status": "",
        "org_id": 1,
        "Pursuit": true,
        "% Leased": 0,
        "Land Use": "",
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Assigned To": "Business Development Mgr",
        "mapboxStyle": "mapbox://styles/mapbox/streets-v12",
        "number test": 1.35,
        "Average Rent": 0,
        "Last Sold Date": "2022-12-14T05:00:00.000Z",
        "Last Sold Value": "",
        "defaultBoundary": false,
        "services provided": "",
        "Total Square Footage": 0,
        "created_at": "2023-07-14T17:40:53.883549+00:00",
        "updated_at": "2024-07-12T14:55:11.533124+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -71.06431782260381,
              42.35352132951711
            ],
            [
              -71.06350243112972,
              42.35511892843766
            ],
            [
              -71.06340050698928,
              42.35526560445475
            ],
            [
              -71.06212913989756,
              42.35649449651499
            ],
            [
              -71.06212913989778,
              42.35655395832136
            ],
            [
              -71.06323957454708,
              42.357604442663025
            ],
            [
              -71.06446266167151,
              42.357219927864094
            ],
            [
              -71.06915652759236,
              42.35615358035576
            ],
            [
              -71.06918334951865,
              42.35603069170019
            ],
            [
              -71.06838405125218,
              42.35465907804398
            ],
            [
              -71.06846988202939,
              42.35463529247029
            ],
            [
              -71.06831431386745,
              42.354357794765214
            ],
            [
              -71.06823921198001,
              42.354381580307326
            ],
            [
              -71.0673540831418,
              42.35275224756414
            ],
            [
              -71.06726825235532,
              42.35267296017136
            ],
            [
              -71.06712877742858,
              42.35262935203149
            ],
            [
              -71.06466650951613,
              42.35249059900461
            ],
            [
              -71.06431782260381,
              42.35352132951711
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 5266,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 25095
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": [
          {
            "id": 113,
            "org": 1,
            "project": 25095,
            "as_template": false
          }
        ]
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "29513",
        "name": "ShapeDiver Demo",
        "units": "meters",
        "Pursuit": true,
        "% Leased": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Assigned To": "Business Development Mgr",
        "number test": 1.35,
        "Average Rent": 0,
        "Last Sold Date": "2022-12-14T05:00:00.000Z",
        "Last Sold Value": "",
        "defaultBoundary": false,
        "Total Square Footage": 0,
        "created_at": "2023-09-27T01:25:48.691893+00:00",
        "updated_at": "2023-09-27T01:36:42.598791+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              147.33465998727314,
              -42.87847858650548
            ],
            [
              147.3349590306487,
              -42.87936730917121
            ],
            [
              147.33635456686272,
              -42.880049059959255
            ],
            [
              147.3371769362609,
              -42.8787768579517
            ],
            [
              147.33603060309053,
              -42.878880339372664
            ],
            [
              147.33465998727314,
              -42.87847858650548
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 5593,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 29513
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "32625",
        "name": "melbourne policy layers",
        "units": "meters",
        "Pursuit": true,
        "% Leased": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Assigned To": "Business Development Mgr",
        "mapboxStyle": "mapbox://styles/mapbox/light-v11",
        "number test": 1.35,
        "Average Rent": 0,
        "Last Sold Date": "2022-12-14T05:00:00.000Z",
        "Last Sold Value": "",
        "defaultBoundary": false,
        "Total Square Footage": 0,
        "created_at": "2023-11-05T21:39:06.137017+00:00",
        "updated_at": "2023-12-13T02:59:08.053533+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              144.8822139736572,
              -37.777806783236365
            ],
            [
              144.87772328418242,
              -37.85939805449402
            ],
            [
              145.01206975365204,
              -37.865602393520476
            ],
            [
              145.01506354634978,
              -37.78460950023076
            ],
            [
              144.8822139736572,
              -37.777806783236365
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6544,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 32625
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "36162",
        "name": "SAMPLE HEIGHT JOIN",
        "units": "feet",
        "Pursuit": true,
        "% Leased": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Assigned To": "Business Development Mgr",
        "Garage Type": "Private",
        "Average Rent": 0,
        "Last Sold Date": "2024-02-13T20:22:00.786Z",
        "Last Sold Value": "",
        "defaultBoundary": false,
        "Total Square Footage": 0,
        "created_at": "2024-02-13T20:22:02.370709+00:00",
        "updated_at": "2024-02-13T20:22:02.370739+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -74.01340192168156,
              40.705733842912764
            ],
            [
              -74.00945946019425,
              40.70205825181023
            ],
            [
              -74.00510464496078,
              40.705115718234794
            ],
            [
              -74.00874951839099,
              40.70817733176506
            ],
            [
              -74.01340192168156,
              40.705733842912764
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 5799,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 36162
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "44174",
        "qoz": "No",
        "City": "San Antonio",
        "name": "Site Fill",
        "Price": 0,
        "units": "feet",
        "County": "Bexar",
        "org_id": 1,
        "Pursuit": true,
        "% Leased": 0,
        "Comments": 0,
        "Lot Size": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Assigned To": "Business Development Mgr",
        "Flood Risk?": false,
        "Project NOI": 0,
        "mapboxStyle": "mapbox://styles/giraffetechnology/ckmmr0bil5pp617o46xhjgxkz",
        "Average Rent": 0,
        "Last Sold Date": "2024-08-09T14:18:44.563Z",
        "Last Sold Value": "",
        "Number of Units": 0,
        "Price per Sq Ft": 0,
        "Return on Costs": 0,
        "defaultBoundary": false,
        "Wetlands Coverage?": false,
        "Total Square Footage": 0,
        "created_at": "2024-08-09T14:18:46.837826+00:00",
        "updated_at": "2024-08-09T14:19:42.393940+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.16783822499414,
              39.96311381731917
            ],
            [
              -75.1683410441866,
              39.96099413995711
            ],
            [
              -75.16798488055218,
              39.960359829854355
            ],
            [
              -75.16532412871386,
              39.96003865783939
            ],
            [
              -75.16477940784256,
              39.962752513249
            ],
            [
              -75.16783822499414,
              39.96311381731917
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6156,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 44174
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "47120",
        "qoz": "No",
        "City": "San Antonio",
        "name": "Victoria Template",
        "Price": 0,
        "County": "Bexar",
        "org_id": 1,
        "Pursuit": true,
        "% Leased": 0,
        "Comments": 0,
        "Lot Size": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Assigned To": "Business Development Mgr",
        "Flood Risk?": false,
        "Project NOI": 0,
        "description": "Template to store all the Vic layers",
        "Average Rent": 0,
        "Last Sold Date": "2024-10-27T23:42:10.503Z",
        "Last Sold Value": "",
        "Number of Units": 0,
        "Price per Sq Ft": 0,
        "Return on Costs": 0,
        "defaultBoundary": false,
        "Wetlands Coverage?": false,
        "Total Square Footage": 0,
        "created_at": "2024-10-27T23:42:08.767200+00:00",
        "updated_at": "2024-11-10T22:38:50.706151+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              145.12494119137662,
              -38.1269603718883
            ],
            [
              145.1163706127776,
              -38.152833290093355
            ],
            [
              145.13230347742441,
              -38.155036127464655
            ],
            [
              145.14074428563956,
              -38.14017434756656
            ],
            [
              145.12494119137662,
              -38.1269603718883
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6246,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 47120
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": [
          {
            "id": 318,
            "org": 1,
            "project": 47120,
            "as_template": true
          }
        ]
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "48113",
        "qoz": "No",
        "City": "Melbourne",
        "name": "Demo - Moorabbin AC - Kingston ",
        "Price": 0,
        "units": "meters",
        "County": "VIC",
        "org_id": 1,
        "Pursuit": true,
        "% Leased": 0,
        "Comments": 0,
        "Lot Size": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Assigned To": "Business Development Mgr",
        "Flood Risk?": false,
        "Project NOI": 0,
        "mapboxStyle": "mapbox://styles/giraffetechnology/ckjuti36z000q1ao0j3d0dn34",
        "Average Rent": 0,
        "Last Sold Date": "2024-11-28T01:24:22.571Z",
        "Last Sold Value": "",
        "Number of Units": 0,
        "Price per Sq Ft": 0,
        "Return on Costs": 0,
        "defaultBoundary": false,
        "Wetlands Coverage?": false,
        "Total Square Footage": 0,
        "created_at": "2024-11-28T01:24:23.745227+00:00",
        "updated_at": "2025-05-21T05:22:24.742950+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              145.04741246396895,
              -37.94566656709974
            ],
            [
              145.0480423983858,
              -37.94220045880838
            ],
            [
              145.04782540332099,
              -37.941486186318826
            ],
            [
              145.04919200128825,
              -37.93475627009492
            ],
            [
              145.03460688450195,
              -37.932964235589225
            ],
            [
              145.0435412809956,
              -37.945180623379436
            ],
            [
              145.04741246396895,
              -37.94566656709974
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6322,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 48113
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "49534",
        "qoz": "No",
        "City": "San Antonio",
        "name": "Test Project",
        "Price": 0,
        "units": "feet",
        "County": "Bexar",
        "Pursuit": true,
        "% Leased": 0,
        "Comments": 0,
        "Lot Size": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Assigned To": "Business Development Mgr",
        "Flood Risk?": false,
        "Project NOI": 0,
        "Average Rent": 0,
        "Last Sold Date": "2025-01-21T18:14:19.137Z",
        "Date of Contact": "2025-01-21T18:14:19.137Z",
        "Last Sold Value": "",
        "Number of Units": 0,
        "Price per Sq Ft": 0,
        "Return on Costs": 0,
        "defaultBoundary": false,
        "Wetlands Coverage?": false,
        "Total Square Footage": 0,
        "created_at": "2025-01-21T18:14:31.081245+00:00",
        "updated_at": "2025-01-21T18:14:31.089998+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -97.06327557558544,
              32.749388687561435
            ],
            [
              -97.06339359283065,
              32.75045795779296
            ],
            [
              -97.06369400028566,
              32.750444422778685
            ],
            [
              -97.06370472912512,
              32.750525632636105
            ],
            [
              -97.06340432161252,
              32.750539167675946
            ],
            [
              -97.0635813475079,
              32.752163349509296
            ],
            [
              -97.06358671202301,
              32.75217237270501
            ],
            [
              -97.06362962686771,
              32.7522174880816
            ],
            [
              -97.06363499161608,
              32.75222199990909
            ],
            [
              -97.06364035603342,
              32.75223102319256
            ],
            [
              -97.06365108489317,
              32.75224004621515
            ],
            [
              -97.06365644931319,
              32.752249069497914
            ],
            [
              -97.06366717807003,
              32.75225809260925
            ],
            [
              -97.06367790694532,
              32.75226260417323
            ],
            [
              -97.0636832713694,
              32.752271627274496
            ],
            [
              -97.06369400035383,
              32.7522761388371
            ],
            [
              -97.06371545799044,
              32.75229418523268
            ],
            [
              -97.0637369156489,
              32.75230320826123
            ],
            [
              -97.06374764431364,
              32.75231223136562
            ],
            [
              -97.06375837319946,
              32.75231674292268
            ],
            [
              -97.0637744666393,
              32.752321254573545
            ],
            [
              -97.06380665298722,
              32.75233478923507
            ],
            [
              -97.06381738177457,
              32.752334789240706
            ],
            [
              -97.06383347522063,
              32.7523393007938
            ],
            [
              -97.06383883955976,
              32.752343812341934
            ],
            [
              -97.06386029724334,
              32.752343812346794
            ],
            [
              -97.06387102603192,
              32.75234832389419
            ],
            [
              -97.06528186183502,
              32.75234832396608
            ],
            [
              -97.06598460674286,
              32.75235283540874
            ],
            [
              -97.06598460674286,
              32.75219944201969
            ],
            [
              -97.06598997118151,
              32.75219493056331
            ],
            [
              -97.0659899711796,
              32.752163349557684
            ],
            [
              -97.06599533561581,
              32.75215883792069
            ],
            [
              -97.06599533561312,
              32.752136280007925
            ],
            [
              -97.06600070004743,
              32.75213176855099
            ],
            [
              -97.06600070004419,
              32.752113722184625
            ],
            [
              -97.06600606437019,
              32.75210921063732
            ],
            [
              -97.06600606446499,
              32.75205958326473
            ],
            [
              -97.06601142878745,
              32.75205507162698
            ],
            [
              -97.06601142886959,
              32.75126102991477
            ],
            [
              -97.0652872323741,
              32.75127907642016
            ],
            [
              -97.06529259686064,
              32.75054819098658
            ],
            [
              -97.06529796130728,
              32.75054819092591
            ],
            [
              -97.06530869007594,
              32.7504940512401
            ],
            [
              -97.0653194189322,
              32.7504263762785
            ],
            [
              -97.0653355117807,
              32.75035870278594
            ],
            [
              -97.0653516053199,
              32.75029553840374
            ],
            [
              -97.06537306382849,
              32.75022786042334
            ],
            [
              -97.06539452056752,
              32.75016469984758
            ],
            [
              -97.06542134340347,
              32.750101534602834
            ],
            [
              -97.06545352915052,
              32.75003386080222
            ],
            [
              -97.06548571629247,
              32.749975207834424
            ],
            [
              -97.0655179023487,
              32.749912044752456
            ],
            [
              -97.06563055509002,
              32.74973608915247
            ],
            [
              -97.06567347183345,
              32.749686458628844
            ],
            [
              -97.06568956358403,
              32.749668413737105
            ],
            [
              -97.06571638468787,
              32.74963683286921
            ],
            [
              -97.06574857232081,
              32.749596226203884
            ],
            [
              -97.06507801991927,
              32.74964585495749
            ],
            [
              -97.06480443576761,
              32.74966390166826
            ],
            [
              -97.06376373764654,
              32.749749624096275
            ],
            [
              -97.0637369154673,
              32.74936612893328
            ],
            [
              -97.06327557558544,
              32.749388687561435
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6303,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 49534
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "49859",
        "qoz": "No",
        "City": "San Antonio",
        "name": "Site fill tests",
        "Price": 0,
        "units": "meters",
        "County": "Bexar",
        "Status": "",
        "org_id": 1,
        "Pursuit": true,
        "% Leased": 0,
        "Comments": 0,
        "Land Use": "",
        "Lot Size": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Sale Price": 0,
        "Assigned To": "Business Development Mgr",
        "Flood Risk?": false,
        "Project NOI": 0,
        "mapboxStyle": "mapbox://styles/giraffetechnology/cm3nwj4vd00f401sq43ha04r4",
        "Average Rent": 0,
        "Project Type": 0,
        "Last Sold Date": "2025-01-29T14:18:37.833Z",
        "Date of Contact": "2025-01-29T14:18:37.832Z",
        "Last Sold Value": "",
        "Number of Units": 0,
        "Price per Sq Ft": 0,
        "Return on Costs": 0,
        "services provided": "",
        "Wetlands Coverage?": false,
        "Total Square Footage": 0,
        "created_at": "2025-01-29T14:18:47.726714+00:00",
        "updated_at": "2025-01-29T14:27:47.099276+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.17259277283885,
              39.96382988679457
            ],
            [
              -75.17464020350275,
              39.96316962145576
            ],
            [
              -75.1750069767653,
              39.96218261800456
            ],
            [
              -75.1733134244742,
              39.961009619201036
            ],
            [
              -75.17155301523178,
              39.96200498295906
            ],
            [
              -75.17259277283885,
              39.96382988679457
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6312,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 49859
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "49916",
        "qoz": "No",
        "City": "San Antonio",
        "name": "Large subdivision",
        "Price": 0,
        "units": "meters",
        "County": "Bexar",
        "org_id": 1,
        "Pursuit": true,
        "lineage": [
          "47120"
        ],
        "% Leased": 0,
        "Comments": 0,
        "Lot Size": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Sale Price": 0,
        "Assigned To": "Business Development Mgr",
        "Flood Risk?": false,
        "Project NOI": 0,
        "Average Rent": 0,
        "Last Sold Date": "2025-01-30T05:49:19.772Z",
        "Date of Contact": "2025-01-30T05:49:19.772Z",
        "Last Sold Value": "",
        "Number of Units": 0,
        "Price per Sq Ft": 0,
        "Return on Costs": 0,
        "defaultBoundary": false,
        "Wetlands Coverage?": false,
        "Total Square Footage": 0,
        "Product Type": "Multi Family",
        "crs": "+proj=utm +zone=55 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs",
        "created_at": "2025-01-30T05:49:25.872939+00:00",
        "updated_at": "2025-09-24T07:11:39.871036+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              145.28985768556595,
              -38.02239876394899
            ],
            [
              145.29084272682667,
              -38.02108396041234
            ],
            [
              145.29007762670517,
              -38.02072105146502
            ],
            [
              145.28920523822308,
              -38.02038085571059
            ],
            [
              145.28868824243546,
              -38.02021339852474
            ],
            [
              145.28829865157604,
              -38.02010246453161
            ],
            [
              145.2878798916936,
              -38.01999681295162
            ],
            [
              145.28729617595673,
              -38.01987267215447
            ],
            [
              145.2870011329651,
              -38.02141570093448
            ],
            [
              145.28776958584785,
              -38.021550404061735
            ],
            [
              145.28822941705585,
              -38.021743742235095
            ],
            [
              145.2883667126298,
              -38.02177385223264
            ],
            [
              145.28865337371826,
              -38.021895348588075
            ],
            [
              145.2887485921383,
              -38.021931797455416
            ],
            [
              145.2892629057169,
              -38.02215471621879
            ],
            [
              145.28985768556595,
              -38.02239876394899
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6404,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 49916
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "51108",
        "qoz": "No",
        "City": "San Antonio",
        "name": "Bendigo Housing",
        "Price": 0,
        "units": "meters",
        "County": "Bexar",
        "Status": "",
        "Pursuit": true,
        "lineage": [
          "47120"
        ],
        "% Leased": 0,
        "Comments": 0,
        "Land Use": "",
        "Lot Size": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Sale Price": 0,
        "Assigned To": "Business Development Mgr",
        "Flood Risk?": false,
        "Project NOI": 0,
        "Average Rent": 0,
        "Project Type": 0,
        "Last Sold Date": "2025-02-20T23:42:02.978Z",
        "Date of Contact": "2025-02-20T23:42:02.978Z",
        "Last Sold Value": "",
        "Number of Units": 0,
        "Price per Sq Ft": 0,
        "Return on Costs": 0,
        "services provided": "",
        "Wetlands Coverage?": false,
        "Total Square Footage": 0,
        "created_at": "2025-02-20T23:42:11.100626+00:00",
        "updated_at": "2025-02-20T23:42:11.109660+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              144.27022090816274,
              -36.693857435887466
            ],
            [
              144.18163792438014,
              -36.73872097612805
            ],
            [
              144.21356345364802,
              -36.80975755303652
            ],
            [
              144.31061586285068,
              -36.82997340698474
            ],
            [
              144.3669447441036,
              -36.71937244735799
            ],
            [
              144.27022090816274,
              -36.693857435887466
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6331,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 51108
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "51794",
        "qoz": "No",
        "City": "San Antonio",
        "name": "Urban Plan",
        "Price": 0,
        "units": "feet",
        "County": "Bexar",
        "Status": "",
        "Pursuit": true,
        "% Leased": 0,
        "Comments": 0,
        "Land Use": "",
        "Lot Size": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Sale Price": 0,
        "Assigned To": "Business Development Mgr",
        "Flood Risk?": false,
        "Project NOI": 0,
        "Average Rent": 0,
        "Project Type": 0,
        "Last Sold Date": "2025-03-07T15:26:42.441Z",
        "Date of Contact": "2025-03-07T15:26:42.441Z",
        "Last Sold Value": "",
        "Number of Units": 0,
        "Price per Sq Ft": 0,
        "Return on Costs": 0,
        "services provided": "",
        "Wetlands Coverage?": false,
        "Total Square Footage": 0,
        "created_at": "2025-03-07T15:27:03.822646+00:00",
        "updated_at": "2025-03-07T15:27:03.831181+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.16579818522575,
              39.965096842801415
            ],
            [
              -75.16624470833959,
              39.96306831426642
            ],
            [
              -75.16188501902326,
              39.96257672927345
            ],
            [
              -75.16144661451092,
              39.962439831557674
            ],
            [
              -75.16094326118177,
              39.96446837873941
            ],
            [
              -75.16579818522575,
              39.965096842801415
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6370,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 51794
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "52031",
        "qoz": "No",
        "City": "San Antonio",
        "grid": {
          "origin": [
            151.2020243704319,
            -33.82776379479871
          ],
          "bearing": 1.3865119315915762,
          "distance": 3.300000039351792
        },
        "name": "grid templates",
        "Price": 0,
        "units": "meters",
        "County": "Bexar",
        "Status": "",
        "org_id": 1,
        "Pursuit": true,
        "% Leased": 0,
        "Comments": 0,
        "Land Use": "",
        "Lot Size": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Sale Price": 0,
        "Assigned To": "Business Development Mgr",
        "Flood Risk?": false,
        "Project NOI": 0,
        "Average Rent": 0,
        "Project Type": 0,
        "Last Sold Date": "2025-03-12T22:51:54.614Z",
        "Date of Contact": "2025-03-12T22:51:54.614Z",
        "Last Sold Value": "",
        "Number of Units": 0,
        "Price per Sq Ft": 0,
        "Return on Costs": 0,
        "services provided": "",
        "Wetlands Coverage?": false,
        "Total Square Footage": 0,
        "created_at": "2025-03-12T22:52:04.801632+00:00",
        "updated_at": "2025-03-13T01:47:33.651817+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              151.2022067606449,
              -33.82694717365035
            ],
            [
              151.2020243704319,
              -33.82776379479871
            ],
            [
              151.20252906407262,
              -33.82784163792425
            ],
            [
              151.20270908722756,
              -33.827025918950575
            ],
            [
              151.2022067606449,
              -33.82694717365035
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6378,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 52031
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "52096",
        "qoz": "No",
        "City": "San Antonio",
        "name": "Spatial Data Webinar",
        "Price": 0,
        "units": "feet",
        "County": "Bexar",
        "Status": "",
        "Pursuit": true,
        "% Leased": 0,
        "Comments": 0,
        "Land Use": "",
        "Lot Size": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Sale Price": 0,
        "Assigned To": "Business Development Mgr",
        "Flood Risk?": false,
        "Project NOI": 0,
        "Average Rent": 0,
        "Project Type": 0,
        "Last Sold Date": "2025-03-13T18:54:45.581Z",
        "Date of Contact": "2025-03-13T18:54:45.581Z",
        "Last Sold Value": "",
        "Number of Units": 0,
        "Price per Sq Ft": 0,
        "Return on Costs": 0,
        "services provided": "",
        "Wetlands Coverage?": false,
        "Total Square Footage": 0,
        "created_at": "2025-03-13T18:54:58.176851+00:00",
        "updated_at": "2025-03-13T18:54:58.185219+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.17309658025366,
              39.96126475931183
            ],
            [
              -75.17761002204892,
              39.944953942942846
            ],
            [
              -75.14722962811548,
              39.940533943308395
            ],
            [
              -75.14358853221282,
              39.95786335927514
            ],
            [
              -75.17309658025366,
              39.96126475931183
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6388,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 52096
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "52491",
        "qoz": "No",
        "City": "San Antonio",
        "name": "layer flow rtree",
        "Price": 0,
        "units": "feet",
        "County": "Bexar",
        "Status": "",
        "Pursuit": true,
        "% Leased": 0,
        "Comments": 0,
        "Land Use": "",
        "Lot Size": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Sale Price": 0,
        "Assigned To": "Business Development Mgr",
        "Flood Risk?": false,
        "Project NOI": 0,
        "Average Rent": 0,
        "Project Type": 0,
        "Last Sold Date": "2025-03-21T21:12:29.349Z",
        "Date of Contact": "2025-03-21T21:12:29.349Z",
        "Last Sold Value": "",
        "Number of Units": 0,
        "Price per Sq Ft": 0,
        "Return on Costs": 0,
        "services provided": "",
        "Wetlands Coverage?": false,
        "Total Square Footage": 0,
        "org_id": 1,
        "Color": "green",
        "created_at": "2025-03-21T21:12:42.544325+00:00",
        "updated_at": "2025-08-27T18:50:39.582215+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.16454316865918,
              39.949548979322856
            ],
            [
              -75.16517145813047,
              39.94306900495698
            ],
            [
              -75.16042321969894,
              39.94277480847191
            ],
            [
              -75.15899615437587,
              39.94713285501621
            ],
            [
              -75.16454316865918,
              39.949548979322856
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6387,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 52491
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "52555",
        "qoz": "No",
        "City": "San Antonio",
        "name": "Test Project",
        "Price": 0,
        "units": "feet",
        "County": "Bexar",
        "Status": "",
        "Pursuit": true,
        "% Leased": 0,
        "Comments": 0,
        "Land Use": "",
        "Lot Size": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Sale Price": 0,
        "Assigned To": "Business Development Mgr",
        "Flood Risk?": false,
        "Project NOI": 0,
        "Average Rent": 0,
        "Product Type": "Multi Family",
        "Project Type": 0,
        "Last Sold Date": "2025-03-24T20:28:20.948Z",
        "Date of Contact": "2025-03-24T20:28:20.948Z",
        "Last Sold Value": "",
        "Number of Units": 0,
        "Price per Sq Ft": 0,
        "Return on Costs": 0,
        "services provided": "",
        "Wetlands Coverage?": false,
        "Total Square Footage": 0,
        "created_at": "2025-03-24T20:29:39.881930+00:00",
        "updated_at": "2025-03-24T20:29:39.890166+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -118.35011512045513,
              34.099403137290466
            ],
            [
              -118.35011243820192,
              34.09963413208113
            ],
            [
              -118.35011243820192,
              34.09973407571854
            ],
            [
              -118.3503216508376,
              34.09967854960476
            ],
            [
              -118.35052549874493,
              34.09961413950371
            ],
            [
              -118.35072666412972,
              34.0995408450679
            ],
            [
              -118.3509251475436,
              34.099454224440656
            ],
            [
              -118.35092514752057,
              34.09913439333128
            ],
            [
              -118.35057109141994,
              34.09913217229022
            ],
            [
              -118.35011512044653,
              34.09912995126491
            ],
            [
              -118.35011512045513,
              34.099403137290466
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6389,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 52555
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "53443",
        "qoz": "No",
        "City": "San Antonio",
        "name": "BLANK TEMPLATE",
        "Price": 0,
        "units": "meters",
        "County": "Bexar",
        "Status": "",
        "org_id": 1,
        "Pursuit": true,
        "% Leased": 0,
        "Comments": 0,
        "Land Use": "",
        "Lot Size": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Sale Price": 0,
        "Assigned To": "Business Development Mgr",
        "Flood Risk?": false,
        "Project NOI": 0,
        "Average Rent": 0,
        "Project Type": 0,
        "Last Sold Date": "2025-04-14T17:53:07.547Z",
        "Date of Contact": "2025-04-14T17:53:07.547Z",
        "Last Sold Value": "",
        "Number of Units": 0,
        "Price per Sq Ft": 0,
        "Return on Costs": 0,
        "services provided": "",
        "Wetlands Coverage?": false,
        "Total Square Footage": 0,
        "created_at": "2025-04-14T17:53:14.903164+00:00",
        "updated_at": "2025-04-14T17:55:51.821852+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -124.51065422250765,
              -8.78044068886264
            ],
            [
              -124.51017078105465,
              -8.784542352578441
            ],
            [
              -124.50696011433351,
              -8.784234604913493
            ],
            [
              -124.5070428389808,
              -8.780381905712204
            ],
            [
              -124.51065422250765,
              -8.78044068886264
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6408,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 53443
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": [
          {
            "id": 358,
            "org": 1,
            "project": 53443,
            "as_template": true
          }
        ]
      },
      "_isSpace": false
    },
    {
      "properties": {
        "id": "53595",
        "qoz": "No",
        "City": "San Antonio",
        "grid": {
          "origin": [
            -75.15367497795795,
            39.98839285290498
          ],
          "distance": 3.048000000471319,
          "bearing": -3.1415926465620965
        },
        "name": "Unsaved project",
        "Price": 0,
        "units": "feet",
        "County": "Bexar",
        "Status": "",
        "org_id": 1,
        "Pursuit": true,
        "% Leased": 0,
        "Comments": 0,
        "Land Use": "",
        "Lot Size": 0,
        "Site Plan": "",
        "Floor Plan": "",
        "Hard Costs": 0,
        "Sale Price": 0,
        "Assigned To": "Business Development Mgr",
        "Flood Risk?": false,
        "Project NOI": 0,
        "Average Rent": 0,
        "Project Type": 0,
        "Last Sold Date": "2025-04-17T15:13:10.430Z",
        "Date of Contact": "2025-04-17T15:13:10.430Z",
        "Last Sold Value": "",
        "Number of Units": 0,
        "Price per Sq Ft": 0,
        "Return on Costs": 0,
        "services provided": "",
        "Wetlands Coverage?": false,
        "Total Square Footage": 0,
        "created_at": "2025-04-17T15:13:14.693570+00:00",
        "updated_at": "2025-08-06T15:30:44.756797+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.15159771239054,
              39.99034179692822
            ],
            [
              -75.15175351667038,
              39.98946947298492
            ],
            [
              -75.1511302995526,
              39.98827115719473
            ],
            [
              -75.1502494061263,
              39.98822065300229
            ],
            [
              -75.14989585026126,
              39.99014437722144
            ],
            [
              -75.15159771239054,
              39.99034179692822
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6644,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 53595
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "Al's island 2",
        "id": "54267",
        "units": "meters",
        "Sale Price": 0,
        "Date of Contact": "2025-05-07T02:04:57.341Z",
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "qoz": "No",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-05-07T02:04:57.341Z",
        "created_at": "2025-05-07T02:05:01.874258+00:00",
        "updated_at": "2025-05-07T02:05:01.885339+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": true,
        "shared_with_my_team": false,
        "shared_with_my_workspace": false
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              152.19065309,
              -32.75098130999957
            ],
            [
              152.1910822399988,
              -32.75099935996271
            ],
            [
              152.19112515003457,
              -32.750818889978056
            ],
            [
              152.1909534899682,
              -32.750746699976524
            ],
            [
              152.19102858995768,
              -32.750701589979634
            ],
            [
              152.1909964100373,
              -32.750503069984575
            ],
            [
              152.19077109996337,
              -32.75008799997414
            ],
            [
              152.19101787003936,
              -32.7503947899835
            ],
            [
              152.191178800014,
              -32.750421859960646
            ],
            [
              152.19129682002998,
              -32.7505121000124
            ],
            [
              152.19151138995332,
              -32.750494050011135
            ],
            [
              152.19153285002446,
              -32.75035870000389
            ],
            [
              152.19174743000568,
              -32.75011507004021
            ],
            [
              152.19176888004532,
              -32.74984437002478
            ],
            [
              152.19189763000185,
              -32.7498353500443
            ],
            [
              152.1919727300351,
              -32.74968194996419
            ],
            [
              152.1921122100487,
              -32.749727070032115
            ],
            [
              152.19226240995346,
              -32.74963683001438
            ],
            [
              152.19213367001137,
              -32.749393199963215
            ],
            [
              152.19197273002072,
              -32.74934807996428
            ],
            [
              152.19202638000002,
              -32.749330039956696
            ],
            [
              152.1919834599838,
              -32.74918565995465
            ],
            [
              152.19224095003693,
              -32.74936612999027
            ],
            [
              152.19243406999917,
              -32.74925784995941
            ],
            [
              152.19261646001695,
              -32.749339059977885
            ],
            [
              152.19267010995137,
              -32.74923980000825
            ],
            [
              152.19286323000694,
              -32.74936613002936
            ],
            [
              152.1930134300236,
              -32.74969999999477
            ],
            [
              152.19307779998127,
              -32.74966389997763
            ],
            [
              152.19328164998538,
              -32.74991655996968
            ],
            [
              152.19349622996486,
              -32.74991655997446
            ],
            [
              152.1936142399769,
              -32.75002483998588
            ],
            [
              152.19371080000866,
              -32.74984436997285
            ],
            [
              152.19360352002593,
              -32.74971803999728
            ],
            [
              152.19380735997515,
              -32.749645849990024
            ],
            [
              152.19385027999525,
              -32.749528549998324
            ],
            [
              152.19375372001116,
              -32.74950147997808
            ],
            [
              152.19373226002045,
              -32.749302960021026
            ],
            [
              152.19350696001828,
              -32.74918566004116
            ],
            [
              152.19330311002977,
              -32.74894202997611
            ],
            [
              152.19302415995966,
              -32.748788630008434
            ],
            [
              152.19300269999118,
              -32.74860815997754
            ],
            [
              152.19315289995558,
              -32.7483825699673
            ],
            [
              152.193399670029,
              -32.748454759958726
            ],
            [
              152.19373225996858,
              -32.74835550004012
            ],
            [
              152.19403267002278,
              -32.748436710013436
            ],
            [
              152.19420432995173,
              -32.74835549999636
            ],
            [
              152.19419359999085,
              -32.748003579973854
            ],
            [
              152.19404340003024,
              -32.747940419999466
            ],
            [
              152.19394684003933,
              -32.747787009961016
            ],
            [
              152.19366789000182,
              -32.74757947000565
            ],
            [
              152.19364643000077,
              -32.74744411996756
            ],
            [
              152.19404340003157,
              -32.74745313999054
            ],
            [
              152.19445108999122,
              -32.747380949992646
            ],
            [
              152.19452619997966,
              -32.747290710022185
            ],
            [
              152.1945047400057,
              -32.74701097997053
            ],
            [
              152.19459056997866,
              -32.74692073998697
            ],
            [
              152.19470858997548,
              -32.74691171997593
            ],
            [
              152.19511628001243,
              -32.74708317000491
            ],
            [
              152.19519137997122,
              -32.747200479963816
            ],
            [
              152.1954488800517,
              -32.74734485999268
            ],
            [
              152.1958458400028,
              -32.74784116000468
            ],
            [
              152.19589949002756,
              -32.747777990034166
            ],
            [
              152.19600676998456,
              -32.74777799000585
            ],
            [
              152.1961891699634,
              -32.747985530043074
            ],
            [
              152.1961784400165,
              -32.74783212998713
            ],
            [
              152.19631791001044,
              -32.74767872999028
            ],
            [
              152.19633937000862,
              -32.747489239960224
            ],
            [
              152.19604968999798,
              -32.74714633998469
            ],
            [
              152.1961891700107,
              -32.74706511995731
            ],
            [
              152.1963822800028,
              -32.74712829002233
            ],
            [
              152.19647883997848,
              -32.747092190013994
            ],
            [
              152.19644666004845,
              -32.74670417996794
            ],
            [
              152.19654321996327,
              -32.74673124999928
            ],
            [
              152.196671959992,
              -32.74662295999954
            ],
            [
              152.1968972700267,
              -32.74659589004306
            ],
            [
              152.19690800004142,
              -32.74690270000127
            ],
            [
              152.1969938300193,
              -32.74709218999402
            ],
            [
              152.19710111999117,
              -32.74714633998327
            ],
            [
              152.1970903900302,
              -32.74705609997418
            ],
            [
              152.19734788000656,
              -32.74702001004269
            ],
            [
              152.19748734996716,
              -32.746794410032955
            ],
            [
              152.19745516998904,
              -32.74671319999954
            ],
            [
              152.1972191299775,
              -32.74664101001785
            ],
            [
              152.19730495999977,
              -32.74646955998948
            ],
            [
              152.19717622000624,
              -32.746307130013875
            ],
            [
              152.19719767996625,
              -32.746252990015975
            ],
            [
              152.1975946399774,
              -32.74660492001076
            ],
            [
              152.19772339003018,
              -32.74665003003124
            ],
            [
              152.19789505000688,
              -32.74651468002636
            ],
            [
              152.1981954599929,
              -32.746514679980514
            ],
            [
              152.19816326995678,
              -32.74613568000606
            ],
            [
              152.19851732000606,
              -32.746731249966636
            ],
            [
              152.19898938999904,
              -32.746704179999085
            ],
            [
              152.19898939002837,
              -32.74683050999195
            ],
            [
              152.19888210001204,
              -32.746947820005026
            ],
            [
              152.19891429001876,
              -32.74711926995908
            ],
            [
              152.19925761002895,
              -32.74735388001156
            ],
            [
              152.19947218994747,
              -32.74729974002142
            ],
            [
              152.1995794799819,
              -32.7474621600356
            ],
            [
              152.19971894997903,
              -32.747453139999266
            ],
            [
              152.1997189500421,
              -32.74766970998954
            ],
            [
              152.19981551003096,
              -32.74770579996381
            ],
            [
              152.19983697000058,
              -32.74785017997466
            ],
            [
              152.20012665005123,
              -32.74781407999187
            ],
            [
              152.20039486995555,
              -32.74785919999351
            ],
            [
              152.20036267998984,
              -32.74802162999713
            ],
            [
              152.20041632996345,
              -32.7480938199982
            ],
            [
              152.2006094500506,
              -32.74797651001918
            ],
            [
              152.2007381899949,
              -32.74818405002577
            ],
            [
              152.20095277002463,
              -32.74823819001268
            ],
            [
              152.20107079004464,
              -32.74817503001882
            ],
            [
              152.2011887999891,
              -32.7482833099617
            ],
            [
              152.2015964999651,
              -32.748328430012805
            ],
            [
              152.20165014002063,
              -32.748400620024185
            ],
            [
              152.20175743000766,
              -32.748400620031894
            ],
            [
              152.20183253001156,
              -32.74844573001949
            ],
            [
              152.20185398997978,
              -32.748572059955265
            ],
            [
              152.20207929995783,
              -32.748626200026365
            ],
            [
              152.20209002000635,
              -32.74870742000578
            ],
            [
              152.20198273997465,
              -32.748806670030696
            ],
            [
              152.20202565001688,
              -32.7488427699873
            ],
            [
              152.20216513001296,
              -32.74877058004454
            ],
            [
              152.20225095996184,
              -32.748824720005985
            ],
            [
              152.20225096002375,
              -32.748698389962584
            ],
            [
              152.20237969995964,
              -32.74862619996123
            ],
            [
              152.20243335001683,
              -32.74870742003502
            ],
            [
              152.2025620900066,
              -32.74869838999981
            ],
            [
              152.20268010995457,
              -32.74881570001252
            ],
            [
              152.20266938003053,
              -32.748698390038385
            ],
            [
              152.2028088600061,
              -32.7484547599701
            ],
            [
              152.2030126999554,
              -32.7482833099991
            ],
            [
              152.20316291002814,
              -32.74854499001725
            ],
            [
              152.2034418600104,
              -32.74852695002163
            ],
            [
              152.20316291004886,
              -32.74818405002722
            ],
            [
              152.20333456997767,
              -32.748012600028076
            ],
            [
              152.2033560300331,
              -32.747841159963414
            ],
            [
              152.2034954999608,
              -32.747723849966654
            ],
            [
              152.20342039995435,
              -32.74756142002685
            ],
            [
              152.20353841998096,
              -32.747588489961295
            ],
            [
              152.20348476995323,
              -32.74746215998713
            ],
            [
              152.20355987999358,
              -32.747380949966384
            ],
            [
              152.20327019994699,
              -32.747308760039175
            ],
            [
              152.20266937996706,
              -32.74697488998629
            ],
            [
              152.2026801099631,
              -32.74678538995782
            ],
            [
              152.20288396005017,
              -32.74658687003487
            ],
            [
              152.20268010999973,
              -32.746496629987945
            ],
            [
              152.20241189000413,
              -32.746180800003756
            ],
            [
              152.20237970001637,
              -32.746099589965176
            ],
            [
              152.20246553000098,
              -32.74593716003003
            ],
            [
              152.20210075005244,
              -32.745513039996304
            ],
            [
              152.20210074995705,
              -32.74535963002823
            ],
            [
              152.2019183599828,
              -32.74525135002508
            ],
            [
              152.20184326001203,
              -32.74534159003625
            ],
            [
              152.20173597000735,
              -32.745350609958976
            ],
            [
              152.2015321299911,
              -32.7451250100296
            ],
            [
              152.20170378997008,
              -32.74507988995475
            ],
            [
              152.20168232998418,
              -32.74495356001361
            ],
            [
              152.20137119003823,
              -32.74492649001716
            ],
            [
              152.20125318003232,
              -32.744827229955966
            ],
            [
              152.20094203999653,
              -32.74477308002461
            ],
            [
              152.20086694004368,
              -32.744691870029335
            ],
            [
              152.20094203997334,
              -32.74419554997009
            ],
            [
              152.20103859998153,
              -32.74415042999964
            ],
            [
              152.20158576999793,
              -32.744105309957746
            ],
            [
              152.2022295000356,
              -32.74426773998398
            ],
            [
              152.20299124994932,
              -32.7441684799716
            ],
            [
              152.20308780998963,
              -32.744006050036525
            ],
            [
              152.20327019998535,
              -32.74391580995617
            ],
            [
              152.20337748998065,
              -32.743708260029074
            ],
            [
              152.20333457002934,
              -32.743581919986596
            ],
            [
              152.20315217995406,
              -32.74356387000772
            ],
            [
              152.20303415995508,
              -32.74328413001401
            ],
            [
              152.20308780996427,
              -32.74322095998596
            ],
            [
              152.20304488995706,
              -32.743049499976216
            ],
            [
              152.2033131100299,
              -32.74295024000953
            ],
            [
              152.203216549952,
              -32.7427517100075
            ],
            [
              152.20304489002422,
              -32.74268854001517
            ],
            [
              152.20305561995306,
              -32.742381719958985
            ],
            [
              152.20285177003322,
              -32.742156109988876
            ],
            [
              152.20264791997278,
              -32.742228310015896
            ],
            [
              152.2023260600308,
              -32.742192210018146
            ],
            [
              152.2020471099562,
              -32.742589269982254
            ],
            [
              152.20152139999175,
              -32.742733659962774
            ],
            [
              152.20079184000087,
              -32.74218319003884
            ],
            [
              152.20085621004677,
              -32.74194856003527
            ],
            [
              152.2010385999527,
              -32.74184027001471
            ],
            [
              152.20100641002037,
              -32.7417500299678
            ],
            [
              152.20042705998847,
              -32.741632709993176
            ],
            [
              152.200201749972,
              -32.74168685997003
            ],
            [
              152.20019101999915,
              -32.741641730008084
            ],
            [
              152.20052360999176,
              -32.741524419988295
            ],
            [
              152.20038413995283,
              -32.74140710001014
            ],
            [
              152.20051289004195,
              -32.741145399960324
            ],
            [
              152.20041633000596,
              -32.74106417997391
            ],
            [
              152.20027685001318,
              -32.741010040026595
            ],
            [
              152.20018029002276,
              -32.741100280026416
            ],
            [
              152.20003009004316,
              -32.741046129979054
            ],
            [
              152.19989060999438,
              -32.74109126003038
            ],
            [
              152.19983697000532,
              -32.741235640024364
            ],
            [
              152.19968676999696,
              -32.741280770001396
            ],
            [
              152.19966531003666,
              -32.741452229993584
            ],
            [
              152.19936490004406,
              -32.74147930000332
            ],
            [
              152.1992146999694,
              -32.74156953999419
            ],
            [
              152.1987640900063,
              -32.74152441998311
            ],
            [
              152.19860315003686,
              -32.74142514995571
            ],
            [
              152.19837785003716,
              -32.741037109960864
            ],
            [
              152.19845295003577,
              -32.74095589002468
            ],
            [
              152.19861388003244,
              -32.74105515998233
            ],
            [
              152.1987426299929,
              -32.74104612998099
            ],
            [
              152.19868897999234,
              -32.740829549961205
            ],
            [
              152.19849585998224,
              -32.74076637996265
            ],
            [
              152.19842076002388,
              -32.74064906997154
            ],
            [
              152.1982920200407,
              -32.740594920021934
            ],
            [
              152.19814181003673,
              -32.740585900027455
            ],
            [
              152.197916510041,
              -32.74069418997071
            ],
            [
              152.19777703000238,
              -32.74064004002432
            ],
            [
              152.19736934005016,
              -32.74082053004385
            ],
            [
              152.19685434996447,
              -32.74066710998601
            ],
            [
              152.19669341999813,
              -32.74073931002499
            ],
            [
              152.19691873005164,
              -32.740820530029424
            ],
            [
              152.19673633996118,
              -32.74087467000623
            ],
            [
              152.19606042001655,
              -32.740748330035736
            ],
            [
              152.1959102199644,
              -32.74085661995906
            ],
            [
              152.19589041999197,
              -32.74094987001161
            ],
            [
              152.19444927999248,
              -32.74050550997076
            ],
            [
              152.19442963998475,
              -32.74044151002045
            ],
            [
              152.19370008005157,
              -32.73991809003927
            ],
            [
              152.19358205998384,
              -32.73985491998878
            ],
            [
              152.1935069599682,
              -32.73991808998736
            ],
            [
              152.19330311001988,
              -32.739809800005105
            ],
            [
              152.1929812399689,
              -32.73983686995904
            ],
            [
              152.19265937997037,
              -32.73977369995489
            ],
            [
              152.19216585000632,
              -32.739900039990445
            ],
            [
              152.19166159999574,
              -32.740188820028955
            ],
            [
              152.19155430999604,
              -32.740576870022856
            ],
            [
              152.19160794999243,
              -32.741028090008854
            ],
            [
              152.19167401002647,
              -32.741192249995215
            ],
            [
              152.19166964004637,
              -32.74123337999027
            ],
            [
              152.1917169600458,
              -32.74129897995726
            ],
            [
              152.1918171599775,
              -32.74154799002101
            ],
            [
              152.1918171599734,
              -32.741719960003536
            ],
            [
              152.19181179995587,
              -32.741740999964954
            ],
            [
              152.19167671004726,
              -32.7418633699958
            ],
            [
              152.19166225998316,
              -32.741871370043945
            ],
            [
              152.1907710999503,
              -32.74222830997056
            ],
            [
              152.18948363998882,
              -32.742471960018676
            ],
            [
              152.1886038800217,
              -32.742471959992315
            ],
            [
              152.1877992200005,
              -32.742305010009716
            ],
            [
              152.1889740199886,
              -32.74288256003794
            ],
            [
              152.1898458900202,
              -32.743554779967326
            ],
            [
              152.18989227994865,
              -32.74361817995696
            ],
            [
              152.19000261000593,
              -32.743882319971185
            ],
            [
              152.18989133998002,
              -32.74417750000523
            ],
            [
              152.18985837997437,
              -32.74422824004213
            ],
            [
              152.18964457997419,
              -32.744452729992304
            ],
            [
              152.1895978399743,
              -32.744629299972345
            ],
            [
              152.1893227099575,
              -32.745052820005064
            ],
            [
              152.18926907003208,
              -32.74517915999973
            ],
            [
              152.1893119800351,
              -32.74535060997063
            ],
            [
              152.18912959005235,
              -32.74557620997713
            ],
            [
              152.18907595003876,
              -32.74585593999988
            ],
            [
              152.18859315003698,
              -32.74629810997296
            ],
            [
              152.18823910001828,
              -32.74684855997352
            ],
            [
              152.18817471996098,
              -32.74689366998168
            ],
            [
              152.1880352500318,
              -32.7468575799737
            ],
            [
              152.1879064999861,
              -32.746992930037536
            ],
            [
              152.18763827999416,
              -32.747534349998894
            ],
            [
              152.18717694002447,
              -32.74758848999473
            ],
            [
              152.1868443499565,
              -32.747850179966264
            ],
            [
              152.18649030005173,
              -32.7487254600314
            ],
            [
              152.1867906999816,
              -32.749014210038226
            ],
            [
              152.18660830999352,
              -32.74896007002758
            ],
            [
              152.18644738003957,
              -32.74879764996388
            ],
            [
              152.18621134995138,
              -32.74903226003326
            ],
            [
              152.18599676995797,
              -32.74912249999064
            ],
            [
              152.18609333004338,
              -32.7491856599921
            ],
            [
              152.18613625004704,
              -32.74936612998111
            ],
            [
              152.1860826000125,
              -32.74947440997816
            ],
            [
              152.18597531000228,
              -32.74945636000621
            ],
            [
              152.18575001001162,
              -32.74910444997576
            ],
            [
              152.18550324003414,
              -32.74902323995652
            ],
            [
              152.18542814000216,
              -32.74914053999985
            ],
            [
              152.18531012998147,
              -32.74918565997884
            ],
            [
              152.18526720999668,
              -32.74913152000886
            ],
            [
              152.18512773004943,
              -32.74926687004412
            ],
            [
              152.18520284004083,
              -32.749230780042595
            ],
            [
              152.18521356998468,
              -32.7493390600186
            ],
            [
              152.1850633599516,
              -32.7494292899695
            ],
            [
              152.18505262996058,
              -32.74960073996149
            ],
            [
              152.1849560700081,
              -32.74961877999927
            ],
            [
              152.18500971999987,
              -32.749672930023245
            ],
            [
              152.1855032400394,
              -32.74956464002964
            ],
            [
              152.18582510996492,
              -32.749718039983954
            ],
            [
              152.18616842996437,
              -32.749799249966884
            ],
            [
              152.18635082005102,
              -32.749799249958464
            ],
            [
              152.1863830100342,
              -32.74967292996317
            ],
            [
              152.1865117499508,
              -32.74978120999831
            ],
            [
              152.18683361998544,
              -32.74980828004191
            ],
            [
              152.18699455001914,
              -32.75010604999136
            ],
            [
              152.1872520400378,
              -32.750196279996324
            ],
            [
              152.18731641995888,
              -32.75032261002617
            ],
            [
              152.187445160032,
              -32.75039479003658
            ],
            [
              152.18750953995746,
              -32.750566240038395
            ],
            [
              152.18760609997784,
              -32.7505391699813
            ],
            [
              152.1877133800209,
              -32.75101740000279
            ],
            [
              152.18820691000667,
              -32.751071539977055
            ],
            [
              152.18842148998752,
              -32.750900100043246
            ],
            [
              152.18871117003556,
              -32.75093619003174
            ],
            [
              152.18877554004277,
              -32.75085498000352
            ],
            [
              152.18874334998435,
              -32.75050306997152
            ],
            [
              152.18890429001135,
              -32.75042186004347
            ],
            [
              152.18917251004538,
              -32.75051210004372
            ],
            [
              152.18937634998096,
              -32.75068354001305
            ],
            [
              152.18961239004517,
              -32.75068354003119
            ],
            [
              152.18976259004575,
              -32.75089108003663
            ],
            [
              152.19006300002002,
              -32.7508549799638
            ],
            [
              152.19010591997593,
              -32.75101740001146
            ],
            [
              152.19040632001727,
              -32.75124298003734
            ],
            [
              152.19065309,
              -32.75098130999957
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [
          {
            "id": 115560,
            "user_email": "ian@giraffe.build",
            "project": 54267,
            "access_level": "admin"
          }
        ],
        "teamAccess": [],
        "orgAccess": [],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "Cursors",
        "id": "54584",
        "units": "feet",
        "Sale Price": 0,
        "Date of Contact": "2025-05-12T13:58:21.607Z",
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "qoz": "No",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-05-12T13:58:21.607Z",
        "org_id": 1,
        "mapboxStyle": "mapbox://styles/giraffetechnology/cm4gm178i00wl01rcfji9cb36",
        "created_at": "2025-05-12T13:58:29.273700+00:00",
        "updated_at": "2025-05-12T14:27:39.296412+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -74.16966823593316,
              40.734063296544804
            ],
            [
              -74.17060970081239,
              40.73226983621183
            ],
            [
              -74.17004071720578,
              40.73207841766293
            ],
            [
              -74.16939298187994,
              40.73191809476768
            ],
            [
              -74.1684757204118,
              40.73370248186595
            ],
            [
              -74.16966823593316,
              40.734063296544804
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6545,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 54584
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "Parking Bugs",
        "id": "56871",
        "units": "feet",
        "Sale Price": 0,
        "Date of Contact": "2025-06-12T13:21:41.931Z",
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "qoz": "No",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-06-12T13:21:41.931Z",
        "org_id": 1,
        "mapboxStyle": "mapbox://styles/giraffetechnology/ckmmsi3321dle17lmwtl4a9bz",
        "created_at": "2025-06-12T13:21:50.704141+00:00",
        "updated_at": "2025-06-12T13:56:35.670146+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -124.51578319283652,
              -8.787989228339171
            ],
            [
              -124.51576962397185,
              -8.791288425379816
            ],
            [
              -124.51163651573806,
              -8.79127158185075
            ],
            [
              -124.51165012109894,
              -8.787972384955673
            ],
            [
              -124.51578319283652,
              -8.787989228339171
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6592,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 56871
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "Singapore Layers",
        "id": "58021",
        "units": "meters",
        "Sale Price": 0,
        "Date of Contact": "2025-07-07T10:25:05.316Z",
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "qoz": "No",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-07-07T10:25:05.316Z",
        "created_at": "2025-07-07T10:25:12.623316+00:00",
        "updated_at": "2025-07-07T10:25:12.632758+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              103.76480713640922,
              1.4518739697281973
            ],
            [
              103.68528807636096,
              1.4072348582810434
            ],
            [
              103.64981034187713,
              1.2727009719191926
            ],
            [
              103.8596183233899,
              1.2390663747405029
            ],
            [
              103.94464254913385,
              1.3026659711869684
            ],
            [
              103.93607895805053,
              1.42741429007269
            ],
            [
              103.86940528462657,
              1.4543199232118837
            ],
            [
              103.76480713640922,
              1.4518739697281973
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6618,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 58021
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "Flow classification blocks",
        "id": "58146",
        "lineage": [
          "48113"
        ],
        "units": "meters",
        "mapboxStyle": "mapbox://styles/giraffetechnology/ckjuti36z000q1ao0j3d0dn34",
        "Sale Price": 0,
        "Date of Contact": "2025-07-09T00:43:04.313Z",
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "qoz": "No",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-07-09T00:43:04.313Z",
        "created_at": "2025-07-09T00:43:16.950890+00:00",
        "updated_at": "2025-07-09T00:43:16.959189+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              145.04741246396895,
              -37.94566656709974
            ],
            [
              145.0480423983858,
              -37.94220045880838
            ],
            [
              145.04782540332099,
              -37.941486186318826
            ],
            [
              145.04919200128825,
              -37.93475627009492
            ],
            [
              145.03460688450195,
              -37.932964235589225
            ],
            [
              145.0435412809956,
              -37.945180623379436
            ],
            [
              145.04741246396895,
              -37.94566656709974
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6623,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 58146
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "AMAZON BUG CLONE",
        "id": "58649",
        "lineage": [
          "57860"
        ],
        "units": "feet",
        "Sale Price": 0,
        "Date of Contact": "2025-07-22T17:08:22.653Z",
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "qoz": "No",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-07-22T17:08:22.653Z",
        "created_at": "2025-07-22T17:08:34.124167+00:00",
        "updated_at": "2025-07-22T17:08:34.133511+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -83.26126737631195,
              42.64717425972578
            ],
            [
              -83.25973816225464,
              42.64722916468983
            ],
            [
              -83.25982399303679,
              42.64873789996861
            ],
            [
              -83.26264768863612,
              42.64864024148447
            ],
            [
              -83.26256386952994,
              42.647128052202135
            ],
            [
              -83.26126737631195,
              42.64717425972578
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6632,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 58649
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "test-ian",
        "id": "58700",
        "units": "feet",
        "Sale Price": 0,
        "Date of Contact": "2025-07-23T17:47:06.725Z",
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "qoz": "No",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-07-23T17:47:06.725Z",
        "org_id": 1,
        "grid": {
          "origin": [
            -97.7201022952795,
            30.2413787825776
          ],
          "distance": 213.41231605861395,
          "bearing": 1.0676386007486494
        },
        "created_at": "2025-07-23T17:47:13.318284+00:00",
        "updated_at": "2025-09-10T21:42:04.359395+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": true,
        "shared_with_my_team": false,
        "shared_with_my_workspace": false
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -97.71923325946963,
              30.239607853877907
            ],
            [
              -97.7185761182769,
              30.24065581646062
            ],
            [
              -97.72010229527584,
              30.24137878249569
            ],
            [
              -97.72079966960861,
              30.240276952099858
            ],
            [
              -97.71977908768714,
              30.239790914286484
            ],
            [
              -97.71926678716598,
              30.239552239995316
            ],
            [
              -97.71923325946963,
              30.239607853877907
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [
          {
            "id": 115675,
            "user_email": "ian@giraffe.build",
            "project": 58700,
            "access_level": "admin"
          }
        ],
        "teamAccess": [],
        "orgAccess": [],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": [
          {
            "id": 392,
            "org": 1,
            "project": 58700,
            "as_template": true
          }
        ]
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "Austin Feasibility",
        "id": "58808",
        "units": "feet",
        "Sale Price": 0,
        "Date of Contact": "2025-07-25T16:19:39.646Z",
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "qoz": "No",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-07-25T16:19:39.646Z",
        "org_id": 1,
        "grid": {
          "origin": [
            -97.62693294858168,
            30.29235034671362
          ],
          "distance": 191.1826663124494,
          "bearing": 1.0641683315267063
        },
        "created_at": "2025-07-25T16:19:49.225471+00:00",
        "updated_at": "2025-08-27T20:31:54.842360+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": true,
        "shared_with_my_team": false,
        "shared_with_my_workspace": false
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -97.57591076002119,
              30.333244253364473
            ],
            [
              -97.57519796487223,
              30.333262194751565
            ],
            [
              -97.57480569183384,
              30.334258227595505
            ],
            [
              -97.57566466939285,
              30.334533133252474
            ],
            [
              -97.57571093683431,
              30.33454528681446
            ],
            [
              -97.57575787608546,
              30.334552810651527
            ],
            [
              -97.57579609798269,
              30.334549916806573
            ],
            [
              -97.57584772970644,
              30.334536027082237
            ],
            [
              -97.57587186988302,
              30.33452503076524
            ],
            [
              -97.5759040564657,
              30.33449609337354
            ],
            [
              -97.57591478525272,
              30.33447815221251
            ],
            [
              -97.57592417295069,
              30.334459053533156
            ],
            [
              -97.57592886684472,
              30.33441911989859
            ],
            [
              -97.57608778794325,
              30.33441622607636
            ],
            [
              -97.57608979941027,
              30.33444284834597
            ],
            [
              -97.5761038811768,
              30.33447583748592
            ],
            [
              -97.57612802098089,
              30.334504195816084
            ],
            [
              -97.57614411444716,
              30.334514034687444
            ],
            [
              -97.57618099444964,
              30.33452908198366
            ],
            [
              -97.57622323878216,
              30.334536026994762
            ],
            [
              -97.57626615478881,
              30.334537763161485
            ],
            [
              -97.57630772926926,
              30.334533133242385
            ],
            [
              -97.57634997311901,
              30.33452271581032
            ],
            [
              -97.57638886578016,
              30.33450708954795
            ],
            [
              -97.57642775777764,
              30.334486254625435
            ],
            [
              -97.57646396776076,
              30.334459053356127
            ],
            [
              -97.57677711555586,
              30.334173729978783
            ],
            [
              -97.57685087600552,
              30.334114119026562
            ],
            [
              -97.57693000125755,
              30.33405971636875
            ],
            [
              -97.57701382047068,
              30.33401110121131
            ],
            [
              -97.57710233261284,
              30.333968274086487
            ],
            [
              -97.57719285876172,
              30.333931233207103
            ],
            [
              -97.57728673439279,
              30.333899981351426
            ],
            [
              -97.57738396516099,
              30.333876252262975
            ],
            [
              -97.57723174980049,
              30.33321010677479
            ],
            [
              -97.57591076002119,
              30.333244253364473
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [
          {
            "id": 115823,
            "user_email": "ian@giraffe.build",
            "project": 58808,
            "access_level": "admin"
          }
        ],
        "teamAccess": [],
        "orgAccess": [],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [
          {
            "id": 517,
            "user": 29476,
            "project": 58808,
            "as_template": true
          }
        ],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "parking bugs aug 1",
        "id": "59197",
        "units": "meters",
        "Sale Price": 0,
        "Date of Contact": "2025-08-01T15:08:55.301Z",
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-08-01T15:08:55.301Z",
        "org_id": 1,
        "mapboxStyle": "mapbox://styles/giraffetechnology/ckmmsi3321dle17lmwtl4a9bz",
        "created_at": "2025-08-01T15:09:07.462593+00:00",
        "updated_at": "2025-08-01T15:09:53.929188+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.15574631700743,
              39.99387152090572
            ],
            [
              -75.15401680607675,
              39.99389560369476
            ],
            [
              -75.15405970902698,
              39.99571924567371
            ],
            [
              -75.15578926594341,
              39.99569516225188
            ],
            [
              -75.15574631700743,
              39.99387152090572
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6641,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 59197
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "Cul de Sac",
        "id": "59201",
        "units": "feet",
        "Sale Price": 0,
        "Date of Contact": "2025-08-01T16:35:36.902Z",
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-08-01T16:35:36.902Z",
        "created_at": "2025-08-01T16:35:44.370174+00:00",
        "updated_at": "2025-08-01T16:35:44.378911+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -111.89630515881117,
              33.41303784572574
            ],
            [
              -111.89629912377735,
              33.41458211308639
            ],
            [
              -111.89633533356046,
              33.4146117780354
            ],
            [
              -111.89717267236537,
              33.41461121843723
            ],
            [
              -111.89753025761117,
              33.41462409179203
            ],
            [
              -111.89963914460989,
              33.414624091814524
            ],
            [
              -111.90049209465772,
              33.4146162665136
            ],
            [
              -111.90049569415233,
              33.41303616673789
            ],
            [
              -111.89630515881117,
              33.41303784572574
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6642,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 59201
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "MF - BoE feaso",
        "units": "feet",
        "Sale Price": 0,
        "Date of Contact": "2025-08-01T19:15:01.736Z",
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-08-01T19:15:01.736Z",
        "id": "59205",
        "org_id": 1,
        "created_at": "2025-08-01T19:15:34.572205+00:00",
        "updated_at": "2025-08-01T20:51:40.979253+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": true,
        "shared_with_my_team": false,
        "shared_with_my_workspace": false
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -97.8656060993884,
              30.254861010815425
            ],
            [
              -97.86557391282771,
              30.254883021142085
            ],
            [
              -97.86477863829258,
              30.25576226965489
            ],
            [
              -97.86460965876692,
              30.25598932163043
            ],
            [
              -97.86446347790627,
              30.256227957103768
            ],
            [
              -97.86434412048435,
              30.256477015049153
            ],
            [
              -97.86426575592776,
              30.25669479848746
            ],
            [
              -97.86426365340671,
              30.256694798465944
            ],
            [
              -97.8642516055071,
              30.256734091081533
            ],
            [
              -97.86401823146015,
              30.25774431706732
            ],
            [
              -97.86386668670578,
              30.258183350304083
            ],
            [
              -97.86501735471536,
              30.25861427273813
            ],
            [
              -97.86522254347545,
              30.25948190388729
            ],
            [
              -97.86527886986545,
              30.260105112487906
            ],
            [
              -97.86514073590087,
              30.26051980961123
            ],
            [
              -97.86519572132474,
              30.260847627297622
            ],
            [
              -97.86563560360455,
              30.26165848021997
            ],
            [
              -97.86647915821816,
              30.261136060229276
            ],
            [
              -97.86742329599566,
              30.260738741069193
            ],
            [
              -97.8680402040042,
              30.260705148418804
            ],
            [
              -97.8684639929129,
              30.259991591481715
            ],
            [
              -97.868535071799,
              30.2595641505673
            ],
            [
              -97.86922305816235,
              30.258640915895572
            ],
            [
              -97.86923110488196,
              30.258141647793437
            ],
            [
              -97.86976888783074,
              30.257241568716516
            ],
            [
              -97.86919891985548,
              30.257128044963952
            ],
            [
              -97.86864504218765,
              30.256967025386977
            ],
            [
              -97.8683606872421,
              30.25681872767048
            ],
            [
              -97.86787792888252,
              30.256604441370822
            ],
            [
              -97.86756947680776,
              30.256441105531998
            ],
            [
              -97.86723554200259,
              30.25623606558744
            ],
            [
              -97.86678493002363,
              30.25590707296014
            ],
            [
              -97.8665260969341,
              30.255684655613177
            ],
            [
              -97.8656946122973,
              30.254879545815008
            ],
            [
              -97.86564633250096,
              30.254857535508105
            ],
            [
              -97.8656060993884,
              30.254861010815425
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [
          {
            "id": 116972,
            "user_email": "ian@giraffe.build",
            "project": 59205,
            "access_level": "admin"
          }
        ],
        "teamAccess": [],
        "orgAccess": [],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": [
          {
            "id": 389,
            "org": 1,
            "project": 59205,
            "as_template": true
          }
        ]
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "2646-48 N Hutchinson St",
        "id": "59311",
        "units": "meters",
        "Sale Price": 0,
        "Date of Contact": "2025-08-05T01:36:39.717Z",
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-08-05T01:36:39.717Z",
        "created_at": "2025-08-05T01:36:43.371073+00:00",
        "updated_at": "2025-08-05T01:36:43.379805+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.14843395753992,
              39.99362092516233
            ],
            [
              -75.14849876615054,
              39.991607879166054
            ],
            [
              -75.14612731595919,
              39.99140317122422
            ],
            [
              -75.1458482011083,
              39.99320626146314
            ],
            [
              -75.14843395753992,
              39.99362092516233
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6645,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 59311
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "Ian- test houston",
        "Sale Price": 0,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-08-06T02:07:22.310Z",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-08-06T02:07:22.310Z",
        "id": "59379",
        "org_id": 1,
        "units": "feet",
        "created_at": "2025-08-06T02:08:08.396678+00:00",
        "updated_at": "2025-09-10T18:53:01.649260+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": true,
        "shared_with_my_team": false,
        "shared_with_my_workspace": false
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -95.25421679118513,
              30.07038456620292
            ],
            [
              -95.25408804323865,
              30.070433312384726
            ],
            [
              -95.25395795693773,
              30.070478575641435
            ],
            [
              -95.25382653002161,
              30.070518035879278
            ],
            [
              -95.25369241834944,
              30.070554014983024
            ],
            [
              -95.2537836135705,
              30.07123644780803
            ],
            [
              -95.2547988294031,
              30.071227163176136
            ],
            [
              -95.25434285402281,
              30.07033001818395
            ],
            [
              -95.25421679118513,
              30.07038456620292
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [
          {
            "id": 116488,
            "user_email": "ian@giraffe.build",
            "project": 59379,
            "access_level": "admin"
          }
        ],
        "teamAccess": [],
        "orgAccess": [],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "solve around roads",
        "id": "59430",
        "units": "meters",
        "Sale Price": 0,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-08-06T16:24:13.440Z",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-08-06T16:24:13.440Z",
        "org_id": 1,
        "grid": {
          "origin": [
            -75.14182940125465,
            39.993928980616744
          ],
          "distance": 168.80909236376738,
          "bearing": 1.407266712006802
        },
        "created_at": "2025-08-06T16:24:21.707710+00:00",
        "updated_at": "2025-08-07T17:29:59.900137+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": true,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.1462809512166,
              39.98990756312594
            ],
            [
              -75.14669026432985,
              39.98778669995218
            ],
            [
              -75.14249164012759,
              39.987340534376784
            ],
            [
              -75.14197683394364,
              39.98947434337779
            ],
            [
              -75.1462809512166,
              39.98990756312594
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [
          {
            "id": 116663,
            "user_email": "ian@giraffe.build",
            "project": 59430,
            "access_level": "edit"
          }
        ],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6650,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 59430
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "Demo",
        "id": "59526",
        "units": "feet",
        "Sale Price": 0,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-08-07T14:58:53.219Z",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-08-07T14:58:53.219Z",
        "org_id": 1,
        "grid": {
          "origin": [
            -75.15016302466393,
            39.98874741932849
          ],
          "distance": 25.00000000379009,
          "bearing": -0.16449436211384028
        },
        "created_at": "2025-08-07T14:59:01.244858+00:00",
        "updated_at": "2025-08-07T15:25:43.260714+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": true,
        "shared_with_my_team": false,
        "shared_with_my_workspace": false
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.14989057101936,
              39.990146110355454
            ],
            [
              -75.15019174489392,
              39.98870003959556
            ],
            [
              -75.14869733385403,
              39.988520051162766
            ],
            [
              -75.14838495341444,
              39.98995562883232
            ],
            [
              -75.14989057101936,
              39.990146110355454
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [
          {
            "id": 116655,
            "user_email": "ian@giraffe.build",
            "project": 59526,
            "access_level": "edit"
          }
        ],
        "teamAccess": [],
        "orgAccess": [],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "NSW Project Template",
        "id": "59548",
        "units": "meters",
        "Sale Price": 0,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-08-07T23:40:37.174Z",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-08-07T23:40:37.174Z",
        "org_id": 1,
        "created_at": "2025-08-07T23:40:47.570100+00:00",
        "updated_at": "2025-08-07T23:56:13.030411+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              151.200967541502,
              -33.86320724365908
            ],
            [
              151.20149972176586,
              -33.87493876751499
            ],
            [
              151.2130014589518,
              -33.876710217513384
            ],
            [
              151.2120321235854,
              -33.864128938328726
            ],
            [
              151.200967541502,
              -33.86320724365908
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6651,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 59548
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": [
          {
            "id": 393,
            "org": 1,
            "project": 59548,
            "as_template": true
          }
        ]
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "801 Texas Ave",
        "Sale Price": 5,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-08-08T21:35:35.268Z",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-08-08T21:35:35.268Z",
        "id": "59614",
        "org_id": 1,
        "created_at": "2025-08-08T21:35:38.909723+00:00",
        "updated_at": "2025-08-08T21:36:37.098229+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": true,
        "shared_with_my_team": false,
        "shared_with_my_workspace": false
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -95.36297500138103,
              29.761243358080407
            ],
            [
              -95.36362677808759,
              29.761636861961346
            ],
            [
              -95.36408275374113,
              29.761061740396162
            ],
            [
              -95.3634309769071,
              29.76066823439725
            ],
            [
              -95.36297500138103,
              29.761243358080407
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [
          {
            "id": 116753,
            "user_email": "ian@giraffe.build",
            "project": 59614,
            "access_level": "admin"
          }
        ],
        "teamAccess": [],
        "orgAccess": [],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "402 Travis St",
        "Sale Price": 5,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-08-08T21:35:43.445Z",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-08-08T21:35:43.445Z",
        "id": "59615",
        "org_id": 1,
        "created_at": "2025-08-08T21:35:46.066855+00:00",
        "updated_at": "2025-08-08T21:36:37.055257+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": true,
        "shared_with_my_team": false,
        "shared_with_my_workspace": false
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -95.36238759752571,
              29.761990781236808
            ],
            [
              -95.36303937431336,
              29.762384282186424
            ],
            [
              -95.3634980321039,
              29.76180683649575
            ],
            [
              -95.36336660380856,
              29.76172999862539
            ],
            [
              -95.3633639216651,
              29.761734655461296
            ],
            [
              -95.36284089085403,
              29.76141799027607
            ],
            [
              -95.36238759752571,
              29.761990781236808
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [
          {
            "id": 116754,
            "user_email": "ian@giraffe.build",
            "project": 59615,
            "access_level": "admin"
          }
        ],
        "teamAccess": [],
        "orgAccess": [],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "Market Square Park",
        "Sale Price": 5,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-08-08T21:35:51.777Z",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-08-08T21:35:51.777Z",
        "id": "59616",
        "org_id": 1,
        "created_at": "2025-08-08T21:35:54.020231+00:00",
        "updated_at": "2025-08-08T21:36:37.096876+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": true,
        "shared_with_my_team": false,
        "shared_with_my_workspace": false
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -95.36178678275839,
              29.762747512311577
            ],
            [
              -95.36244392405165,
              29.763143338529847
            ],
            [
              -95.36289989951638,
              29.76256356892215
            ],
            [
              -95.36224275826012,
              29.762170068741252
            ],
            [
              -95.36178678275839,
              29.762747512311577
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [
          {
            "id": 116755,
            "user_email": "ian@giraffe.build",
            "project": 59616,
            "access_level": "admin"
          }
        ],
        "teamAccess": [],
        "orgAccess": [],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "HongKong Template",
        "id": "59670",
        "units": "meters",
        "Sale Price": 0,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-08-11T04:26:14.841Z",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-08-11T04:26:14.841Z",
        "created_at": "2025-08-11T04:26:21.194363+00:00",
        "updated_at": "2025-08-11T04:26:21.206534+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              114.14999385333897,
              22.327549852120583
            ],
            [
              114.13297024299015,
              22.305573484408868
            ],
            [
              114.13737322001515,
              22.272015749022586
            ],
            [
              114.16959126227249,
              22.26064309906981
            ],
            [
              114.21380825004974,
              22.273825293546082
            ],
            [
              114.20669703901751,
              22.3246170382008
            ],
            [
              114.14999385333897,
              22.327549852120583
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6654,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 59670
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": [
          {
            "id": 394,
            "org": 1,
            "project": 59670,
            "as_template": true
          }
        ]
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "HK Data Center - F6G9+X4 Ting Kok ",
        "Sale Price": 0,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-08-11T04:31:53.215Z",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-08-11T04:31:53.215Z",
        "id": "59672",
        "org_id": 1,
        "units": "meters",
        "grid": {
          "origin": [
            114.22443563727194,
            22.46993888977768
          ],
          "distance": 4.999999923238594,
          "bearing": 1.0108552184387705
        },
        "created_at": "2025-08-11T04:32:13.831291+00:00",
        "updated_at": "2025-08-11T05:36:50.971101+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              114.22444313492511,
              22.469950589565688
            ],
            [
              114.22508984112466,
              22.470900426569244
            ],
            [
              114.22493934626733,
              22.47098787372753
            ],
            [
              114.22486022101833,
              22.471033727028964
            ],
            [
              114.22459065913829,
              22.47106966614283
            ],
            [
              114.22430500412072,
              22.47101142005254
            ],
            [
              114.22399654980516,
              22.470840399480853
            ],
            [
              114.22400459639107,
              22.470761086006164
            ],
            [
              114.22405019404242,
              22.47060369656975
            ],
            [
              114.22401934865438,
              22.470380625794707
            ],
            [
              114.22384232306352,
              22.47019473332644
            ],
            [
              114.22367200253923,
              22.46992952556137
            ],
            [
              114.2236492038034,
              22.469550302963956
            ],
            [
              114.22414273036364,
              22.469492056270923
            ],
            [
              114.22444313492511,
              22.469950589565688
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6653,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 59672
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "Rattlesnake Key",
        "id": "60083",
        "lineage": [
          "18754"
        ],
        "units": "feet",
        "mapboxStyle": "mapbox://styles/giraffetechnology/cm3nwj4vd00f401sq43ha04r4",
        "Sale Price": 0,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-08-15T19:47:06.100Z",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-08-15T19:47:06.100Z",
        "created_at": "2025-08-15T19:47:27.237935+00:00",
        "updated_at": "2025-08-15T19:47:27.247152+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": true,
        "shared_with_my_team": false,
        "shared_with_my_workspace": false
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -82.6352462168738,
              27.591496963683895
            ],
            [
              -82.6336614947295,
              27.545266558285988
            ],
            [
              -82.58388681281836,
              27.553249717928807
            ],
            [
              -82.57653946469264,
              27.58383581215415
            ],
            [
              -82.61378043509488,
              27.585048863478022
            ],
            [
              -82.62919545959386,
              27.593029129756644
            ],
            [
              -82.6352462168738,
              27.591496963683895
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [
          {
            "id": 117548,
            "user_email": "ian@giraffe.build",
            "project": 60083,
            "access_level": "edit"
          }
        ],
        "teamAccess": [],
        "orgAccess": [],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "Sydney parcel test - ian",
        "id": "60194",
        "units": "meters",
        "Sale Price": 0,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-08-18T22:54:03.734Z",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-08-18T22:54:03.735Z",
        "created_at": "2025-08-18T22:54:53.856839+00:00",
        "updated_at": "2025-08-18T22:54:53.865769+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": true,
        "shared_with_my_team": false,
        "shared_with_my_workspace": false
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              151.21640805100995,
              -33.877588821417056
            ],
            [
              151.2164452671493,
              -33.87743572297228
            ],
            [
              151.2157918140125,
              -33.877333009216784
            ],
            [
              151.21575057494226,
              -33.87749445625481
            ],
            [
              151.21640603991892,
              -33.877596613248386
            ],
            [
              151.21640805100995,
              -33.877588821417056
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [
          {
            "id": 117479,
            "user_email": "ian@giraffe.build",
            "project": 60194,
            "access_level": "admin"
          }
        ],
        "teamAccess": [],
        "orgAccess": [],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "Flow Builder Training",
        "id": "60551",
        "units": "feet",
        "Sale Price": 0,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-08-26T15:01:52.395Z",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-08-26T15:01:52.395Z",
        "org_id": 1,
        "mapboxStyle": "mapbox://styles/giraffetechnology/ckmmsi3321dle17lmwtl4a9bz",
        "created_at": "2025-08-26T15:02:06.280360+00:00",
        "updated_at": "2025-08-26T15:02:39.222288+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -74.88826899413593,
              40.19859970372579
            ],
            [
              -74.88845043246897,
              40.19466901140691
            ],
            [
              -74.88316669425822,
              40.19466900345105
            ],
            [
              -74.88316653164685,
              40.19859969204121
            ],
            [
              -74.88826899413593,
              40.19859970372579
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6683,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 60551
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "Austin Feaso Demo",
        "id": "61486",
        "lineage": [
          "58808"
        ],
        "units": "feet",
        "Sale Price": 0,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-09-09T16:45:59.379Z",
        "Color": "white",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "Offer Made",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-09-09T16:45:59.379Z",
        "org_id": 1,
        "created_at": "2025-09-09T16:46:09.145999+00:00",
        "updated_at": "2025-09-23T19:50:27.115357+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": true,
        "shared_with_my_team": false,
        "shared_with_my_workspace": false
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -97.67495401185516,
              30.222035868442692
            ],
            [
              -97.6749540120629,
              30.22203586853288
            ],
            [
              -97.67456375073316,
              30.22238061780038
            ],
            [
              -97.6742915064136,
              30.222221859531384
            ],
            [
              -97.67399378139909,
              30.223046357033013
            ],
            [
              -97.67365783452055,
              30.223435717127792
            ],
            [
              -97.67402126816393,
              30.223745113161645
            ],
            [
              -97.67448194365186,
              30.22414953961059
            ],
            [
              -97.67465695741126,
              30.224290333346843
            ],
            [
              -97.67503716354582,
              30.2243019214266
            ],
            [
              -97.67487066819245,
              30.225093534415006
            ],
            [
              -97.67523282447048,
              30.22477249806445
            ],
            [
              -97.67590217294597,
              30.225339038609143
            ],
            [
              -97.67735458949383,
              30.224076535114342
            ],
            [
              -97.67683088784902,
              30.223636769785163
            ],
            [
              -97.67666392017229,
              30.22378277920797
            ],
            [
              -97.67644129694732,
              30.223587520627426
            ],
            [
              -97.67660424117591,
              30.223444408095705
            ],
            [
              -97.6757379251144,
              30.222704970529236
            ],
            [
              -97.67592027774604,
              30.22253995547008
            ],
            [
              -97.67495405963723,
              30.22203589342988
            ],
            [
              -97.67495402099603,
              30.222035860414234
            ],
            [
              -97.67495401185516,
              30.222035868442692
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [
          {
            "id": 119033,
            "user_email": "ian@giraffe.build",
            "project": 61486,
            "access_level": "admin"
          }
        ],
        "teamAccess": [],
        "orgAccess": [],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": [
          {
            "id": 406,
            "org": 1,
            "project": 61486,
            "as_template": true
          }
        ]
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "Answers",
        "id": "61550",
        "units": "feet",
        "Sale Price": 0,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-09-10T17:36:54.050Z",
        "Color": "white",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-09-10T17:36:54.050Z",
        "org_id": 1,
        "mapboxStyle": "mapbox://styles/giraffetechnology/ckmmsi3321dle17lmwtl4a9bz",
        "created_at": "2025-09-10T17:37:01.906830+00:00",
        "updated_at": "2025-09-10T17:37:30.033006+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": false,
        "shared_with_my_team": false,
        "shared_with_my_workspace": true
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.17043830229612,
              39.95501664606502
            ],
            [
              -75.1708777444138,
              39.95024442435067
            ],
            [
              -75.1604604847608,
              39.9498681174274
            ],
            [
              -75.1606106884654,
              39.95498374934948
            ],
            [
              -75.17043830229612,
              39.95501664606502
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [],
        "teamAccess": [],
        "orgAccess": [
          {
            "id": 6688,
            "org": 1,
            "org_name": "Giraffe Team",
            "access_level": "view",
            "project": 61550
          }
        ],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "ian - test 2",
        "id": "61557",
        "units": "meters",
        "Sale Price": 0,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-09-10T19:12:48.982Z",
        "Color": "white",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-09-10T19:12:48.982Z",
        "created_at": "2025-09-10T19:12:51.951626+00:00",
        "updated_at": "2025-09-10T19:12:51.961635+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": true,
        "shared_with_my_team": false,
        "shared_with_my_workspace": false
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -97.74478971613257,
              30.27150949626936
            ],
            [
              -97.74757886840847,
              30.267915310024875
            ],
            [
              -97.74262114715629,
              30.26813521868119
            ],
            [
              -97.74037684987913,
              30.271509708184812
            ],
            [
              -97.74478971613257,
              30.27150949626936
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [
          {
            "id": 119125,
            "user_email": "ian@giraffe.build",
            "project": 61557,
            "access_level": "admin"
          }
        ],
        "teamAccess": [],
        "orgAccess": [],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "Wrap revision",
        "id": "61605",
        "units": "feet",
        "Sale Price": 0,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-09-11T16:40:12.359Z",
        "Color": "white",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-09-11T16:40:12.359Z",
        "org_id": 1,
        "mapboxStyle": "mapbox://styles/giraffetechnology/ckmmsi3321dle17lmwtl4a9bz",
        "created_at": "2025-09-11T16:40:24.322234+00:00",
        "updated_at": "2025-09-11T16:41:03.450049+00:00",
        "org_name": "Giraffe Team",
        "shared_with_me": true,
        "shared_with_my_team": false,
        "shared_with_my_workspace": false
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.16637077701498,
              39.95497003239754
            ],
            [
              -75.16677855028317,
              39.95391732141931
            ],
            [
              -75.16485772357248,
              39.95355544827822
            ],
            [
              -75.16466456781387,
              39.95469863189871
            ],
            [
              -75.16637077701498,
              39.95497003239754
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [
          {
            "id": 119184,
            "user_email": "ian@giraffe.build",
            "project": 61605,
            "access_level": "edit"
          }
        ],
        "teamAccess": [],
        "orgAccess": [],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    },
    {
      "properties": {
        "name": "bugz",
        "id": "61869",
        "units": "meters",
        "Sale Price": 0,
        "Price": 0,
        "Price per Sq Ft": 0,
        "Lot Size": 0,
        "Quality Opportunity Zone?": "No",
        "Date of Contact": "2025-09-18T19:10:14.262Z",
        "Color": "white",
        "City": "San Antonio",
        "County": "Bexar",
        "Wetlands Coverage?": false,
        "Flood Risk?": false,
        "Number of Units": 0,
        "Hard Costs": 0,
        "Project NOI": 0,
        "Return on Costs": 0,
        "Comments": 0,
        "Project Type": 0,
        "Site Plan": "",
        "services provided": "",
        "Total Square Footage": 0,
        "Average Rent": 0,
        "% Leased": 0,
        "Floor Plan": "",
        "Status": "",
        "Assigned To": "Business Development Mgr",
        "Pursuit": true,
        "Last Sold Value": "",
        "Land Use": "",
        "Last Sold Date": "2025-09-18T19:10:14.262Z",
        "created_at": "2025-09-18T19:10:22.278536+00:00",
        "updated_at": "2025-09-18T19:10:22.286841+00:00",
        "org_name": "Giraffe Team",
        "org_id": 1,
        "shared_with_me": true,
        "shared_with_my_team": false,
        "shared_with_my_workspace": false
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -97.72010176065814,
              30.24141863242484
            ],
            [
              -97.72055687979444,
              30.24036698822684
            ],
            [
              -97.71926845666856,
              30.23958113812553
            ],
            [
              -97.71828885624633,
              30.24084847586097
            ],
            [
              -97.72010176065814,
              30.24141863242484
            ]
          ]
        ]
      },
      "type": "Feature",
      "_permissions": {
        "userAccess": [
          {
            "id": 119504,
            "user_email": "ian@giraffe.build",
            "project": 61869,
            "access_level": "admin"
          }
        ],
        "teamAccess": [],
        "orgAccess": [],
        "orgAdmin": true,
        "fullPermissions": false,
        "maxPermission": "admin"
      },
      "_sharingDetails": {
        "user": [],
        "team": [],
        "org": []
      },
      "_isSpace": false
    }
  ]
}
```

"Get Map View":
```
{
  "bounds": [
    [
      -97.72007843318272,
      30.239387976323385
    ],
    [
      -97.71929735469875,
      30.242815140411523
    ]
  ],
  "zoom": 18.175642437687078,
  "center": [
    -97.7196878939427,
    30.24046551548861
  ],
  "padding": {
    "top": 200,
    "bottom": 200,
    "left": 200,
    "right": 200
  }
}
```

"Get Selected Features":
{this simply returns a json of the selected features}

"Explore Layer Types":
```
[
  {
    "id": 769997,
    "project": 58700,
    "group": null,
    "opacity": 1,
    "order": null,
    "layer": 75,
    "layer_full": {
      "id": 75,
      "name": "Satellite",
      "public": true,
      "protected": false,
      "description": "Satellite from Mapbox",
      "tags": [
        "Global",
        "Basemap"
      ],
      "meta": null,
      "data_date": null,
      "default_group": "Basemap",
      "layer_type": 0,
      "created_at": "2019-10-12T03:02:25.708059+00:00",
      "org_id": 1,
      "org_name": null,
      "style": {
        "id": "Satellite",
        "type": "raster",
        "paint": {},
        "layout": {},
        "source": {
          "url": "mapbox://mapbox.satellite",
          "type": "raster"
        }
      },
      "vector_style": null,
      "vector_source": null
    }
  },
  {...},
]
  ```

  "Deep Data Layer Analysis":
  ```
  ...
   [
   {
    "id": 817978,
    "project": 58700,
    "group": null,
    "opacity": 1,
    "order": null,
    "layer": 36260,
    "layer_full": {
      "id": 36260,
      "name": "Buffer of Runways",
      "public": false,
      "protected": false,
      "description": "name: Buffer of Runways\ngeometryType: esriGeometryPolygon",
      "tags": null,
      "meta": null,
      "data_date": null,
      "default_group": "Esri FeatureServer",
      "layer_type": 2,
      "created_at": "2025-09-16T19:37:52.538599+00:00",
      "org_id": 1,
      "org_name": null,
      "style": null,
      "vector_style": {
        "mainColor": {
          "scaleFunc": "scaleOrdinal",
          "paletteMap": [
            {
              "color": "rgba(0, 255, 255, 255)",
              "value": "1.5"
            },
            {
              "color": "rgba(0, 170, 255, 255)",
              "value": "3"
            },
            {
              "color": "rgba(0, 85, 255, 255)",
              "value": "4"
            },
            {
              "color": "rgba(0, 0, 255, 255)",
              "value": "5"
            }
          ],
          "propertyKey": "BUFF_DIST",
          "fallbackColor": "rgba(0, 0, 0, 0.3)"
        },
        "mainLayer": "fill",
        "sourceLayer": "geojsonLayer",
        "sortBy": []
      },
      "vector_source": {
        "type": "vector",
        "tiles": [
          "https://layers-node-ehcce5pxxq-ts.a.run.app/featureServer/{z}/{x}/{y}/https%3A%2F%2Fservices6.arcgis.com%2FssFJjBXIUyZDrSYZ%2FArcGIS%2Frest%2Fservices%2FBuffer%2520of%2520Runways%2FFeatureServer%2F0%2Fquery%3Fwhere%3D1%3D1%26geometry%3D%7Bbbox-epsg-3857%7D%26geometryType%3DesriGeometryEnvelope%26inSR%3D3857%26spatialRel%3DesriSpatialRelIntersects%26returnGeodetic%3Dfalse%26outFields%3D*%26returnGeometry%3Dtrue%26returnCentroid%3Dfalse%26featureEncoding%3DesriDefault%26multipatchOption%3DxyFootprint%26applyVCSProjection%3Dfalse%26returnIdsOnly%3Dfalse%26returnUniqueIdsOnly%3Dfalse%26returnCountOnly%3Dfalse%26returnExtentOnly%3Dfalse%26returnQueryGeometry%3Dfalse%26returnDistinctValues%3Dfalse%26cacheHint%3Dfalse%26returnZ%3Dfalse%26returnM%3Dfalse%26returnExceededLimitFeatures%3Dtrue%26f%3Dgeojson"
        ]
      }
    }
  }
  ...
   ]
  ```
  