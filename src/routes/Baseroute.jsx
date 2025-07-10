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

//     <div className="flex items-center justify-start w-screen h-screen overflow-hidden bg-black">
//         <h1 className="px-10 text-6xl font-extrabold text-yellow-300 animate-slide whitespace-nowrap">
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