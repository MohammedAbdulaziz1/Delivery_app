import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { MenuCard as MenuCardComponent } from "@/Components/MenuCard";
import { Restaurant } from "@/types";

export default function Index({ restaurants }: { restaurants: Restaurant}) {
    return (
        <AuthenticatedLayout>
            <div className="flex justify-center items-center h-screen">
              <div className="flex flex-row gap-4">
                <div className="container">
                  <div className="flex flex-row gap-4">
                    {restaurants.products.map((product) => (
                        <MenuCardComponent MenuCard={product} />
                    ))}
             </div>

              </div>
              </div>
              </div>
        </AuthenticatedLayout>
    )
}