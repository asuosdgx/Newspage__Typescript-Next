import Link from "next/link";

export default function Header(){   
    return ( 
    <div>
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl font-bold">News App - Latest Articles</h1>
        </header>
        <nav className="p-4 bg-gray-100 d-flex ">
        <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        <Link href="/categories" className="text-blue-500 hover:underline ml-4">Categories</Link>
        </nav>
    </div>

    )
}