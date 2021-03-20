import Amigos from "../Amigos/Amigos";

const Home = () => {
    const states = ['Active', 'Inactive', 'Blocked'];
    return (
        <div className="container">
            <div className='row mt-5'>
                {
                    states.map((state, index) =>
                        <Amigos key={index} state={state} />
                    )
                }
            </div>
        </div>
    )

}

export default Home;