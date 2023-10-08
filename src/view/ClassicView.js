import { Box, Stack } from "@mui/material";
import Chessboard from "../components/board/Chessboard";
import StatSheet from "../components/sheet/StatSheet";

const playerName = "Wes";
const aiName = "Alpha";

const allyPrimaryColor = 'cyan';
const allySecondaryColor = 'black';

const enemyPrimaryColor = 'red';
const enemySecondaryColor = 'black';

const ClassicView = () => {

    const renderTitle = () => {
        return <h1 style={{ color: "white", backgroundColor: "grey", height: "5vh" }}>Strato Chess! {`${playerName} vs ${aiName}`}</h1>
    }

    const renderSheet = (ownerName, primaryColor, secondaryColor) => {
        return <StatSheet ownerName={ownerName} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    }

    return <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "yellow" }}>
        {renderTitle()}
        <Stack direction="row" spacing={2} sx={{ margin: 3, justifyContent: 'space-between', }}> {/* Use justifyContent */}
            {renderSheet(playerName, allyPrimaryColor, allySecondaryColor)}
            <Chessboard />
            {renderSheet(aiName, enemyPrimaryColor, enemySecondaryColor)}
        </Stack>
    </Box>
}

export default ClassicView;
