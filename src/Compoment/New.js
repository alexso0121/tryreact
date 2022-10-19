import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component} from 'react';
import './new.css';
//must add '/' at the beginning when accessing the bootstrap

class New extends Component {
  state={ 
    count:1,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrcsoU6qeWsvWdekWJhyI07HYQMfqKBWjWA3UVXraY&s"
  };
  
  render(){
  let classed = this.buttom();
   
  return  (<><><nav style={{ fontSize: 20 }} class="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">{this.formatCount()}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></hr></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>

    </div>
  </nav><div>
      <img src={this.state.imageUrl} alt="" />
    </div></><button type="button" class={classed}>Primary</button></>
)

   
}

  buttom() {
    let classed = "btn btn-";
    classed += this.state.count == 0 ? "primary" : "secondary";
    return classed;
  }

formatCount(){
  const {count}=() =>this.state;
  return count === 0 ? <h1 >zero</h1> : count;
}
}

export default New;
