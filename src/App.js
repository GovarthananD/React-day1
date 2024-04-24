import "./App.css";
import { data } from "./data";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function App() {
  return (
    <div className="App">
           {data.map((items) => {
        return (
          <div className="App">
            <div className="container">
              <div className="card">
                <h4>{items.plane}</h4>
                <h3>{items.price}</h3>
                <hr />
                <ul>
                  <li className={items.userIcon === true ? "no_blur" : "blur"}>
                    {items.userIcon === true ? <CheckIcon /> : <CloseIcon />}
                    {items.user}
                  </li>
                  <li                   
                  >
                    {items.storageIcon === true ? <CloseIcon /> : <CheckIcon />}
                    {items.storage}
                  </li>
                  <li> 
                    {items.publicIcon === true ? <CheckIcon /> : <CloseIcon />}
                    {items.public}</li>
                  <li>
                    {items.communityIcon === true ? <CheckIcon /> : <CloseIcon />}
                    {items.community}</li>
                  <li  className={items.privateIcon === true ? "no_blur" : "blur"}>
                      {items.privateIcon === false ? <CloseIcon /> : <CheckIcon />}
                     {items.private}</li>
                  <li  className={items.supportIcon === true ? "no_blur" : "blur"}>
                      {items.supportIcon === false ? <CloseIcon /> : <CheckIcon />}
                     {items.support}</li>
                  <li  className={items.domainIcon === true ? "no_blur" : "blur"}> 
                  {items.domainIcon === true ? <CheckIcon /> : <CloseIcon />}
                  {items.domain}</li>
                  <li  className={items.reportsIcon === true ? "no_blur" : "blur"}>
                    {items.reportsIcon === true ? <CheckIcon /> : <CloseIcon />}
                    {items.reports}</li>
                  <li  className="blur"></li>
                </ul>
                <button>Pay</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
