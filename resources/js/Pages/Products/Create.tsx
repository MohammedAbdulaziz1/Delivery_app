import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head , useForm} from '@inertiajs/react';
import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/Components/ui/label';
import { FormEventHandler , useRef } from 'react';


type CreateProductForm = {
    en_name?: string;
    ar_name?: string;
    description?: string;
    price?: string;
    media?: string, 
}

export default function Create() {
    const productName = useRef<HTMLInputElement>(null);
    
    const { data, setData, errors, post, reset, processing, progress } = useForm<Required<CreateProductForm>>({ 
        en_name: '',
        ar_name: '',
        description: '',
        price: '',
        media: '', 
    }); 

    const createProduct: FormEventHandler = (e) => {
        e.preventDefault();
 
        post(route('products.store'), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
            onError: (errors) => {
                if (errors.en_name) {
                    reset('en_name'); 
                    productName.current?.focus();
                }
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Product" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <form onSubmit={createProduct} className="space-y-6">

                    <div className="grid gap-2">
                        <Label htmlFor="en_name"> Name *</Label>
 
                        <Input
                            id="en_name"
                            name="en_name"
                            ref={productName}
                            value={data.en_name}
                            onChange={(e) => setData('en_name', e.target.value)}
                            className="mt-1 block w-full"
                            required
                        />
 
                        <InputError message={errors.en_name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="ar_name"> Name *</Label>
 
                        <Input
                            id="ar_name"
                            name="ar_name"
                            ref={productName}
                            value={data.ar_name}
                            onChange={(e) => setData('ar_name', e.target.value)}
                            className="mt-1 block w-full"
                            required
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Description *</Label>
 
                        <Input
                            id="description"
                            name="description"
                            ref={productName}
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="mt-1 block w-full"
                            required
                        />
 
                        <InputError message={errors.description} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="price"> Price *</Label>
 
                        <Input
                            id="price"
                            name="price"
                            ref={productName}
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                            className="mt-1 block w-full"
                            required
                        />
 
                        <InputError message={errors.price} />
                    </div>


                     <div className="grid gap-2">
                        <Label htmlFor="media">Media</Label>
                    
                        <Input
                            id="media"
                            onChange={(e) => setData('media', e.target.files[0])}
                            className="mt-1 block w-full"
                            type="file"
                        />
                    
                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                    
                        <InputError message={errors.media} />
                    </div>
 
                    <div className="flex items-center gap-4">
                        <Button disabled={processing}>Create </Button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}