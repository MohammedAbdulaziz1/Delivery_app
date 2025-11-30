import { Link } from "@inertiajs/react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "@/Components/ui/button";
import { RestaurantCard as RestaurantCardType } from "@/types";

export function RestaurantCard({ RestaurantCard }: { RestaurantCard: RestaurantCardType }) {
    return (
        
                <Card key={RestaurantCard.id} className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>{RestaurantCard.en_name}</CardTitle>
                        <CardDescription>
                                 <img src={RestaurantCard.mediaFile?.original_url || '-'} alt="Restaurants Image" className="w-full h-24 object-cover "/>
                        </CardDescription>
                        <Link href={route('customer.menu', { restaurant: RestaurantCard.id })}>
                            <Button>
                                Menu
                            </Button>
                        </Link>
                    </CardHeader>
                </Card>
          
    )
}