
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (

        <div className="flex flex-col min-h-screen overflow-hidden" >

            {/* <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto"> */}

            <Header />
            {/* </div> */}

            <main className="flex-grow w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
                <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">

                    <div className="main">
                        {children}
                    </div>
                </div>
            </main>


            {/* Footer at the bottom */}
            <Footer />

        </div>
    )
}