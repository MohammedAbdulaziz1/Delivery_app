import {  Product } from "@/types";
import { MenuCard as MenuCardType } from "@/types";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { router } from "@inertiajs/react";
import { toast } from "sonner";

export function MenuCard({ MenuCard, restaurantId }: { MenuCard: Product; restaurantId: number }) {
    const handleCreateOrder = () => {
        router.post(route('customer.orders.store'), {
            restaurant_id: restaurantId,
            product_id: MenuCard.id,
        }, {
            onSuccess: () => {
                toast.success('Order created successfully');
            },
            onError: (errors) => {
                toast.error('Failed to create order');
                console.error(errors);
            }
        });
    };

    return (
        <Card key={MenuCard.id} className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>{MenuCard.en_name}</CardTitle>
                <CardDescription>
                    <img src={MenuCard.mediaFile?.original_url || '-'} alt="Product Image" className="w-full h-24 object-cover "/>
                </CardDescription>

                <CardDescription>
                    <p>{MenuCard.description}</p>
                </CardDescription>
                        
                <CardDescription>
                    <p>{MenuCard.price}</p>
                </CardDescription>
                <Button type="button" variant="outline" onClick={handleCreateOrder}>
                    Create order
                </Button>

            </CardHeader>
        </Card>
    )
}