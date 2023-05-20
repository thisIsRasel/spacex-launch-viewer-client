const SpaceXApiBaseUrl = process.env.REACT_APP_SPACEX_API; 

export async function getUpcomingLaunches(pageNumber = 1) {
    try {
        const response = await fetch(`${SpaceXApiBaseUrl}/spacex/launches/upcoming?pageNumber=${pageNumber}`);
        return await response.json();
    } catch (error) {
        return [];
    }
}

export async function getPastLaunches(pageNumber = 1) {
    try {
        const response = await fetch(`${SpaceXApiBaseUrl}/spacex/launches/past?pageNumber=${pageNumber}`);
        return await response.json();
    } catch (error) {
        return [];
    }
}