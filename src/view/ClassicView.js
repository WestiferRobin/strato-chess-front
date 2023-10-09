import { Box, Stack } from "@mui/material";
import Chessboard from "../components/board/Chessboard";
import StatSheet from "../components/sheet/StatSheet";


const user = {
  name: "Wes",
  ranking: 800,
  theme: {
    primaryColor: "white",
    secondaryColor: "black"
  }
}

const opponent = {
  name: "Alpha",
  ranking: 800,
  theme: {
    primaryColor: "red",
    secondaryColor: "black"
  }
}

const ClassicView = () => {

  const renderTitle = () => {
      return <h1 style={{ color: "black", backgroundColor: "grey", height: "5vh" }}>Strato Chess! {`${user.name} vs ${opponent.name}`}</h1>
  }

  return <Box sx={{ width: "100vw", height: "97.5vh", backgroundColor: "black" }}>
      {renderTitle()}
      <Stack direction="row" spacing={1} sx={{ margin: 1, justifyContent: 'space-between', }}>
          <StatSheet owner={user} />
          <div >
            <Chessboard white={user} black={opponent} />
          </div>
          <StatSheet owner={opponent} />
      </Stack>
  </Box>
}
export default ClassicView;
