import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import GetAllProducts from '../data/api'; // Make sure the path is correct

const Tab1: React.FC = () => {
  const { data, loading, error } = GetAllProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;
 console.log(data);
  return (
    <IonPage className=''>
      <IonHeader>
        <IonToolbar>
          <IonTitle>UllstenCode</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='contentContainer'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonText>
            {/* Render the list of products */}
  <div className='container mx-auto px-4'>
  <h2 className="text-2xl font-bold mb-4 text-center">All Products</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
  {data.map((product) => (
    <div key={product.productId} className="bg-slate-300 rounded-lg shadow-md p-4 flex flex-col">
      <div className="flex-1">
        {product.image ? (
          <img src={product.image} alt={product.productName} className="w-full h-32 object-cover rounded-t-lg" />
        ) : (
          <div className="w-full h-32 flex items-center justify-center rounded-t-lg bg-slate-200">
            <span>No pic</span>
          </div>
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.productName}</h3>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3 p-4 border-t">
        <span className="text-gray-900 font-bold">{product.price} USD</span>
        <span className={`inline-block px-3 py-1 text-sm ${product.quantity > "0" ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'} rounded-full`}>
          {product.quantity > "0" ? `In Stock (${product.quantity})` : 'Out of Stock'}
        </span>
      </div>
    </div>
  ))}
</div>
  </div>

        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
