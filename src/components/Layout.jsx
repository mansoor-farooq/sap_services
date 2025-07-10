import Header from "./Header";
import Footer from "./Footer";



export default function Layout({ children }) {
    return (
        // <div className="flex flex-col min-h-screen">
        //     <Header />
        //     <main>
        //         {children}
        //     </main>
        //     <footer className="absolute bottom-0 w-full">
        //         <Footer />
        //     </footer>
        // </div>
        // CHANGE 1: Use flexbox to structure the layout.
        // - `flex`: Activates flexbox.
        // - `flex-col`: Stacks children vertically (Header, main, Footer).
        // - `min-h-screen`: Ensures the layout is at least the height of the screen.
        <div className="flex flex-col min-h-screen">
            <Header />

            {/* CHANGE 2: Add `flex-grow`. This makes the main content area expand
                and push the footer to the bottom of the page. */}
            <main className="flex-grow">
                {children}
            </main>

            {/* CHANGE 3: The footer no longer needs any special positioning classes.
                It will naturally sit at the bottom after the main content. */}
            <Footer />
        </div>
    )
}