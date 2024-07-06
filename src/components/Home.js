const Home = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="container p-10">
                    <h1 className="text-5xl font-extrabold text-gold text-center mb-6">Pizza Niceness...</h1>
                    <span className="text-2xl text-center mt-6 text-light-gray">
                        There's something magical about sharing a pizza. Whether it's the joy of trying new flavors together,<br />
                        the laughter that fills the air, or the way every slice brings people closer, pizza is more than just <br /> food –
                        it's a bond that connects us all. Join us in celebrating the simple pleasure of sharing a delicious slice with
                        friends and family.
                    </span>
                </div>
                <div>
                    <img src="/Pizza sharing-amico.svg" alt="pizza sharing" className="w-full h-screen"/>
                </div>
        </div>
    </>
    );
}

export default Home;
