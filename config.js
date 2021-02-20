var config = {
    style: 'mapbox://styles/krejzifrik/cklcbt1553p2i17k426p7lfzm',
    accessToken: 'pk.eyJ1Ijoia3JlanppZnJpayIsImEiOiJjam5lbDltZDAwZzJ5M2tsZm11OHMwN3RwIn0.lauCZyv4NJYpuC1kdqLDSw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Operation Rösselsprung (part 1)',
    subtitle: 'Operation RÖSSELSPRUNG was a Second World War German operation conducted in Bosnia, which aimed at eliminating the leadership of the Partisan movement, namely Marshal Josip Broz Tito. It was a direct action raid, which involved an airborne (parachute and glider) assault by 500 SS Fallschirmjäger (Parachute) Battalion on the suspected site of Tito’s Headquarters and a subsequent linkup with the German XV Mountain Corps converging from all directions.',
    byline: 'By Sead Borovina (twitter: @CapitaineFuture)',
    footer: 'Sources: Desant na Drvar - Slavko Odic, Operation RÖSSELSPRUNG and the elimination of Tito, 25 May 1944: A failure in planning and intelligence support - Wayne D. Eyre',
    chapters: [
        {
            id: '1',
            alignment: 'right',
            hidden: false,
            title: 'The Rise of the Partisan Threat',
            image: '',
            description: 'Popular resistance to the occupation of Yugoslavia by the Germans and Italians emerged shortly after the incredibly rapid defeat of the country by two German armies and supporting Italian, Hungarian and Bulgarian forces in April of 1941. Yugoslavia was partitioned amongst the victors, and an extremely nationalist, Fascist government - NDH was established in Croatia and Bosnia. The Communists were the driving force behind the resistance organization to rise against the Axis. Although formally outlawed in pre-war Yugoslavia, members of the county’s Communist Party had gained experience fighting in Spain. Over the next three years the NOVJ (National Liberation Army of Yugoslavia), better known as the Partisans, grew from a small force of several thousand to an army of 300,000 that controlled large tracts of the country. The terrain was extremely well suited for guerrilla operations and very much favored the Partisans. <B>Map: Liberated territories in Yugoslavia, May 25th 1944.</B>',
            location: {
                center: [20.32326, 44.04678],
                zoom: 6.22,
                pitch: 0.00,
                bearing: 10.11,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'liberated-territories',
                    opacity: 1,
                },
                
                                
            ],
            onChapterExit: [
                {
                     layer: 'liberated-territories',
                     opacity: 0
                }
            ]
        },
        {
            id: '2',
            alignment: 'left',
            hidden: false,
            title: 'Elimination of Tito',
            image: './images/Tito-Potjernica.PNG',
            description: 'To Field Marshal Maximilian Freiherr von Weichs, who was not only the Commander of Army Group F responsible for Yugoslavia and Albania but also oversaw Luftwaffe General Alexander Löhr’s Army Group E in Greece, it was very apparent that he lacked the manpower and equipment to gain total victory in the field over the Partisan masses. He believed that the elimination of Tito, the personification of the Partisan movement and its center of gravity, would eliminate their will to fight. Hitler, who had personally ordered the elimination of Tito, shared this belief. The task to locate Tito was assumed by several German intelligence organizations, including SS special operations expert Major Otto Skorzeny, operating independently on Hitler’s direct orders, and elements of the Brandenburg Division, the Abwehr’s special operations arm. The Brandenburgers had been involved on the attack on Jajce and now had their agents looking for clues as to Tito’s new location. The detailed task went to the Brandenburg Lieutenant Kirchner and his troops, <B>Tito and his headquarters were discovered from several sources to be in Drvar</B>. The date was set - 25th of May - Tito’s birthday',
            location: {
                center: [16.38229, 44.37470],
                zoom: 14.49,
                pitch: 55.50,
                bearing: -56.29,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: 'factory',
                opacity: 1,
                },
                {
                layer: 'houses',
                opacity: 1,
                }

            ],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'right',
            hidden: false,
            title: 'Planning and Preparation',
            image: 'https://chancecontra.github.io/Drvar/images/Naredba.PNG',
            description: 'Planning for the operation began in earnest. Field Marshal von Weichs signed the order on 6 May, and balancing synchronization of the operation with operational security, General Lothar Rendulic issued the Second Panzer Army order for Operation RÖSSELSPRUNG two weeks later, on the 21st of May, allowing only three full days for subordinates to conduct battle procedure. Kurt Rybka, the 27-year-old SS Hauptsturmführer was in command of 500 SS Fallschirmjäger Battalion. Rybka received an outline of the operation on 20 May and more detailed orders the following day. They stated: <B> Drvar is most important logistics center for the Bandits. Probably following headquartes were to be found there: a) Tito’s HQ - most likely to be in the Old Market, b) English military mission in village Prnjavor, c) American military mission in village Trninic d) Russian military mission, 300 meters east from the crossroads. </B> The suspected location of Tito’s headquarters, was given the codename ‘Citadel’ and the important crossroads in town was entitled the ‘Western Cross’.',
            location: {
                center: [16.37420, 44.37012],
                zoom: 15.21,
                pitch: 70.00,
                bearing: 89.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: 'plan-hq-locations',
                opacity: 1,
                },
                {
                    layer: 'plan-hq-locations-txt',
                    opacity: 1,
                    },
                    {
                        layer: 'plan-locations',
                        opacity: 1,
                        },
                        {
                            layer: 'plan-locations-txt',
                            opacity: 1,
                            }

            ],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'left',
            hidden: false,
            title: 'Planning and Preparation - Bombardment',
            image: 'https://chancecontra.github.io/Drvar/images/Stuka.PNG',
            description: ' A heavy bombardment of Partisan positions in and around Drvar by Fliegerführer Kroatien (Air Command Croatia) aircraft was to precede a parachute and glider assault by 500 SS Fallschirmjäger Battalion whose task it was to destroy Tito and his headquarters. This bombardment was to begin at 0635 hours and consisted of five squadrons of Ju 87 Stuka dive-bombers, older He 46 medium bombers, and Italian made Ca 314 and Cr 42 medium-bombers. <B>Five bombing areas were designated in Drvar itself (A,B,C,D,E).</B>',
            location: {
                center: [16.38203, 44.37438],
                zoom: 15.21,
                pitch: 36.50,
                bearing: 65.60,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bombing-areas',
                    opacity: 1,
                },
                {
                    layer: 'bombing-areas-txt',
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: 'bombing-areas',
                    opacity: 0,
                },
                {
                    layer: 'bombing-areas-txt',
                    opacity: 0,
                },
            ]
        },
        {
            id: '5',
            alignment: 'left',
            hidden: false,
            title: 'Planning and Preparation - Paratroopers',
            image: '',
            description: 'After initial bombardment, air raid is planned to begin at 0700 hours. Rybka realizing there were not enough gliders or transport aircraft to deploy 500 SS in one lift, he devised a plan where 654 troops would conduct the initial assault at 0700 hours, and a further 220 would reinforce as a second wave some five hours later. The town was to be secured by 314 parachute troops. They were split into <B>Red (led by Rybka), Green, and Blue Groups</B> and were based on elements of the unit’s three rifle companies.',
            location: {
                center: [16.38764, 44.36851],
                zoom: 15.38,
                pitch: 37.50,
                bearing: 33.55,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'paradrop-zones',
                opacity: 0.3,
                },
                {
                    layer: 'paradrop-zones-txt',
                    opacity: 1,
                    }

            ],
            onChapterExit: [
                {
                    layer: 'paradrop-zones',
                    opacity: 0,
                    },
                    {
                        layer: 'paradrop-zones-txt',
                        opacity: 0,
                        }
            ]
        },
        {
            id: '6',
            alignment: 'right',
            hidden: false,
            title: 'Planning and Preparation - Gliders',
            image: 'https://chancecontra.github.io/Drvar/images/Glider.PNG',
            description: 'Following bombing of Drvar, alongside parachute assault, a glider assault by 500 SS Fallschirmjäger Battalion was to take place. 15 Glider landing areas were identified using aerial reconnaisance in previous days. Remaining members of the rifle companies and the heavy weapons company, were split into six assault groups for specific missions. ',
            location: {
                center: [16.36430, 44.37297],
                zoom: 13.56,
                pitch: 44.00,
                bearing: 90.40,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'landing-zones-txt',
                    opacity: 1,
                },
                {
                    layer: 'landing-zones',
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                layer: 'landing-zones-txt',
                opacity: 0,
            },
            {
                layer: 'landing-zones',
                opacity: 0,
            },]
        },
        {
            id: '7',
            alignment: 'left',
            hidden: false,
            title: 'Planning and Preparation - Panther Group',
            image: '',
            description: 'Panther Group of 110 soldiers, the largest, was to capture Citadel and destroy Tito’s headquarters.',
            location: {
                center: [16.38091, 44.37280],
                zoom: 17.63,
                pitch: 49.50,
                bearing: -40.85,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gliders-txt',
                    opacity: 1,
                },
                {
                    layer: 'gliders',
                    opacity: 0.3,
                },
            ],
            onChapterExit: []
        },
        {
            id: '8',
            alignment: 'left',
            hidden: false,
            title: 'Planning and Preparation - Sturmer Group',
            image: '',
            description: 'Sturmer Group of 50 men was to destroy the Soviet military mission and later to connect with Panther, Red, Green and Draufgaegner Groups',
            location: {
                center: [16.38255, 44.3754],
                zoom: 17.63,
                pitch: 70.00,
                bearing: 47.15,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gliders-txt',
                    opacity: 1,
                },
                {
                    layer: 'gliders',
                    opacity: 0.3,
                },
            ],
            onChapterExit: []
        },
        {
            id: '9',
            alignment: 'left',
            hidden: false,
            title: 'Planning and Preparation - Draufgaenger Group',
            image: '',
            description: 'Draufgaenger Group was to capture the Western Cross and the suspected nearby Partisan communication facility, fortify defensive positions toward North, scout area on the other side of the river and connect with Panther and Sturmer groups.',
            location: {
                center: [16.37953, 44.37867],
                zoom: 17.05,
                pitch: 45.00,
                bearing: 47.71,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gliders-txt',
                    opacity: 1,
                },
                {
                    layer: 'german-plan',
                    opacity: 1,
                },
                {
                    layer: 'gliders',
                    opacity: 0.3,
                },
            ],
            onChapterExit: [
                {
                    layer: 'german-plan',
                    opacity: 0,
                },
            ]
        },
        {
            id: '10',
            alignment: 'left',
            hidden: false,
            title: 'Planning and Preparation - Greifer Group',
            image: '',
            description: 'Greifer Group of 40 soldiers was to destroy the British military mission, connect with Beisser Group and take defensive position at the big curve on the road to Bosansko Grahovo.',
            location: {
                center: [16.36798, 44.37035],
                zoom: 17.02,
                pitch: 70.00,
                bearing: -145.65,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gliders-txt',
                    opacity: 1,
                },
                {
                    layer: 'german-plan',
                    opacity: 1,
                },
                {
                    layer: 'gliders',
                    opacity: 0.3,
                },
            ],
            onChapterExit: [
                {
                    layer: 'german-plan',
                    opacity: 0,
                },
            ]
        },
        {
            id: '11',
            alignment: 'left',
            hidden: false,
            title: 'Planning and Preparation - Beisser Group',
            image: '',
            description: 'Beisser Group of 20 soldiers was to seize an outpost radio station, then assist Greifer group.',
            location: {
                center: [16.36697, 44.36726],
                zoom: 17.16,
                pitch: 70.00,
                bearing: 43.15,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gliders-txt',
                    opacity: 1,
                },
                {
                    layer: 'gliders',
                    opacity: 0.3,
                },
            ],
            onChapterExit: []
        },
        {
            id: '12',
            alignment: 'left',
            hidden: false,
            title: 'Planning and Preparation - Brecher Group',
            image: '',
            description: 'Brecher Group of 50 men was to destroy the U.S. military mission and to move and clear the area around Glider Landing Zone 16, eventually connecting with Panther group.',
            location: {
                center: [16.38300, 44.35787],
                zoom: 16.09,
                pitch: 70.00,
                bearing: -30.64,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gliders-txt',
                    opacity: 1,
                },
                {
                    layer: 'gliders',
                    opacity: 0.3,
                },
                {
                    layer: 'german-plan',
                    opacity: 1,
                },
                {
                    layer: 'landing-zones-txt',
                    opacity: 1,
                },
                {
                    layer: 'landing-zones',
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: 'landing-zones-txt',
                    opacity: 0,
                },
                {
                    layer: 'german-plan',
                    opacity: 0,
                },
                {
                    layer: 'landing-zones',
                    opacity: 0,
                },
            ]
        },
        {
            id: '13',
            alignment: 'left',
            hidden: false,
            title: 'Planning and Preparation - Red, Green & Blue',
            image: '',
            description: 'Paratroopers from the Red Group were to join Panther and Sturmer groups and support capture of Citadel. Blue Group - 100 men was to secure SE approach to Drvar and disable Partisan retreat through their zone of control. Green group (95 men) was to take control of East part of Drvar, taking the railroad bridge and connect with Blue group. ',
            location: {
                center: [16.39568, 44.36878],
                zoom: 15.68,
                pitch: 50.00,
                bearing: -101.89,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'paradrop-zones',
                opacity: 0.3,
                },
                {
                    layer: 'paradrop-zones-txt',
                    opacity: 1,
                    },
                    {
                        layer: 'german-plan',
                        opacity: 1,
                    },

            ],
            onChapterExit: [
                {
                    layer: 'paradrop-zones',
                    opacity: 0,
                    },
                    {
                        layer: 'paradrop-zones-txt',
                        opacity: 0,
                        },
                        {
                            layer: 'german-plan',
                            opacity: 0,
                        },
                    ]
        },
        {
            id: '14',
            alignment: 'right',
            hidden: false,
            title: 'Planning and Preparation - Partisan Disposition',
            image: 'https://chancecontra.github.io/Drvar/images/Drvar.PNG',
            description: 'German intelligence claimed about 12,000 Partisans were active in the area of operations.Immediately surrounding Drvar were the First (Nikola Tesla) and Six Proletarian Divisions of the First Proletarian Corps, with the Corps HQ based six kilometres to the east in Mokronoge. Of immediate concern was the Third Lika Brigade   of the First Division stationed five kilometers south of Drvar in Kamenica, whose four battalions of were the most potent reaction force. Within Drvar itself there was a mixed bag of military liaison missions, support and escort troops and both the Supreme Headquarters of the NOVJ and the Central Committee of the Yugoslav Communist Party. Concurrently to paratroopers attack, XV Corps elements, around 16,000 men would converge on Drvar from all directions, in order to linkup with 500 SS on the same day, 25 May 1944. <B>Speed, shock and surprise were key for the paratroopers of 500 SS to accomplish their mission.</B> ',
            location: {
                center: [16.38873, 44.36481],
                zoom: 12.97,
                pitch: 60.00,
                bearing: 11.03,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: 'paradrop-zones',
                opacity: 0.3,
                },
                {
                    layer: 'gliders',
                    opacity: 0.3,
                    },
                    {
                        layer: 'german-plan',
                        opacity: 1,
                    },
                    {
                        layer: 'partisan',
                        opacity: 0.5,
                    },
                    {
                        layer: 'partisan-txt',
                        opacity: 1,
                    },

            ],
            onChapterExit: [
                {
                    layer: 'paradrop-zones',
                    opacity: 0,
                    },
                    {
                        layer: 'gliders',
                        opacity: 0,
                        },
                    ]
        },
        {
            id: '15',
            alignment: 'right',
            hidden: false,
            title: 'The stage is set...',
            image: './images/desant-na-drvar.jpg',
            description: 'For security reasons, the Battalion’s soldiers were not briefed on the operation until several hours before it was launched, but preliminary moves began on 22 May as the unit, dressed in non-descript Wehrmacht uniforms for security reasons, was transported by truck to three assembly areas, Zrenjanin, Zagreb and Banja Luka. There they linked up with their Luftwaffe transport from Fliegerführer Kroatien, some of which had been brought in from France and Germany specifically for the operation. The 1st and 2nd Squadrons of Towing Group 1, and 2nd and 3rd Battalions of Air Landing Group 1, all with 10-passenger DFS 230 gliders and towed by either Hs 126 or Ju 87 (Stukas in a towing role) aircraft, would transport the glider-borne force. The 2nd Battalion of Transport Group 4, with about 40 Ju 52 transports, would deliver the parachute force. By 24 May, battle procedure was complete.',
            location: {
                center: [16.27281, 44.34279],
                zoom: 8.66,
                pitch: 60.00,
                bearing: 34.16,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'paradrop-zones',
                opacity: 0.3,
                },
                {
                    layer: 'gliders',
                    opacity: 0.3,
                    },
                    {
                        layer: 'flight-path',
                        opacity: 1,
                        },
                    {
                        layer: 'german-plan',
                        opacity: 1,
                    },
                    {
                        layer: 'partisan',
                        opacity: 0.5,
                    },
                                        {
                        layer: 'liberated-territories',
                        opacity: 1,
                    },
                    {
                        layer: 'partisan-txt',
                        opacity: 0,
                    },
                    {
                        layer: 'plan-hq-locations',
                        opacity: 0,
                        },
                        {
                            layer: 'plan-hq-locations-txt',
                            opacity: 0,
                            },
                            {
                                layer: 'plan-locations',
                                opacity: 0,
                                },
                                {
                                    layer: 'plan-locations-txt',
                                    opacity: 0,
                                    }

            ],
            onChapterExit: [
                {
                    layer: 'paradrop-zones',
                    opacity: 0,
                    },
                    {
                        layer: 'gliders',
                        opacity: 0,
                        },
                        {
                            layer: 'partisan-txt',
                            opacity: 0,
                        },
                        {
                            layer: 'plan-hq-locations',
                            opacity: 0,
                            },
                            {
                                layer: 'plan-hq-locations-txt',
                                opacity: 0,
                                },
                                {
                                    layer: 'plan-locations',
                                    opacity: 0,
                                    },
                                    {
                                        layer: 'plan-locations-txt',
                                        opacity: 0,
                                        },
                                        {
                                            layer: 'flight-path',
                                            opacity: 0,
                                            },
                    ]
        },
    ]
};
