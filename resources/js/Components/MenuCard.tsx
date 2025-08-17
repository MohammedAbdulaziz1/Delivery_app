import { MenuCard as MenuCardType } from "@/types";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

export function MenuCard({ MenuCard }: { MenuCard: MenuCardType }) {
    return (
        <Card key={MenuCard.id} className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>{MenuCard.en_name}</CardTitle>
                <CardDescription>
                    <img src={MenuCard.media?.original_url || ''} alt="Menu Image" className="w-full h-full object-cover"/>
                </CardDescription>

                <CardDescription>
                    <p>{MenuCard.description}</p>
                </CardDescription>
                        
                <CardDescription>
                    <p>{MenuCard.price}</p>
                </CardDescription>
            </CardHeader>
        </Card>
    )
}