import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/Components/ui/button"
import { MenuCard as MenuCardComponent } from "@/Components/MenuCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/Components/ui/label"
import { Link } from "@inertiajs/react";
import { MenuCard, RestaurantCard, Products } from "@/types";
import { Restaurant } from "@/types";

export default function Index({ restaurant }: { restaurant: Restaurant}) {
    return (
        <AuthenticatedLayout>
            <div className="flex justify-center items-center h-screen">
              <div className="flex flex-row gap-4">
                <div className="container">
                  <div className="flex flex-row gap-4">
                    {restaurant.products.map((product) => (
                        <MenuCardComponent MenuCard={product} />
                    ))}
             </div>

              </div>
              </div>
              </div>
        </AuthenticatedLayout>
    )
}