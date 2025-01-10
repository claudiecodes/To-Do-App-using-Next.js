import { handleDelete } from "@/actions";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteBtn({ _id }: { _id: string }) {
  return (
    <>
      <button
        className="hover:scale-125"
        onClick={() => {
          handleDelete(_id);
        }}
      >
        <DeleteIcon />
      </button>
    </>
  );
}
