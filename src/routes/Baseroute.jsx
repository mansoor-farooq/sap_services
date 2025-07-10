import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../pages/NoPagefound'
import Home from '../pages/Home'


export default function Baseroute() {
    return (
        // <div >
        //     <Layout>

        //         <Routes>
        //             <Route path='/' element={<Home />} />
        //             <Route path='*' element={<NotFoundPage />} />
        //         </Routes>
        //     </Layout>
        // </div>


        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>


    )
}

// <div>

//     <div className="w-screen h-screen bg-black flex items-center justify-start overflow-hidden">
//         <h1 className="text-6xl font-extrabold text-yellow-300 animate-slide px-10 whitespace-nowrap">
//             MANSOOR
//         </h1>
//     </div>
// </div>
// <BrowserRouter>
//     <Layout>
//         <Routes>
//             <Route path='/' element={<Header />} />
//             <Route path='*' element={<NotFoundPage />} />
//         </Routes>
//     </Layout>
// </BrowserRouter>