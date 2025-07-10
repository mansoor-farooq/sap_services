import Header from "./Header";
import Footer from "./Footer";
// export default function Layout({ children }) {
//     return (
//         <>
//             <Header />
//             <main className="min-h-screen">{children}</main>
//             <Footerlay /> {/* Optional */}
//         </>
//     );
// }// components/Layout.js

// components/Layout.js


// // // In Layout.jsx
export default function Layout({ children }) {
    return (
        <div className="relative min-h-screen pb-20"> {/* Match footer height */}
            <Header />
            <main>
                {children}
            </main>
            <footer className="absolute bottom-0 w-full">
                <Footer />
            </footer>
        </div>
    )
}