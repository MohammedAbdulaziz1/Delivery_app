import { Link } from "@inertiajs/react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "@/components/ui/button";
import { RestaurantCard as RestaurantCardType } from "@/types";

export function RestaurantCard({ RestaurantCard }: { RestaurantCard: RestaurantCardType }) {
    return (
        
                <Card key={RestaurantCard.id} className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>{RestaurantCard.name}</CardTitle>
                        <CardDescription>
                            <img src={RestaurantCard.media?.original_url || ''} alt="Restaurants Image" className="w-full h-full object-cover"/>
                        </CardDescription>
                        <Link href={route('menu', { restaurant: RestaurantCard.id })}>
                            <Button>
                                Menu
                            </Button>
                        </Link>
                    </CardHeader>
                </Card>
          
    )
}