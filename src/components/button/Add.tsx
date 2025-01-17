import { Button } from "@mui/material";
import { ChangeBtn } from "../../interfaces";

const Add: React.FC<ChangeBtn> = ({ func }) => {
  return (
    <Button
      variant="contained"
      sx={{ width: 100, marginRight: 3, fontSize: 16, fontWeight: 700 }}
      onClick={func}
    >
      추가
    </Button>
  );
};

export default Add;
