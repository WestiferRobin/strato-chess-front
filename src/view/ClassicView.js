import { Box, Button, Stack } from "@mui/material";
import Chessboard from "../components/board/Chessboard";
import StatSheet from "../components/sheet/StatSheet";
import PrismSelect from "../components/select/PrismSelect";
import { useClassicViewContext } from "../providers/ClassicViewProvider";
import { useAppContext } from "../providers/AppProvider";

const ClassicView = () => {
  const { user } = useAppContext();
  const { opponent, setOpponentByName } = useClassicViewContext();

  const renderTitle = () => {
    return (
      <h1 style={{ color: "black", backgroundColor: "grey", height: "5vh" }}>
        Strato Chess! {`${user.name} vs ${opponent.name}`}
      </h1>
    );
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
      <Stack direction="row" sx={{ justifyContent: "space-between", background: "grey" }}>
        {renderTitle()}
        <Stack direction="row">
          <PrismSelect defaultValue={opponent.name} onHandle={setOpponentByName} />
          <Button onClick={() => alert("game started")} variant="contained" color="success">
            Initialize Game
          </Button>
          <Button onClick={() => alert("all sessions cleared")} variant="contained" color="error">
            Clear Sessions
          </Button>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={1} sx={{ margin: 1, justifyContent: "space-between" }}>
        <StatSheet owner={user} />
        <div>
          <Chessboard white={user} black={opponent} />
        </div>
        <StatSheet owner={opponent} />
      </Stack>
    </Box>
  );
};

export default ClassicView;
