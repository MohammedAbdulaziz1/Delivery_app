import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/Components/ui/label';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Customer, Product, Restaurant } from '@/types';
import { Head, router, useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';
 
type EditProductForm = {
    en_name?: string;
    ar_name?: string;
    description?: string;
    price?: number;
    status?: string;
    media?: string; 
};
 
export default function Edit({ product }: { product : Product }) {
    const productName = useRef<HTMLInputElement>(null);
 
    const { data, setData, errors, put, reset, processing, progress } = useForm<Required<EditProductForm>>({
        en_name: product.en_name,
        ar_name:product.ar_name,
        description:product.description,
        price:product.price,
        status:product.status,
        media: '', 
    });
 
    const EditProduct: FormEventHandler = (e) => {
        e.preventDefault();
 
        router.post(
            route('admin.products.update', product.id), 
            { ...data, _method: 'PUT' },
            {
                forceFormData: true,
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                },
                onError: (errors) => {
                    if (errors.name) {
                        reset('en_name');
                        productName.current?.focus();
                    }
                },
            });
    };
    return (
        <AuthenticatedLayout>
            <Head title="Edit Product" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <form onSubmit={EditProduct} className="space-y-6">

                        <div className="grid gap-2">
                            <Label htmlFor="name">Product Name</Label>
    
                            <Input
                                id="en_name"
                                name="en_name"
                                ref={productName}
                                value={data.en_name}
                                onChange={(e) => setData('en_name', e.target.value)}
                                className="mt-1 block w-full"
                            />
    
                            <InputError message={errors.en_name} />
                        </div>
 
                        <div className="grid gap-2">
                            <Label htmlFor="ar_name">Product ar_Name *</Label>
        
                            <Input
                                id="ar_name"
                                name="ar_name"
                                ref={productName}
                                value={data.ar_name}
                                onChange={(e) => setData('ar_name', e.target.value)}
                                className="mt-1 block w-full"
                                required
                            />
        
                            <InputError message={errors.ar_name} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="description">Product description *</Label>
        
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
                            <Label htmlFor="price">Product price *</Label>
        
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
                        
                            {!product.mediaFile ? '' : (
                                <a href={product.mediaFile.original_url} target="_blank" className="my-4 mx-auto"><img
                                    src={product.mediaFile.original_url} className={'w-32 h-32'} /></a>)}
                        </div>


                    

                    <div className="flex items-center gap-4">
                        <Button disabled={processing}>Update Product</Button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}