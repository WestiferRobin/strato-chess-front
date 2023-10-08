import { Box, Stack } from "@mui/material";
import Chessboard from "../board/Chessboard";
import StatSheet from "../sheet/StatSheet";

const playerName = "Wes"
const aiName = "Alpha"

const allyPrimaryColor = 'cyan';
const allySecondaryColor = 'black';

const enemyPrimaryColor = 'red';
const enemySecondaryColor = 'black';

const ClassicView = () => {

    const renderTitle = () => {
        return <h1 style={{color: "white", backgroundColor: "grey", height: "5vh"}}>Strato Chess! {`${playerName} vs ${aiName}`}</h1>
    }

    const renderSheet = (ownerName, primaryColor, secondaryColor) => {
        return <StatSheet ownerName={ownerName} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    }

    return <Box sx={{width: "100vw", height: "100vh"}}>
        {renderTitle()}
        <Stack direction="row" spacing={6} sx={{marginRight: 0, marginLeft: 3}}>
            {renderSheet(playerName, allyPrimaryColor, allySecondaryColor)}
            <Chessboard />
            {renderSheet(aiName, enemyPrimaryColor, enemySecondaryColor)}
        </Stack>
    </Box>
}

export default ClassicView;