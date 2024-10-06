import styled from "styled-components";
import { ChiArtwork } from "../interfaces/Art.ts";

const AllArtworksDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding: 2vh 2vh;
    background-color: lightgrey;
`;

const SingleArtworkDiv = styled.div<{ hasImage: boolean }> `
    display: flex;
    flex-direction: column;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props) => (props.hasImage ? 'white' : 'yellow')};
    color: ${(props) => (props.hasImage ? 'black' : 'red')};
    font: Garamond, serif;
    font-size: calc(2px + 1vw);
    border-radius: 3px;
`;

const ContentDiv = styled.div `
    justify-content: center;
    margin-top: auto;
`;

const ArtworkImage = styled.img `
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    border-radius: 2px;
`;

export default function ArtPieces(props: { data: ChiArtwork[] }) {
    return (
        <AllArtworksDiv>
            {props.data.map((artwork) => {
                const imageUrl = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;

                return (
                    <SingleArtworkDiv key={artwork.id} hasImage={true}>
                        <ArtworkImage src={imageUrl} alt={`Image of ${artwork.title}`} />           
                        <ContentDiv>
                            <h3>{artwork.title}</h3>
                            <br/>
                            <p>Display Date: {artwork.date_display}</p>
                            <p>Place of Origin: {artwork.place_of_origin}</p>
                            <p>Artist: {artwork.artist_display}</p>
                        </ContentDiv>   
                    </SingleArtworkDiv>  
                );
            })}
        </AllArtworksDiv>
    );
}
