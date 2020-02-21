const dummyData = new Promise((resolve, reject) => {
    resolve({
        data: {
            copyright: "Paul Schmit",
            date: "2020-02-20",
            explanation: "On February 18, as civil twilight began in northern New Mexico skies, the International Space Station, a waning crescent Moon, and planet Mars for a moment shared this well-planned single field of view. From the photographer's location the sky had just begun to grow light, but the space station orbiting 400 kilometers above the Earth was already bathed in the morning sunlight. At 6:25am local time it took less than a second to cross in front of the lunar disk moving right to left in the composited successive frames. At the time, Mars itself had already emerged from behind the Moon following its much anticipated lunar occultation. The yellowish glow of the Red Planet is still in the frame at the upper right, beyond the Moon's dark edge.",
            hdurl: "https://apod.nasa.gov/apod/image/2002/ISS_Moon_Mars_composite.jpg",
            media_type: "image",
            service_version: "v1",
            title: "Trifecta at Twilight",
            url: "https://apod.nasa.gov/apod/image/2002/ISS_Moon_Mars_composite1024.jpg"
        }
    });
})

export default dummyData;