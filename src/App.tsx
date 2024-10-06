import ArtPieces from "./components/ArtPieces";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { ChiArtwork } from "./interfaces/Art";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
`;

export default function App() {
    const [data, setData] = useState<ChiArtwork[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const ids = [129884, 27972, 75644, 24640, 135912, 180675, 144913, 27977, 129885];

            const artworksPromises = ids.map(async (id) => {
                const rawData = await fetch(
                    `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,image_id,date_display,place_of_origin`
                );
                const json = await rawData.json();
                return json.data;
            });

            const results = await Promise.all(artworksPromises);
            setData(results);
        }

        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return (
        <ParentDiv>
            <ArtPieces data={data} />
        </ParentDiv>
    );
}
