import Link from 'next/link';

const Nav = () => {
    return (
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/login'>LogIn</Link>
            <Link href='/products'>Products</Link>
            <Link href='/product'>Product</Link>
            <Link href='/addproduct'>Add product</Link>
        </nav>
    );
}

export default Nav