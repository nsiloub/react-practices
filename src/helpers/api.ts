export type Planet = {
    id: "earth" | "venus" | "mars",
    name: "Earth" | "Venus" | "Mars"
};

export type Place = {
    id: string,
    name: string
};

export function fetchData(url: string): Promise<Planet[] | Place[] > {
    if(url === "/planets") {
        return fetchPlanets()
    } else if (url.startsWith("/planets/")) {
        const match  =  url.match(/^\/planets\/([\w-]+)\/places(\/)?$/);
        if(!match || !match[1] || !match[1].length) {
            throw Error(`Expected URL like "/planets/earth/places". Received: " ${url} .`);
        }
        return fetchPlaces(match[1] as Planet["id"]);
    } else {
        throw Error(`Expected URL like "/planets" or "/planets/earth/places/". Received ${url} .`)
    }
};

async function fetchPlanets(): Promise<Planet[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{
                id: "earth",
                name: "Earth"
            }, {
                id: "mars",
                name:"Mars"
            }, {
                id: "venus",
                name: "Venus"
            }])
        }, 1000);
    })
};

async function fetchPlaces(planetId: Planet["id"]): Promise<Place[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            switch(planetId) {
                case "earth": {
                    resolve([
                        {
                            id: 'lagos',
                            name: 'Lagos'
                        }, {
                            id: 'spain',
                            name: 'Spain'
                        }, {
                            id: 'vietnam',
                            name: 'Vietnam'        
                        }
                    ]);
                    break;
                }
                case "venus": {
                    resolve([
                        {
                            id: 'aurelia',
                            name: 'Aurelia'
                        }, {
                            id: 'diana-chasma',
                            name: 'Diana Chasma'
                        }, {
                            id: 'kumsong-vallis',
                            name: 'Kŭmsŏng Vallis'        
                        }
                    ])
                    break
                }
                case "mars": {
                    resolve([
                        {
                            id: 'aluminum-city',
                            name: 'Aluminum City'
                        }, {
                            id: 'new-new-york',
                            name: 'New New York'
                        }, {
                            id: 'vishniac',
                            name: 'Vishniac'
                        }
                    ]);
                    break;
                }
                default: {
                    throw Error(`Unknown planet ID: ${planetId}`);
                }
            }
        }, 1000);
    });
}