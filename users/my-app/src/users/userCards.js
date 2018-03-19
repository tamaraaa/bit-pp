const User = (props) => {
    const { dataUser } = props

    const getDate = (date) => {
        const myDate = new Date(date)
        const year = myDate.getFullYear();
        const month = myDate.getMonth();
        const day = myDate.getDate()
        return (`${day}-${month}-${year}`)
    }

    return (
        <div>
            <div className="row">
        <div className="col s12 ">
          <div className="card">
            <div className="card-image">
              <img src={dataUser.picture.thumbnail}/>
              <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
              <p>{`name: ${dataUser.name.first}
              date of birth: ${getDate(dataUser.dob)}`}</p>
            </div>
            </div>
        </div>
      </div>
        </div>
    )
}


const Main = (props) => {
    const { dataMain } = props
    return (
        //  <div>{console.log(dataMain)}</div>   //
        <div className="container"> <ul className="collection">
            {
                dataMain.map((user,index) => {
                    return <User dataUser={user} key={index} />
                })
            }

        </ul>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © 2018 copyright BIT
        </div>
            </div>
        </footer>
    )
}




const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">React Users</a>

            </div>
        </nav>
    )
}


const App = (props) => {
    const { data } = props
    return (
        <div>
            <Header />
            <Main dataMain={data} />
            <Footer />
        </div>

    )
}


ReactDOM.render(<App data={usersData} />, document.querySelector(".root"))