import { useAuthService } from '@services/AuthContext';
import Link from 'next/link';

const Nav = () => {
    const authService = useAuthService();
    const hasPermission = authService.roles?.includes('Admin');

    return (
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/login'>LogIn</Link>
            <Link href='/products'>Products</Link>
            <Link href='/product'>Product</Link>
            {
                hasPermission ? 
                <>
                    <Link href='/addproduct'>Add Product</Link>
                    <Link href='/deleteproduct'>Delete Product</Link>
                    <Link href='/registeraccount'>Register Account</Link>
                    <Link href='/deleteaccount'>Delete Account</Link>
                </>: null
            }
        </nav>
    );
}

export default Nav