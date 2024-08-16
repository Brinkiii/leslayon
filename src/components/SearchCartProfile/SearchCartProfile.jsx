import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./SearchCartProfile.css";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchCartProfile() {
  return (
    <>
      <div className="container-search">
        <div className="group">
          <SearchIcon className="icon" />
          <input placeholder="search" type="search" className="input" />
        </div>
        <a href="/">
          <ShoppingCartOutlinedIcon />
        </a>
        <a href="/">
          <PersonOutlineOutlinedIcon />
        </a>
      </div>
    </>
  );
}
