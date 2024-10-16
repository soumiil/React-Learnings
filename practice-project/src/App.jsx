import "./App.css";

function App() {
    const username = "Soumil Agawral";

    return (
        <>
            <div className="h-screen w-full flex items-center justify-center bg-gray-200">
                <h1 className="bg-black text-white py-5 rounded-l shadow-xl h-[20rem] w-[50rem] flex items-center justify-center text-center text-8xl overflow-auto font-semibold flex-wrap">
                    Hello {username}, <br />
                    Hope you are doing well! <br />
                    This is a box.
                </h1>
            </div>
        </>
    );
}

export default App;
