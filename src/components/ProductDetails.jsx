import { useEffect, useState } from 'react';
import { db } from "../../config/firebase";
import { doc, getDoc } from 'firebase/firestore';
import { useParams, Link } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const productDocRef = doc(db, "products", id);
                const productDocSnapshot = await getDoc(productDocRef);
                if (productDocSnapshot.exists()) {
                    setProduct({ id: productDocSnapshot.id, ...productDocSnapshot.data() });
                } else {
                    console.log("No such product exists!");
                }
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        getProductDetails();
    }, [id]);

    return (
        <div className='item'>
            
            {product ? (
                <div>
                    <img src={product.Image} style={{ width: 300 }} alt={product.Model} />
                    <h1>Name: {product.Model}</h1>
                    <h2>Color: {product.Color}</h2>
                    <h2>Size: {product.Size}</h2>
                    <h3>Price: {product.Price}</h3>
                    
                </div>
                
            ) : (
                <p>Routing to Product Details...</p>
            )}
             <Link to='/'><button className='button'>Home</button></Link>
        </div>
    );
}

export default ProductDetails;