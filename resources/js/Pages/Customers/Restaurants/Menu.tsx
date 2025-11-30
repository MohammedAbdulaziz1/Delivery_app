import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { MenuCard as MenuCardComponent } from "@/Components/MenuCard";
import { Restaurant } from "@/types";

export default function Index({ restaurants }: { restaurants: Restaurant}) {
    return (
        <AuthenticatedLayout>
            <div className="flex justify-center items-center h-screen">
              <div className="flex flex-row gap-4">
                <div className="container">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    
                    {restaurants.products.map((product) => (
                        <MenuCardComponent 
                            key={product.id}
                            MenuCard={product} 
                            restaurantId={restaurants.id}
                        />
                    ))}
             </div>

              </div>
              </div>
              </div>
        </AuthenticatedLayout>
    )
}