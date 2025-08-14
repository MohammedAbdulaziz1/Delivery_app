import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/components/ui/button"
import { RestaurantCard as RestaurantCardComponent } from "@/Components/RestaurantCard";
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
import { RestaurantCard } from "@/types";

export default function Index({ restaurants }: { restaurants: RestaurantCard[]}) {
    return (
        <AuthenticatedLayout>
            <div className="flex justify-center items-center h-screen">
              {/* the restaurants cards should be in a row and the cards should be in a container and evrey 3 cards should be in a row */}
              <div className="flex flex-row gap-4">
                <div className="container">
                  <div className="flex flex-row gap-4">
                    {restaurants.map((restaurant) => (
                      <RestaurantCardComponent RestaurantCard={restaurant} />
                    ))}
             </div>

              </div>
              </div>
              </div>
        </AuthenticatedLayout>
    )
}